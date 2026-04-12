// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://nhade.github.io',
  integrations: [mdx(), sitemap()],
  redirects: {
    '/blog': '/writing',
    '/blog/[...slug]': '/writing/[...slug]',
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});

