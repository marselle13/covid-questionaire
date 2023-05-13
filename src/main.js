import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import './index.css'
import BaseWrapper from '@/pages/components/ui/BaseWrapper.vue'
import BaseInput from '@/pages/components/ui/BaseInput.vue'
import NextPage from '@/pages/components/icons/NextPage.vue'

const app = createApp(App)

app.use(router)
app.component('base-wrapper', BaseWrapper)
app.component('base-input', BaseInput)
app.component('next-page', NextPage)

app.mount('#app')
