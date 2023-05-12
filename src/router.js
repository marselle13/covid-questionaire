import { createRouter, createWebHistory } from 'vue-router'
import StartQuestionnaire from '@/pages/navigation/StartQuestionnaire.vue'
import PersonalInformation from '@/pages/personal/PersonalInformation.vue'
import CovidCondition from '@/pages/covid/CovidCondition.vue'
import CovidVaccinated from '@/pages/covid/CovidVaccinated.vue'
import CovidPolicy from '@/pages/covid/CovidPolicy.vue'
import EndQuestionnaire from '@/pages/navigation/EndQuestionnaire.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: 'start-questionnaire', path: '/', component: StartQuestionnaire },
    { name: 'personal-information', path: '/personal', component: PersonalInformation },
    { name: 'covid-condition', path: '/condition', component: CovidCondition },
    { name: 'covid-vaccinated', path: '/vaccinated', component: CovidVaccinated },
    { name: 'covid-policy', path: '/policy', component: CovidPolicy },
    { name: 'thank-you', path: '/thank-you', component: EndQuestionnaire },
  ],
})

export default router
