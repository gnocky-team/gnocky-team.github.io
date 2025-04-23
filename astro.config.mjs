// @ts-check
import { defineConfig } from 'astro/config';
import config from './src/config/site';
import tailwindcss from "@tailwindcss/vite";
import solidJs from "@astrojs/solid-js";
import pagefind from "astro-pagefind";


export default defineConfig({
  site: config.base_url,
  outDir: 'docs',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    solidJs(),
    pagefind()
  ],
  build: {
    assets: 'astro-assets',
    inlineStylesheets: 'never',
  }
});