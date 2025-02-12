import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss()
    ],
    server: {
      proxy: {
        "/api": {
          target: "https://tracktryvia-api.vercel.app",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    preview: {
      proxy: {
        "/api": {
          target: "https://tracktryvia-api.vercel.app",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    build: {
      outDir: 'dist',
      sourcemap: true
    }
  }
})

