// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

// SSR (Node) so the local SQLite booking + /admin panel work.
// Marketing pages are still rendered on demand but are effectively static.
export default defineConfig({
  site: 'https://senapremiumdetailing.com',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  vite: {
    plugins: [tailwindcss()],
  },
});
