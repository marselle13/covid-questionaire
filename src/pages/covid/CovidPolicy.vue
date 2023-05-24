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
              <base-textarea name="meetingsLive" v-model="meetingsLive"></base-textarea>
            </covid-question>
            <covid-question
              question="რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?"
            >
              <base-textarea name="aboutUs" v-model="aboutUs"></base-textarea>
            </covid-question>
            <p class="text-red-500">{{ hasError }}</p>
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
              <HeartLogo :heart-color="heartColor" :heart="heart" />
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
import { ref } from 'vue'
import { Form } from 'vee-validate'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import HeartLogo from '@/components/icons/HeartLogo.vue'

const store = useStore()
const router = useRouter()
const policyData = store.getters['covid/policy']

const meetings = ref(policyData.meetings)
const officeDays = ref(policyData.officeDays)
const meetingsLive = ref(policyData.meetingsLive)
const aboutUs = ref(policyData.aboutUs)
const hasError = ref(null)
const heart = ref(true)
const heartColor = ref('#F39494')

async function onSubmit(values) {
  heartColor.value = '#000000'
  localStorage.setItem('policy', JSON.stringify(values))
  await store.dispatch('covid/setPolicy', values)
  heart.value = false
  try {
    await store.dispatch('covid/sendAnswers')
  } catch (error) {
    console.error(error.message)
    hasError.value = 'ინფორმაცის გაგზავნა ვერ მოხერხდა,გადამოწმეთ ფორმის ველები'
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
  transform: translateX(-30px) translateY(-60px) scale(1.2);
}

.heart-enter-active {
  transition: all 0.3s ease-in-out;
  transform-origin: center;
}

.heart-enter-to {
  opacity: 1;
  transform: translate(0, 0) scale(1);
}

.heart-leave-from {
  opacity: 1;
  background-color: gray;
}

.heart-leave-active {
  transition: all 0.3s ease-in;
  transform-origin: center;
}
.heart-leave-to {
  opacity: 0;
  transform: scale(30);
  background-color: gray;
}
</style>
