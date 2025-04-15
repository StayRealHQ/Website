// @ts-check
import { defineConfig } from 'astro/config';
import unocss from 'unocss/astro'

export default defineConfig({
  site: 'https://stayreal.vexcited.com',
  integrations: [unocss({ injectReset: true })]
});
