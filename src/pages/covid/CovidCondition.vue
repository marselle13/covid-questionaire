<template>
  <base-wrapper>
    <TheHeader>2/4</TheHeader>
    <div class="flex gap-32">
      <form class="mt-10 space-y-12 max-w-[575px]">
        <covid-question question="გაქვს გადატანილი Covid-19?*">
          <base-radio option="covid_yes" value="yes">კი</base-radio>
          <base-radio option="covid_no" value="no">არა</base-radio>
          <base-radio option="covid_now" value="now">ახლა მაქვს</base-radio>
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
        <div class="relative flex">
          <img :src="ConditionImage" alt="image" class="z-10" />
          <ElementTransition></ElementTransition>
          <div class="absolute bottom-0 left-12 flex items-center gap-28 pb-10 z-10">
            <router-link :to="{ name: 'personal-information' }"><BackPage /></router-link>
            <router-link :to="{ name: 'covid-vaccinated' }"><NextPage /></router-link>
          </div>
        </div>
      </section>
    </div>
  </base-wrapper>
</template>
<script setup>
import TheHeader from '@/pages/components/layout/TheHeader.vue'
import CovidQuestion from '@/pages/components/layout/CovidQuestion.vue'
import BaseInput from '@/pages/components/ui/BaseInput.vue'
import ConditionImage from '@/assets/condition.png'
import ElementTransition from '@/pages/components/layout/ElementTransition.vue'
import NextPage from '@/pages/components/icons/NextPage.vue'
import BackPage from '@/pages/components/icons/BackPage.vue'
</script>
