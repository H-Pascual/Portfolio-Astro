// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static', // ⬅️ Requerido para sitios estáticos
  adapter: vercel({}),
});