<template>
  <base-wrapper>
    <TheHeader>3/4</TheHeader>
    <div class="flex gap-32">
      <form class="mt-10 space-y-12 max-w-[575px] flex-shrink-0">
        <covid-question question="უკვე აცრილი ხარ?*">
          <base-radio option="vaccinated_yes" :value="true">კი</base-radio>
          <base-radio option="vaccinated_no" :value="false">არა</base-radio>
        </covid-question>
        <covid-question question="აირჩიე რა ეტაპზე ხარ*">
          <base-radio option="vaccinated_yes" value="first_dosage_and_registered_on_the_second"
            >პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</base-radio
          >
          <base-radio option="vaccinated_no" value="fully_vaccinated">სრულად აცრილი ვარ</base-radio>
          <base-radio value="value>" option="first_dosage_and_not_registered_yet "
            >პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</base-radio
          >
        </covid-question>
        <div class="pl-10 text-lg space-y-4">
          <p>ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.</p>
          <div>
            <p>👉 რეგისტრაციის ბმული</p>
            <a>https://booking.moh.gov.ge/</a>
          </div>
        </div>
      </form>
      <section class="flex-shrink-0">
        <div class="flex relative mt-14">
          <ElementTransition></ElementTransition>
          <img :src="VaccinatedImage" alt="image" class="z-10" />
        </div>
      </section>
    </div>
    <div class="absolute flex items-center w-full justify-center gap-28 pb-10 z-10">
      <router-link :to="{ name: 'covid-condition' }"><BackPage /></router-link>
      <router-link :to="{ name: 'covid-policy' }"><NextPage /></router-link>
    </div>
  </base-wrapper>
</template>
<script setup>
import TheHeader from '@/pages/components/layout/TheHeader.vue'
import CovidQuestion from '@/pages/components/layout/CovidQuestion.vue'
import BaseRadio from '@/pages/components/ui/BaseRadio.vue'
import VaccinatedImage from '@/assets/vaccinated.png'
import NextPage from '@/pages/components/icons/NextPage.vue'
import BackPage from '@/pages/components/icons/BackPage.vue'
import ElementTransition from '@/pages/components/layout/ElementTransition.vue'
</script>
