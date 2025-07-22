// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static'; // ⬅️ Usa el adaptador estático de Vercel

export default defineConfig({
  output: 'static', // ⬅️ Requerido para sitios estáticos
  adapter: vercel({}),
});