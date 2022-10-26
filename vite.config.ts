import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 1824,
    open: false
  },
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
