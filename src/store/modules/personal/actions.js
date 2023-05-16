export default {
  setPersonal(context, payload) {
    const { firstname, lastname, email } = payload
    context.commit('setPersonal', {
      firstname,
      lastname,
      email,
    })
  },
  setPersonalFromStorage(context) {
    const personalStorage = JSON.parse(localStorage.getItem('personal'))
    if (personalStorage) {
      const { firstname, lastname, email } = personalStorage
      context.commit('setPersonal', {
        firstname,
        lastname,
        email,
      })
    }
  },
}
