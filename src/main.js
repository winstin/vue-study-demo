import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon/index.vue'// svg组件

const app = createApp(App)

app.use(router)
app.component('svg-icon', SvgIcon)

app.mount('#app')
