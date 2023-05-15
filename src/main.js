import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import './index.css'
import BaseWrapper from '@/pages/components/ui/BaseWrapper.vue'
import BaseInput from '@/pages/components/ui/BaseInput.vue'
import NextPage from '@/pages/components/icons/NextPage.vue'
import BaseRadio from '@/pages/components/ui/BaseRadio.vue'
import BaseTextarea from '@/pages/components/ui/BaseTextarea.vue'
import BaseButton from '@/pages/components/ui/BaseButton.vue'

const app = createApp(App)

app.use(router)
app.component('base-wrapper', BaseWrapper)
app.component('base-input', BaseInput)
app.component('base-radio', BaseRadio)
app.component('base-textarea', BaseTextarea)
app.component('base-button', BaseButton)
app.component('next-page', NextPage)

app.mount('#app')
