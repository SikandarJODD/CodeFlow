import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess()],

	kit: {
		adapter: adapter(),
		alias: {
			$ui: './src/lib/components/ui',
			$lib: './src/lib'
		}
	},
	vitePlugin: {
		inspector: true
	}
};

export default config;
