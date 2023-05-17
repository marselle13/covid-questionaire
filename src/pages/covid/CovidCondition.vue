<template>
  <base-wrapper>
    <TheHeader>2/4</TheHeader>
    <Form @submit="onSubmit" v-slot="{ meta }">
      <div class="flex">
        <div class="mt-10 space-y-12 w-[575px]">
          <covid-question question="გაქვს გადატანილი Covid-19?*">
            <base-radio name="hadCovid" id="covid_yes" value="yes" v-model="hadCovid"
              >კი</base-radio
            >
            <base-radio name="hadCovid" id="covid_no" value="no" v-model="hadCovid">არა</base-radio>
            <base-radio name="hadCovid" id="covid_now" value="have_right_now" v-model="hadCovid"
              >ახლა მაქვს</base-radio
            >
          </covid-question>
          <covid-question question="ანტისხეულების ტესტი გაქვს გაკეთებული?*" v-if="!!hadCovid">
            <base-radio name="hadTest" id="test_yes" value="true" v-model="hadTest">კი</base-radio>
            <base-radio name="hadTest" id="test_no" value="false" v-model="hadTest">არა</base-radio>
          </covid-question>
          <covid-question
            question="თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა"
            v-if="hadTest === 'true'"
          >
            <base-input
              placeholder="რიცხვი"
              name="testDate"
              :value="testDate"
              rules="date_format"
            ></base-input>
            <base-input
              placeholder="ანტისხეულების რაოდენობა"
              name="antibodyNumber"
              :value="antibodyNumber"
              rules="numeric"
            ></base-input>
          </covid-question>
          <covid-question
            question="მიუთითეთ მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*"
            v-if="hadTest === 'false'"
          >
            <base-input
              placeholder="დდ/თთ/წწ"
              name="sicknessDate"
              :value="sicknessDate"
              rules="required|date_format"
            ></base-input>
          </covid-question>
        </div>
        <section class="flex relative flex-shrink-0">
          <img :src="ConditionImage" alt="image" class="z-10" />
          <transition name="circle" appear>
            <img :src="CircleImage" alt="circle" class="absolute left-[80px] top-[260px]" />
          </transition>
        </section>
      </div>
      <div class="absolute bottom-0 flex w-full justify-center items-center gap-28 pb-10 z-10">
        <router-link :to="{ name: 'personal-information' }"><back-page /></router-link>
        <button :disabled="!meta.valid">
          <next-page :color="meta.valid ? '#232323' : '#8D8D8D'" />
        </button>
      </div>
    </Form>
  </base-wrapper>
</template>
<script setup>
import TheHeader from '@/components/layout/TheHeader.vue'
import ConditionImage from '@/assets/condition.png'
import CircleImage from '@/assets/circle.png'
import { Form } from 'vee-validate'
import { ref } from 'vue'
import store from '@/store'
import { useRouter } from 'vue-router'
import BaseInput from '@/components/ui/BaseInput.vue'

const router = useRouter()
const conditionData = store.getters['covid/condition']

const hadCovid = ref(conditionData.hadCovid)
const hadTest = ref(conditionData.hadTest)
const sicknessDate = ref(conditionData.sicknessDate)
const testDate = ref(conditionData.testDate)
const antibodyNumber = ref(conditionData.antibodyNumber)

function onSubmit(values) {
  store.dispatch('covid/setCondition', values)
  localStorage.setItem('condition', JSON.stringify(values))
  router.push({ name: 'covid-vaccinated' })
}
</script>
<style scoped>
.circle-enter-from {
  background: #dd393999;
  opacity: 0;
  transform: scaleX(3) scaleY(0.4) translateY(-200px);
}

.circle-enter-active {
  transition: all 0.3s ease-in-out;
  transform-origin: left;
}

.circle-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
