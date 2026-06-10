import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // 💡 關鍵：這裡必須是 @vitejs/plugin-vue 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/vue-sfc/'
})