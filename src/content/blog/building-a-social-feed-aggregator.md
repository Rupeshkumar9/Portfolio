---
title: "Designing a Social Feed Aggregator with Node.js and MongoDB"
description: "How to structure source adapters, normalized records, deduplication, cursor pagination, and failure handling for a social feed hub."
pubDate: 2026-08-08
tags: ["Backend", "Node.js", "MongoDB"]
heroImage: "/assets/blog/social-feed-architecture.svg"
heroAlt: "A data pipeline showing source adapters, normalization, and a MongoDB API"
draft: false
featured: false
---

A feed aggregator looks like a list UI, but most of the engineering lives behind the list. Different sources use different identifiers, timestamps, media shapes, and rate limits. A maintainable system needs to turn that variety into one internal model without hiding where a record came from.

## Start with a normalized record

The API should return a stable shape even when an adapter changes. A useful internal record might include:

```ts
type FeedItem = {
  source: "github" | "x" | "instagram" | "manual";
  sourceId: string;
  canonicalUrl: string;
  title?: string;
  text?: string;
  author?: { name?: string; handle?: string };
  publishedAt?: Date;
  savedAt: Date;
  media: Array<{ type: "image" | "video"; url: string }>;
};
```

The important fields are the source and source ID. They form a natural uniqueness key and let the application trace a normalized item back to the original adapter.

## Keep source adapters separate

Each source adapter should do three things: fetch source data, map it to the normalized model, and return source-specific errors with enough context to debug them. It should not know how MongoDB indexes are created or how the HTTP response is paginated.

That separation makes a SocialFeed Hub-style project easier to extend. A new source can be added behind the same interface, and the API layer can keep returning the same response shape:

```ts
interface FeedAdapter {
  fetchPage(cursor?: string): Promise<{
    items: FeedItem[];
    nextCursor?: string;
  }>;
}
```

The adapter contract is also a good place to make limitations visible. If a source does not provide a stable published timestamp, the adapter should say so instead of manufacturing false precision.

## Make ingestion idempotent

Ingestion jobs are retried. Networks fail after the remote service has accepted a request, workers restart, and users may press refresh twice. A job that inserts blindly will eventually create duplicates.

Create a unique compound index on the source and source ID, then use an upsert:

```js
await db.collection("feed_items").updateOne(
  { source: item.source, sourceId: item.sourceId },
  { $set: item, $setOnInsert: { firstSeenAt: new Date() } },
  { upsert: true }
);
```

The database constraint is the final guard. Application-level duplicate checks are useful for reducing work, but they should not be the only protection when multiple workers can ingest the same source.

## Choose cursor pagination for a changing feed

Offset pagination is easy to explain, but it becomes unstable while new items are inserted. A cursor based on a stable sort key gives a reader a better chance of seeing each item once. A common ordering is `publishedAt` descending with `_id` as a tie-breaker.

The cursor should be opaque to the client. Encode the last sort values, sign or validate them, and return a `nextCursor` only when more results exist. The API can then query for records older than the cursor instead of skipping an ever-changing number of documents.

## Plan for partial failure

An aggregator should not make the whole feed unavailable because one source timed out. Track adapter state separately: last successful fetch, last error, retry count, and backoff time. Return cached data with a small status indicator when it is safer than returning an empty list.

Rate limits and terms of service also belong in the design. Use official APIs where available, respect provider limits, avoid collecting data that the product does not need, and give users a way to remove saved records. A technically elegant adapter is still a poor feature if it creates an avoidable privacy or platform-compliance problem.

## Keep the API boring

The frontend should receive a predictable response:

```json
{
  "items": [],
  "nextCursor": "opaque-value",
  "sourceStatus": {
    "github": "ok",
    "x": "stale"
  }
}
```

That shape keeps loading, empty, stale, and retry states explicit. It also makes it easier to test the dashboard without requiring every live source to be available.

The central lesson is to separate acquisition from representation. Source adapters absorb external differences, MongoDB enforces identity, cursor pagination stabilizes the reader experience, and explicit failure state keeps the system honest. Those boundaries are what let a small social feed hub grow without turning every new integration into a rewrite.
