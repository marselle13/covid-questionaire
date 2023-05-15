<template>
  <base-wrapper>
    <TheHeader>1/4</TheHeader>
    <div class="flex gap-32">
      <form class="mt-10 w-1/3 space-y-12 flex-shrink-0">
        <BaseInput placeholder="იოსებ">სახელი*</BaseInput>
        <BaseInput placeholder="ჯუღაშვილი">გვარი*</BaseInput>
        <BaseInput placeholder="fbi@redberry.ge">მეილი*</BaseInput>
        <div class="pt-12 w-1/2 space-y-5">
          <hr class="border border-[#000]" />
          <p class="text-[#626262] w-[365px]">*-ით მონიშნული ველების შევსება სავალდებულოა</p>
        </div>
      </form>
      <section class="flex-shrink-0">
        <div class="relative flex justify-center">
          <img :src="PersonalImage" alt="image" class="z-10" />
          <ElementTransition></ElementTransition>
        </div>
      </section>
    </div>
    <div class="relative w-full flex justify-center bottom-0 pb-10 z-10">
      <router-link :to="{ name: 'covid-condition' }"><NextPage /></router-link>
    </div>
  </base-wrapper>
</template>
<script setup>
import TheHeader from '@/pages/components/layout/TheHeader.vue'
import BaseInput from '@/pages/components/ui/BaseInput.vue'
import BaseWrapper from '@/pages/components/ui/BaseWrapper.vue'
import PersonalImage from '@/assets/personal.png'
import ElementTransition from '@/pages/components/layout/ElementTransition.vue'
import NextPage from '@/pages/components/icons/NextPage.vue'
</script>
