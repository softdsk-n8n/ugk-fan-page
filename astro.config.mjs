import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://softdsk-n8n.github.io',
  base: '/ugk-fan-page',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
    format: 'file',
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      charset: 'utf8',
    },
  },
});
