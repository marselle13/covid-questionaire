import { createStore } from 'vuex'
import PersonalModule from '@/store/modules/personal'

const store = createStore({
  modules: {
    personal: PersonalModule,
  },
})

export default store
