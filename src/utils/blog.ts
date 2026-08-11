import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog');
  return posts
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function getFeaturedAndLatestPosts(posts: BlogPost[], count = 3): BlogPost[] {
  const featured = posts.find((post) => post.data.featured);
  const ordered = featured ? [featured, ...posts.filter((post) => post.id !== featured.id)] : posts;
  return ordered.slice(0, count);
}

export function formatPostDate(date: Date): string {
  return new Intl.DateTimeFormat('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }).format(date);
}

export function readingTime(post: BlogPost): string {
  const words = (post.body ?? '').trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}

export function postHref(post: BlogPost): string {
  return `/blog/${post.id}/`;
}

export function pageHref(page: number): string {
  return page <= 1 ? '/blog/' : `/blog/page/${page}/`;
}
