import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.', // חשוב!!
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
});
