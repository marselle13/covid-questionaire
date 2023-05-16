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
        <div class="pl-10 text-xl space-y-4">
          <p>ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.</p>
          <div>
            <p>👉 რეგისტრაციის ბმული</p>
            <a>https://booking.moh.gov.ge/</a>
          </div>
        </div>
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
      <router-link :to="{ name: 'covid-condition' }"><BackPage /></router-link>
      <router-link :to="{ name: 'covid-policy' }"><NextPage /></router-link>
    </div>
  </base-wrapper>
</template>
<script setup>
import TheHeader from '@/components/layout/TheHeader.vue'
import CovidQuestion from '@/components/layout/CovidQuestion.vue'
import BaseRadio from '@/components/ui/BaseRadio.vue'
import VaccinatedImage from '@/assets/vaccinated.png'
import StarImage from '@/assets/star.png'
import NextPage from '@/components/icons/NextPage.vue'
import BackPage from '@/components/icons/BackPage.vue'
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
