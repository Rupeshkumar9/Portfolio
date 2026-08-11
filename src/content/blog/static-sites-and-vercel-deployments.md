---
title: "From Git Push to Static Deployment: How Astro and Vercel Fit Together"
description: "A practical explanation of how Markdown becomes static HTML, how Vercel previews Git branches, and what to verify before production."
pubDate: 2026-08-05
tags: ["DevOps", "Astro", "Vercel"]
heroImage: "/assets/blog/static-deployments-vercel.svg"
heroAlt: "A Git push flowing through an Astro build into a Vercel deployment"
draft: false
featured: false
---

Static site generation means the server does not need to assemble a page for every request. During a build, the application reads its source content, renders templates, and writes HTML, CSS, JavaScript, and assets to an output directory. A visitor then receives files that are already prepared.

For a portfolio blog, this is a strong default. A Markdown file can become a complete article route, an RSS entry, and a sitemap URL during the same build. There is no database request on the page view and no runtime Markdown parser to keep secure.

## What Astro does at build time

An Astro content collection reads the frontmatter and body of each Markdown file. A route such as `src/pages/blog/[slug].astro` asks Astro to generate one path per entry. The Markdown body is rendered into the article layout, while the title, date, tags, thumbnail, and description remain available as typed data.

The result is ordinary HTML. Astro only sends JavaScript for the small interactions that need it, such as the starfield, typewriter, mobile menu, or stats animation. The article itself does not require a client-side framework to become readable.

## What happens after a Git push

With a Git-connected Vercel project, a branch push can create a preview deployment. The build command installs dependencies, runs the Astro build, and publishes `dist/`. A merge to the configured production branch creates the production deployment.

The useful workflow is therefore:

1. Create a branch for a content or code change.
2. Add a Markdown file and its local thumbnail.
3. Run the build locally.
4. Push the branch and inspect the preview URL.
5. Merge to the production branch after checking the generated article, metadata, and links.

The preview step is valuable even for a one-file blog change. It catches incorrect frontmatter, broken asset paths, missing routes, and CSS regressions before they reach the public domain.

## A deployment checklist

Before merging, check the same things the build system will check:

- The post has a unique filename and a valid date.
- The description is useful as a search snippet.
- The thumbnail path resolves from the built page.
- Code blocks render without horizontal overflow on mobile.
- The canonical URL points to the production site.
- The post appears in the archive, RSS feed, and sitemap.
- Draft posts are not published accidentally.
- Internal links use the site's route structure rather than a local development port.

Asset paths are a common source of mistakes. Files in `public/` are served from the site root, so `public/assets/blog/example.svg` is referenced as `/assets/blog/example.svg`. A route-relative path may appear to work on `/blog/` and then fail on `/blog/a-deep-post/`; root-relative paths avoid that class of bug.

## Static does not mean immutable

Static output can still be updated frequently. Adding a post creates a new commit, the build regenerates the archive and feed, and Vercel publishes the new files. The deployment is immutable once created, which makes previews and rollbacks easier to reason about.

The tradeoff is that content changes need a build. That is exactly what this portfolio wants: writing remains versioned in Git, every article is reviewable as Markdown, and the public site stays fast and predictable. If the project later needs real-time data, authentication, or an editorial CMS, that is a separate architectural decision—not a reason to add server-side rendering to a static developer blog today.
