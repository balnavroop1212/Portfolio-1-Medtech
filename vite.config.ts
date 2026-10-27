import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-assets-plugin',
      closeBundle() {
        const src = path.resolve(__dirname, 'Assets');
        const dest = path.resolve(__dirname, 'dist', 'Assets');
        if (fs.existsSync(src)) {
          fs.cpSync(src, dest, { recursive: true });
          console.log('[vite] Copied Assets to dist/Assets for Vercel deployment');
        }
      },
    },
  ],
  server: {
    port: 5173,
    open: true,
  },
});
