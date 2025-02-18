import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { UserConfig } from 'vite';
import { createHtmlPlugin as html } from 'vite-plugin-html';

export default {
	root: 'src',
	plugins: [html(), tailwindcss(), react()],
	build: {
		target: 'esnext',
		outDir: '../dist',
		emptyOutDir: true,
	},
} satisfies UserConfig;
