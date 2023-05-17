<template>
  <base-wrapper>
    <TheHeader>3/4</TheHeader>
    <Form @submit="onSubmit" v-slot="{ meta }">
      <div class="flex">
        <form class="mt-10 space-y-12 w-[575px] flex-shrink-0">
          <covid-question question="უკვე აცრილი ხარ?*">
            <base-radio v-model="hadVaccine" name="hadVaccine" option="vaccinated_yes" value="true"
              >კი</base-radio
            >
            <base-radio v-model="hadVaccine" name="hadVaccine" option="vaccinated_no" value="false"
              >არა</base-radio
            >
          </covid-question>
          <covid-question question="აირჩიე რა ეტაპზე ხარ*" v-if="hadVaccine === 'true'">
            <base-radio
              v-model="vaccinatedStage"
              name="vaccinatedStage"
              option="vaccinated_second"
              value="first_dosage_and_registered_on_the_second"
              >პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</base-radio
            >
            <base-radio
              v-model="vaccinatedStage"
              name="vaccinatedStage"
              option="vaccinated_fully"
              value="fully_vaccinated"
              >სრულად აცრილი ვარ</base-radio
            >
            <base-radio
              v-model="vaccinatedStage"
              name="vaccinatedStage"
              option="vaccinated_first"
              value="first_dosage_and_not_registered_yet"
              >პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</base-radio
            >
          </covid-question>
          <covid-question question="რას ელოდები?*" v-if="hadVaccine === 'false'">
            <base-radio
              v-model="waitingStage"
              name="waitingStage"
              option="waiting"
              value="registered_and_waiting"
              >დარეგისტრირებული ვარ და ველოდები რიცხვს</base-radio
            >
            <base-radio
              v-model="waitingStage"
              name="waitingStage"
              option="not_planing"
              value="not_planning"
              >არ ვგეგმავ</base-radio
            >
            <base-radio
              v-model="waitingStage"
              name="waitingStage"
              option="planing_vaccinated"
              value="had_covid_and_planning_to_be_vaccinated"
              >გადატანილი მაქვს და ვგეგმავ აცრას</base-radio
            >
          </covid-question>

          <VaccinatedMessage v-if="notRegisteredMessage">
            <template #title>
              რომ არ გადადო, <br />
              ბარემ ახლავე დარეგისტრირდი
            </template>
          </VaccinatedMessage>
          <VaccinatedMessage v-if="notPlanningMessage"></VaccinatedMessage>
          <vaccinated-message v-if="hadCovidMessage">
            <template #title>
              ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.
            </template>
            <template #linkTitle> 👉 რეგისტრაციის ბმული </template>
          </vaccinated-message>
        </form>
        <section class="flex-shrink-0">
          <div class="flex relative mt-14">
            <transition name="star" appear>
              <img :src="StarImage" alt="star" class="absolute left-[30px]" />
            </transition>
            <img :src="VaccinatedImage" alt="image" class="z-10 bg-opacity-25" />
          </div>
        </section>
      </div>
      <div class="absolute flex items-center w-full justify-center gap-28 pb-10 z-10">
        <router-link :to="{ name: 'covid-condition' }"><back-page /></router-link>
        <button :disabled="!meta.valid">
          <next-page :color="meta.valid ? '#232323' : '#8D8D8D'" />
        </button>
      </div>
    </Form>
  </base-wrapper>
</template>
<script setup>
import TheHeader from '@/components/layout/TheHeader.vue'
import VaccinatedImage from '@/assets/vaccinated.png'
import StarImage from '@/assets/star.png'
import { Form } from 'vee-validate'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import CovidQuestion from '@/components/layout/CovidQuestion.vue'
import VaccinatedMessage from '@/components/layout/VaccinatedMessage.vue'

const router = useRouter()
const store = useStore()

const vaccinatedData = store.getters['covid/vaccinated']

const hadVaccine = ref(vaccinatedData.hadVaccine)
const vaccinatedStage = ref(vaccinatedData.vaccinatedStage)
const waitingStage = ref(vaccinatedData.waitingStage)

const notRegisteredMessage = computed(() => {
  return (
    hadVaccine.value === 'true' && vaccinatedStage.value === 'first_dosage_and_not_registered_yet'
  )
})

const notPlanningMessage = computed(() => {
  return hadVaccine.value === 'false' && waitingStage.value === 'not_planning'
})

const hadCovidMessage = computed(() => {
  return (
    hadVaccine.value === 'false' && waitingStage.value === 'had_covid_and_planning_to_be_vaccinated'
  )
})

function onSubmit(values) {
  console.log(values)
  store.dispatch('covid/setVaccinated', values)
  localStorage.setItem('vaccinated', JSON.stringify(values))
  router.push({ name: 'covid-policy' })
}
</script>
<style scoped>
.star-enter-from {
  opacity: 0;
  transform: translateX(-60px) translateY(200px);
}

.star-enter-active {
  transition: all 0.5s ease-out;
}

.star-enter-to {
  background-image: url('../../assets/circle.png');
  background-repeat: no-repeat;
  opacity: 0.6;
  transform: translateY(0);
}
</style>
