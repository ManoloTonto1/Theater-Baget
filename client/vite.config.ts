import {
	defineConfig 
} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/Theater-Baget/',
	plugins: [react()],
	server: {
		proxy: {
			'/api': {
				target: 'http://127.0.0.1:8080/api',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			},
			// '/extraService': {
			//   target: 'ExtraServiceUrl',
			//   changeOrigin: true,
			//   rewrite: (path) => path.replace(/^\/extraService/, '')
			// },
		}
	}
});
