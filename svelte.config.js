// import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-cloudflare';
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		// vite: {
		// 	'@lib': path.resolve('./src/lib'),
		// 	'$lib': path.resolve('./src/lib'),
		// 	// {
		// 	//    noExternal: ['@firebase/app', '@firebase/functions', '@firebase/firestore']
		// 	// }
		// }
	}
};

export default config;
