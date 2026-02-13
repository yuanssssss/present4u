import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.mp4'],
  server: {
    host: '0.0.0.0', // 允许外部访问
    port: 5173,
    cors: true, // 启用 CORS
    open: false, // 不自动打开浏览器
  },
  preview: {
    host: '0.0.0.0', // 允许外部访问
    port: 4173,
    cors: true, // 启用 CORS
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.mp4')) {
            return 'assets/video/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  }
})
