import { vitePreprocess } from "@sveltejs/kit/vite";
import { mdsvex } from 'mdsvex';

import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(
      { fallback: '404.html' }
    ),
  },
  extensions: ['.svelte', '.svx'],

  preprocess: [
    vitePreprocess({}),
    mdsvex({ extensions: ['.svx'] })
  ],
};

export default config;
