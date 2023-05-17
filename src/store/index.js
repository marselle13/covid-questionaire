import { createStore } from 'vuex'
import CovidModule from '@/store/modules/covid'

const store = createStore({
  modules: {
    covid: CovidModule,
  },
})

export default store
