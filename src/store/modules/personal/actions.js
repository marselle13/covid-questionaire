import personal from '@/store/modules/personal/index'

export default {
  setPersonal(context, payload) {
    const { firstname, lastname, email } = payload
    context.commit('setPersonal', {
      firstname,
      lastname,
      email,
    })
  },
}
