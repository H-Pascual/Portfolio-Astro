// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static', // ⬅️ Requerido para sitios estáticos
  adapter: vercel({}),
  site: 'https://www.hectorpascual.com/',
  integrations: [
    sitemap({
      // Fuera del sitemap: páginas de error y el CV en PDF (bloqueado en robots.txt)
      filter: (page) => !/\/404\/?$/.test(page) && !/\/curriculum\/?$/.test(page),
      // Fecha de última modificación y versiones de idioma enlazadas entre sí
      lastmod: new Date(),
      i18n: { defaultLocale: 'es', locales: { es: 'es', en: 'en' } },
    }),
  ],
});