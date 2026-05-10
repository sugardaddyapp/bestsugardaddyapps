import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const ghPages = process.env.DEPLOY_TARGET === 'github-pages';

export default defineConfig({
  site: ghPages ? 'https://sugardaddyapp.github.io' : 'https://bestsugardaddyapps.com',
  base: ghPages ? '/bestsugardaddyapps/' : '/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    assets: 'assets',
  },
});
