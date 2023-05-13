<template>
  <base-wrapper>
    <div class="flex justify-between items-center border-b-2 border-[#232323] pb-5">
      <redberry-text></redberry-text>
      <h3 class="text-[40px] leading-[40px]"><slot></slot></h3>
    </div>
  </base-wrapper>
</template>

<script setup>
import RedberryText from '@/pages/components/icons/RedberryText.vue'
</script>
