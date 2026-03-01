// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import mermaid from 'astro-mermaid';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://dist-eta-two-22.vercel.app',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), sitemap(), mermaid()],
  adapter: vercel()
});