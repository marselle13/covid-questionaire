<template>
  <div class="flex items-center">
    <Field
      :name="name"
      rules="required"
      type="radio"
      :value="value"
      :id="option"
      v-slot="{ field }"
      v-model="activeOption"
    >
      <input
        :id="option"
        v-bind="field"
        :value="value"
        type="radio"
        class="accent-black w-6 h-6 mr-2"
        @change="activate(value)"
        :checked="activeOption === value"
      />
      <label class="text-[#232323] text-xl" :for="option"><slot></slot></label>
    </Field>
  </div>
</template>
<script setup>
import { Field } from 'vee-validate'
import { ref } from 'vue'

const props = defineProps({
  modelValue: { type: String, required: true },
  name: { type: String, required: true },
  option: { type: String, required: true },
  value: { type: [String], required: true },
})
const emits = defineEmits(['update:modelValue'])

const activeOption = ref(props.modelValue)

function activate(option) {
  emits('update:modelValue', option)
}
</script>
