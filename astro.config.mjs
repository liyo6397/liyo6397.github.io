// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  // 1. Your custom domain or default GitHub Pages domain
  site: 'https://liyo6397.github.io',

  // 2. The repository name as the base path (omit or use '/' if deploying to <username>.github.io)
  base: '/',
});