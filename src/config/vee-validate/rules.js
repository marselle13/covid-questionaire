import { defineRule } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules' // npm install @vee-validate/rules

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)

defineRule('redberry_email', (value) => {
  const regexEmail = /@redberry\.ge/
  return regexEmail.test(value)
})
