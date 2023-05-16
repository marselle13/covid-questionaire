import { configure } from 'vee-validate'
import { localize } from '@vee-validate/i18n'

configure({
  generateMessage: localize('en', {
    messages: {
      required: 'ეს ველი სავალდებულოა',
      min: '{field}ს ველი უნდა შედგებოდეს მინიმუმ 0:{min} სიმბოლოსგან',
      email: 'თქვენ მიერ შეყვანილი მეილი არასწორია',
      redberry_email: 'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)',
    },
    names: {
      firstname: 'სახელი',
      lastname: 'გვარი',
      email: 'ემაილი',
    },
  }),
})
