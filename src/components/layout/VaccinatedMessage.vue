<template>
  <div class="pl-10 text-xl space-y-4">
    <p v-if="slots.title">
      <slot name="title"></slot>
    </p>
    <div>
      <p v-if="slots.linkTitle"><slot name="linkTitle"></slot></p>
      <a :href="link" class="text-[#1289AE]">{{ checkTitle }} https://booking.moh.gov.ge/</a>
    </div>
  </div>
</template>
<script setup>
import { computed, useSlots } from 'vue'
const link = 'https://booking.moh.gov.ge/'
const slots = useSlots()

const checkTitle = computed(() => {
  return !slots.title && !slots.linkTitle ? '👉' : ''
})
</script>
