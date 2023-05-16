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
          <transition name="rectangle" appear>
            <img :src="RectangleImage" alt="rectangle" class="absolute top-[230px]" />
          </transition>
        </div>
      </section>
    </div>
    <div class="relative w-full flex justify-center bottom-0 pb-10 z-10">
      <router-link :to="{ name: 'covid-condition' }"><NextPage /></router-link>
    </div>
  </base-wrapper>
</template>
<script setup>
import TheHeader from '@/components/layout/TheHeader.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseWrapper from '@/components/layout/BaseWrapper.vue'
import PersonalImage from '@/assets/personal.png'
import RectangleImage from '@/assets/rectangle.png'
import NextPage from '@/components/icons/NextPage.vue'
</script>
<style scoped>
.rectangle-enter-from {
  opacity: 0;
  transform: scaleX(0);
}
.rectangle-enter-active {
  transition: all 0.3s ease-out;
  transform-origin: left;
}

.rectangle-enter-to {
  opacity: 1;
  transform: scaleX(1);
}
</style>
