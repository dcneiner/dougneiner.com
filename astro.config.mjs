import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import { remarkReadingTime } from './remark-reading-time.mjs';
import { rehypeExcerptPlugin } from './rehype-excerpt-plugin.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [rehypeExcerptPlugin]
  },
  vite: {
    build: {
      assetsInlineLimit: 1024,
    },
  }
});