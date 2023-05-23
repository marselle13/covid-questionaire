import { defineRule } from 'vee-validate'
import { required, email, min, numeric, alpha } from '@vee-validate/rules' // npm install @vee-validate/rules

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('numeric', numeric)
defineRule('alpha', alpha)

defineRule('redberry_email', (value) => {
  const regexEmail = /@redberry\.ge/
  return regexEmail.test(value)
})

defineRule('alpha', (value) => {
  const regex = /^\p{Letter}+$/u
  return regex.test(value)
})

defineRule('date_format', (value) => {
  if (value) {
    const [day, month, year] = value.split('/')

    const nowYear = new Date().getFullYear()

    const isValidDay = parseInt(day, 10) >= 1 && parseInt(day, 10) <= 31
    const isValidMonth = parseInt(month, 10) >= 1 && parseInt(month, 10) <= 12
    const isValidYear = parseInt(year, 10) >= 2018 && parseInt(year, 10) <= nowYear

    return isValidDay && isValidMonth && isValidYear
  } else {
    return true
  }
})
