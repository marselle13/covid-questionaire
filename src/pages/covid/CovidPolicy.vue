<template>
  <base-wrapper>
    <TheHeader>4/4</TheHeader>
    <Form @submit="onSubmit">
      <div class="flex gap-32">
        <div class="mt-10 max-w-[575px] overflow-y-auto h-[700px] no-scrollbar flex-shrink-0">
          <div class="relative space-y-12">
            <p class="text-[22px]">
              რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო, რომელსაც ჩვენი
              თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების განმავლობაში მიზნებისთვის ერთად
              ბრძოლის მიზეზი, ბევრისთვის კი — ჩვენთან გადმოსვლის. პანდემიის პერიოდში ერთმანეთსაც
              იშვიათად ვნახულობთ პირისპირ და ყოველდღიური კომუნიკაციაც გაიშვიათდა.
            </p>
            <covid-question
              question="რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*"
            >
              <base-radio
                id="meetings_twice_week"
                name="meetings"
                v-model="meetings"
                value="twice_a_week"
                >კვირაში ორჯერ</base-radio
              >
              <base-radio
                id="meetings_once_week"
                name="meetings"
                v-model="meetings"
                value="once_a_week"
                >კვირაში ერთხელ</base-radio
              >
              <base-radio
                id="meetings_once_weeks"
                name="meetings"
                v-model="meetings"
                value="once_in_a_two_weeks"
                >ორ კვირაში ერთხელ</base-radio
              >
              <base-radio
                id="meetings_once_month"
                name="meetings"
                v-model="meetings"
                value="once_in_a_month"
                >თვეში ერთხელ</base-radio
              >
            </covid-question>
            <covid-question question="კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*">
              <base-radio id="office_zero" name="officeDays" v-model="officeDays" value="0"
                >0</base-radio
              >
              <base-radio id="office_one" name="officeDays" v-model="officeDays" value="1"
                >1</base-radio
              >
              <base-radio id="office_two" name="officeDays" v-model="officeDays" value="2"
                >2</base-radio
              >
              <base-radio id="office_three" name="officeDays" v-model="officeDays" value="3"
                >3</base-radio
              >
              <base-radio id="office_four" name="officeDays" v-model="officeDays" value="4"
                >4</base-radio
              >
              <base-radio id="office_five" name="officeDays" v-model="officeDays" value="5"
                >5</base-radio
              >
            </covid-question>
            <covid-question question="რას ფიქრობ ფიზიკურ შეკრებებზე?">
              <base-textarea name="meetingsLive" :value="meetingsLive"></base-textarea>
            </covid-question>
            <covid-question
              question="რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?"
            >
              <base-textarea name="aboutUs" :value="aboutUs"></base-textarea>
            </covid-question>
            <div class="relative justify-end flex flex-col gap-4">
              <base-button class="w-1/3 ml-auto">დასრულება</base-button>
            </div>
            <router-link class="absolute right-0 z-20" :to="{ name: 'covid-vaccinated' }"
              ><back-page
            /></router-link>
          </div>
        </div>
        <section class="flex-shrink-0">
          <div class="flex relative mt-14">
            <transition name="heart" appear>
              <img :src="HeartImage" alt="heart" class="absolute left-[100px] top-[65px]" />
            </transition>
            <img :src="PolicyImage" alt="image" class="z-10" />
          </div>
        </section>
      </div>
    </Form>
  </base-wrapper>
</template>
<script setup>
import TheHeader from '@/components/layout/TheHeader.vue'
import PolicyImage from '@/assets/policy.png'
import HeartImage from '@/assets/heart.png'
import { ref } from 'vue'
import { Form } from 'vee-validate'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
const policyData = store.getters['covid/policy']

const meetings = ref(policyData.meetings)
const officeDays = ref(policyData.officeDays)
const meetingsLive = ref(policyData.meetingsLive)
const aboutUs = ref(policyData.aboutUs)
const hasError = ref(false)

async function onSubmit(values) {
  localStorage.setItem('policy', JSON.stringify(values))
  await store.dispatch('covid/setPolicy', values)
  try {
    await store.dispatch('covid/sendAnswers')
  } catch (error) {
    console.error(error.message)
    hasError.value = true
  }
  if (!hasError.value) {
    await router.push({ name: 'thank-you' })
  }
}
</script>
<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.heart-enter-from {
  opacity: 0;
  transform: translateX(-30px) translateY(-60px);
}

.heart-enter-active {
  transition: all 0.3s ease-in-out;
  transform-origin: center;
}

.heart-enter-to {
  opacity: 1;
  transform: scale(1.2);
}
</style>
