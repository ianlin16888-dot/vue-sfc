import { defineConfig } from 'vite'
import vue from '@vitejs/vue'

export default defineConfig({
  plugins: [vue()],
  base: '/vue-sfc/'  // 💡 確保前後都有斜線！
})