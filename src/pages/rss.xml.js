import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: "Ray's Lab",
    description: 'A public build journal for AI learning tools - essays, build logs, and notes from ongoing work.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/writing/${post.id}`,
      categories: [post.data.postType ?? 'essay', ...(post.data.tags ?? [])],
    })),
  });
}

