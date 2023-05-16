<template>
  <base-wrapper>
    <TheHeader>4/4</TheHeader>
    <div class="flex gap-32">
      <form class="mt-10 max-w-[575px] overflow-y-auto h-[700px] no-scrollbar">
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
            <base-radio value="" option="">კვირაში ორჯერ</base-radio>
            <base-radio value="" option="">კვირაში ერთხელ</base-radio>
            <base-radio value="" option="">ორ კვირაში ერთხელ</base-radio>
            <base-radio value="" option="">თვეში ერთხელ</base-radio>
          </covid-question>
          <covid-question question="კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*">
            <base-radio value="" option="">0</base-radio>
            <base-radio value="" option="">1</base-radio>
            <base-radio value="" option="">2</base-radio>
            <base-radio value="" option="">3</base-radio>
            <base-radio value="" option="">4</base-radio>
            <base-radio value="" option="">5</base-radio>
          </covid-question>
          <covid-question question="კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*">
            <base-radio value="" option="">0</base-radio>
            <base-radio value="" option="">1</base-radio>
            <base-radio value="" option="">2</base-radio>
            <base-radio value="" option="">3</base-radio>
            <base-radio value="" option="">4</base-radio>
            <base-radio value="" option="">5</base-radio>
          </covid-question>
          <covid-question question="რას ფიქრობ ფიზიკურ შეკრებებზე?">
            <base-textarea></base-textarea>
          </covid-question>
          <covid-question
            question="რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?"
          >
            <base-textarea></base-textarea>
          </covid-question>
          <div class="relative justify-end flex flex-col gap-4">
            <base-button class="w-1/3 ml-auto">დასრულება</base-button>
          </div>
          <router-link class="absolute right-0 z-20" :to="{ name: 'covid-vaccinated' }"
            ><BackPage
          /></router-link>
        </div>
      </form>
      <section class="flex-shrink-0">
        <div class="flex relative mt-14">
          <transition name="heart" appear>
            <img :src="HeartImage" alt="heart" class="absolute left-[100px] top-[65px]" />
          </transition>
          <img :src="PolicyImage" alt="image" class="z-10" />
        </div>
      </section>
    </div>
  </base-wrapper>
</template>
<script setup>
import TheHeader from '@/components/layout/TheHeader.vue'
import CovidQuestion from '@/components/layout/CovidQuestion.vue'
import PolicyImage from '@/assets/policy.png'
import HeartImage from '@/assets/heart.png'
import BaseTextarea from '@/components/ui/BaseTextarea.vue'
import BackPage from '@/components/icons/BackPage.vue'
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
  transition: all 0.5s ease-in-out;
  transform-origin: left;
}

.heart-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
