import { sveltekit } from "@sveltejs/kit/vite";

/** @type {import('vite').UserConfig} */
const config = {
	server: {
		host: true,
		port: 6969,
  },
  	plugins: [sveltekit()],
};

export default config;
