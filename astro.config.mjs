import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rupesh-livid.vercel.app',
  trailingSlash: 'always',
  output: 'static',
  integrations: [sitemap()],
});
