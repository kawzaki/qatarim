import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This makes the app work on both Render (root) and GitHub Pages (sub-folder)
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  optimizeDeps: {
    include: ['react-pageflip-rtl']
  }
})
