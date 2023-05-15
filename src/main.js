import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import './index.css'
import BaseWrapper from '@/components/ui/BaseWrapper.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import NextPage from '@/components/icons/NextPage.vue'
import BaseRadio from '@/components/ui/BaseRadio.vue'
import BaseTextarea from '@/components/ui/BaseTextarea.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const app = createApp(App)

app.use(router)
app.component('base-wrapper', BaseWrapper)
app.component('base-input', BaseInput)
app.component('base-radio', BaseRadio)
app.component('base-textarea', BaseTextarea)
app.component('base-button', BaseButton)
app.component('next-page', NextPage)

app.mount('#app')
