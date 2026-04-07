import { createApp } from 'vue'
import { initThemeFromStorage } from '@/utils/themeInit'
import App from './App.vue'
import router from './router'
import './style.css'

initThemeFromStorage()

createApp(App).use(router).mount('#app')
