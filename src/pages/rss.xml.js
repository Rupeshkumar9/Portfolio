import rss from '@astrojs/rss';
import { getPublishedPosts } from '../utils/blog.ts';
import { siteConfig } from '../config.ts';

export async function GET(context) {
  const posts = await getPublishedPosts();
  return rss({
    title: `${siteConfig.name} — Developer Blog`,
    description: siteConfig.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
    })),
  });
}
