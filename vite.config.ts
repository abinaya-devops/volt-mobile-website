import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/volt-mobile-website/',
  plugins: [react()],
})
