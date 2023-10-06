import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
		appDir: 'src',
		adapter: adapter({
		// default options are shown. On some platforms
		// these options are set automatically — see below
		pages: 'build',
		assets: 'build',
		fallback: 'index.html',
		precompress: false,
		strict: false
    })
  },
  preprocess: vitePreprocess()
};
export default config;
