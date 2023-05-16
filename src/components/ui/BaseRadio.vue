<template>
  <div class="flex items-center">
    <input type="radio" :id="option" class="sr-only" :value="value" />
    <div
      class="relative w-6 h-6 border border-gray-900 rounded-full cursor-pointer mr-4"
      @click="toggleCheck"
    >
      <div
        class="absolute w-4 h-4 m-auto inset-0 rounded-full transition ease-in-out duration-300"
        :class="{ 'bg-black': checked }"
      ></div>
    </div>
    <label class="text-[#232323] text-xl" :for="option"><slot></slot></label>
  </div>
</template>
<script setup>
import { ref } from 'vue'
defineProps({
  option: { type: String, required: true },
  value: { type: [Boolean, String], required: true },
})

const checked = ref(false)
function toggleCheck() {
  checked.value = true
}
</script>
<style></style>
