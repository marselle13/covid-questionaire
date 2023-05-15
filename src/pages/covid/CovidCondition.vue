<template>
  <base-wrapper>
    <TheHeader>2/4</TheHeader>
    <div class="flex gap-32">
      <form class="mt-10 space-y-12 max-w-[575px]">
        <covid-question question="გაქვს გადატანილი Covid-19?*">
          <base-radio option="covid_yes" value="yes">კი</base-radio>
          <base-radio option="covid_no" value="no">არა</base-radio>
          <base-radio option="covid_now" value="have_right_now">ახლა მაქვს</base-radio>
        </covid-question>

        <covid-question question="ანტისხეულების ტესტი გაქვს გაკეთებული?*">
          <base-radio option="test_yes" :value="true">კი</base-radio>
          <base-radio option="test_no" :value="false">არა</base-radio>
        </covid-question>

        <covid-question
          question="თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*"
        >
          <BaseInput placeholder="რიცხვი"></BaseInput>
          <BaseInput placeholder="ანტისხეულების რაოდენობა"></BaseInput>
        </covid-question>
      </form>
      <section class="flex-shrink-0">
        <div class="flex relative">
          <img :src="ConditionImage" alt="image" class="z-10" />
          <transition name="circle" appear>
            <img :src="CircleImage" alt="circle" class="absolute left-[80px] top-[260px]" />
          </transition>
        </div>
      </section>
    </div>
    <div class="absolute bottom-0 flex w-full justify-center items-center gap-28 pb-10 z-10">
      <router-link :to="{ name: 'personal-information' }"><BackPage /></router-link>
      <router-link :to="{ name: 'covid-vaccinated' }"><NextPage /></router-link>
    </div>
  </base-wrapper>
</template>
<script setup>
import TheHeader from '@/components/layout/TheHeader.vue'
import CovidQuestion from '@/components/layout/CovidQuestion.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import ConditionImage from '@/assets/condition.png'
import CircleImage from '@/assets/circle.png'
import NextPage from '@/components/icons/NextPage.vue'
import BackPage from '@/components/icons/BackPage.vue'
</script>
<style scoped>
.circle-enter-from {
  background: #dd393999;
  opacity: 0;
  transform: scaleX(3) scaleY(0.4) translateY(-200px);
}

.circle-enter-active {
  transition: all 0.5s ease-in-out;
  transform-origin: left;
}

.circle-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
