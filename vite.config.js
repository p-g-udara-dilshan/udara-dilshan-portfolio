import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Real HTML entrypoints: the build produces /index.html and
// /projects/index.html. Cloudflare Pages can serve both directly.
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                projects: 'projects/index.html',
            },
        },
    },
});
