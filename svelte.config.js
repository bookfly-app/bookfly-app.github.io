import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			fallback: "404.html",
			pages: "build/web",
			assets: "build/web",
		}),
		prerender: {
			entries: [],
		},
	},
};
