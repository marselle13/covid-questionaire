export default {
  setPersonal(state, payload) {
    state.personal = payload
  },
  setCondition(state, payload) {
    state.condition = payload
  },
  setVaccinated(state, payload) {
    state.vaccinated = payload
  },
  setPolicy(state, payload) {
    state.policy = payload
  },
  sendAnswers(state) {
    state.personal = {
      firstName: '',
      lastName: '',
      email: '',
    }
    state.condition = {
      hadCovid: '',
      hadTest: null,
      sicknessDate: '',
      testDate: '',
      antibodyNumber: null,
    }
    state.vaccinated = {
      hadVaccine: '',
      vaccinatedStage: '',
      waitingStage: '',
    }
    state.policy = {
      meetings: '',
      officeDays: null,
      meetingsLive: '',
      aboutUs: null,
    }
  },
}
