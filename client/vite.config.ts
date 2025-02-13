import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [
      react(),
      tailwindcss()
    ],
    server: {
      proxy: {
        "/api": env.VITE_API_URL || "http://localhost:5000"
      }
    },
    preview: {
      proxy: {
        "/api": env.VITE_API_URL || "http://localhost:5000"
      }
    },
    build: {
      outDir: 'dist',
      sourcemap: true
    }
  }
})

