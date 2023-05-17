export default {
  setPersonal(context, payload) {
    context.commit('setPersonal', payload)
  },
  setCondition(context, payload) {
    context.commit('setCondition', payload)
  },
  setVaccinated(context, payload) {
    context.commit('setVaccinated', payload)
  },
}
