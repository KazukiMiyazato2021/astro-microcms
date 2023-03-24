import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://KazukiMiyazato2021.github.io/astro-microcms',
  base: '/astro-microcms',
  integrations: [mdx(), sitemap(), tailwind()],
  vite: {
    base: '/astro-microcms',
  },
});