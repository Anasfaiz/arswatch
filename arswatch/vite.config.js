import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  // Use './' to make all paths relative, which is safer for most deployments
  base: './', 
  plugins: [
    react(),
    tailwindcss()
  ],
})