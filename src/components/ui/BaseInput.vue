<template>
  <div class="flex flex-col gap-3">
    <label
      class="text-[22px] leading-[27px] font-bold"
      :for="name"
      :class="{ 'sr-only': !hasContent }"
      ><slot></slot
    ></label>
    <Field :value="value" :name="name" :rules="rules" v-slot="{ field }">
      <input
        :placeholder="placeholder"
        v-bind="field"
        v-model="field.value"
        class="bg-transparent border border-[#232323] px-5 py-2.5 text-lg outline-none placeholder-[#232323]"
      />
    </Field>
    <div class="relative">
      <ErrorMessage :name="name" class="absolute text-[#F15524]"></ErrorMessage>
    </div>
  </div>
</template>

<script setup>
import { computed, useSlots } from 'vue'
import { ErrorMessage, Field } from 'vee-validate'

defineProps({
  placeholder: { type: String, required: false },
  name: { type: String, required: true },
  rules: { type: String, required: true },
  value: { type: String, required: true },
})
const slots = useSlots()

const hasContent = computed(() => {
  return slots.default
})
</script>
