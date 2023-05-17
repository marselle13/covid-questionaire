import { createStore } from 'vuex'
import PersonalModule from '@/store/modules/covid'

const store = createStore({
  modules: {
    personal: PersonalModule,
  },
})

export default store
