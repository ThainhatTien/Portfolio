import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio/', // Đường dẫn base cho GitHub Pages
  plugins: [react()],
}) 