import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
  const posts = await getCollection('posts');
  
  return rss({
    title: 'Domenico Tenace - Software Developer',
    description: 'Software developer passionate about the IT world and everything related to it',
    site: context.site ?? 'https://domenicotenace.dev',
    items: posts
    .filter((post) => new Date(post.data.date).valueOf() < new Date().valueOf())
    .map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.date),
      link: `/blog/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
};
