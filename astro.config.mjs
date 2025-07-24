// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static', // ⬅️ Requerido para sitios estáticos
  adapter: vercel({}),
  site: 'https://www.hectorpascual.com/',
  integrations: [
    sitemap(),
  ],
});