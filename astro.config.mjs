// astro.config.mjs
import { defineConfig } from 'astro/config'; 
import mdx from '@astrojs/mdx'; 
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://really-rich-apps.github.io/really-rich-apps-website/',
  base: '/really-rich-apps-website/',  // <<< this is key
  integrations: [tailwind(), mdx(), sitemap()],
  outDir: './dist',
});