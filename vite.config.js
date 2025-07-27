import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
      external: (id) => {
        // Loại trừ các file JSON trong thư mục locales khỏi build
        return id.includes('/locales/') && id.endsWith('.json');
      },
    },
  },
  publicDir: 'public',
  assetsInclude: ['**/*.json'],
  // Loại trừ thư mục locales khỏi quá trình build
  exclude: ['locales/**']
}) 