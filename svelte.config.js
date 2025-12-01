import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";
import relativeImages from "mdsvex-relative-images";

import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: "404.html",
      pages: "build",
      assets: "build",
      precompress: false,
      strict: true,
    }),
  },
  extensions: [".svelte", ".svx"],

  preprocess: [
    vitePreprocess({}),
    mdsvex({ extensions: [".svx"], remarkPlugins: [relativeImages] }),
  ],
};

export default config;
