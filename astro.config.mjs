// @ts-check
import { defineConfig } from 'astro/config';
import unocss from 'unocss/astro'
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [unocss({ injectReset: true })]
});

