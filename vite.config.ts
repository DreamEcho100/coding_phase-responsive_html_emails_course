import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	publicDir: './src/public',
	build: {
		minify: 'esbuild',
	},
});
