import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import './index.css'
const app = createApp(App)

const api = axios.create({
  // baseURL: 'http://192.168.10.10:5005', // Replace with your base URL
  baseURL: 'http://192.168.100.2:5000' // Replace with your base URL
})

export default api

app.use(router)
app.mount('#app')
