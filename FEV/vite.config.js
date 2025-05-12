import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
    root: '.', // או FEV אם הקוד לא בתיקיית שורש
  build: {
    outDir: 'dist'
  }
})
