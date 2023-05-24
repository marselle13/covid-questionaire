<template>
  <div class="flex flex-col gap-3">
    <label class="text-[22px] leading-[27px] font-bold" :for="name" v-if="hasContent"
      ><slot></slot
    ></label>
    <Field :name="name" :rules="rules" v-model="inputValue" v-slot="{ field }">
      <input
        @input="inputHandler"
        :placeholder="placeholder"
        v-bind="field"
        v-model="inputValue"
        class="bg-transparent border border-[#232323] px-5 py-2.5 text-lg outline-none placeholder-[#232323]"
      />
    </Field>
    <div class="relative">
      <ErrorMessage :name="name" class="absolute text-[#F15524] -top-2"></ErrorMessage>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, useSlots } from 'vue'
import { ErrorMessage, Field } from 'vee-validate'

const props = defineProps({
  modelValue: { type: String, required: false },
  placeholder: { type: String, required: false },
  name: { type: String, required: true },
  rules: { type: String, required: false },
})
const slots = useSlots()
const emits = defineEmits(['update:modelValue'])

const inputValue = ref(props.modelValue)

const hasContent = computed(() => {
  return slots.default
})
function inputHandler(event) {
  emits('update:modelValue', event.target.value)
}
</script>
