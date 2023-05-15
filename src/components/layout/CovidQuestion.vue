<template>
  <div class="space-y-5">
    <p class="text-[22px] font-bold">{{ question }}</p>
    <slot></slot>
  </div>
</template>
<script setup>
defineProps({ question: { type: String, required: true } })
</script>
