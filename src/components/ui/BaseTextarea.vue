<template>
  <Field :name="name" v-model="textareaValue" v-slot="{ field }">
    <textarea
      @input="textareaHandler"
      v-model="textareaValue"
      v-bind="field"
      class="w-full resize-none bg-transparent focus:ring-0 border border-black outline-none p-2 mt-5"
      rows="7"
    ></textarea>
  </Field>
</template>
<script setup>
import { Field } from 'vee-validate'
import { ref } from 'vue'

const props = defineProps({
  modelValue: { type: String, required: true },
  name: { type: String, required: true },
})

const emits = defineEmits(['update:modelValue'])

const textareaValue = ref(props.modelValue)

function textareaHandler(event) {
  emits('update:modelValue', event.target.value)
}
</script>
