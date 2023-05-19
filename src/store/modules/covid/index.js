import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
  namespaced: true,
  state() {
    return {
      personal: {
        firstName: '',
        lastName: '',
        email: '',
      },
      condition: {
        hadCovid: '',
        hadTest: null,
        sicknessDate: '',
        testDate: '',
        antibodyNumber: null,
      },
      vaccinated: {
        hadVaccine: '',
        vaccinatedStage: '',
        waitingStage: '',
      },
      policy: {
        meetings: '',
        officeDays: null,
        meetingsLive: '',
        aboutUs: null,
      },
    }
  },
  mutations,
  actions,
  getters,
}
