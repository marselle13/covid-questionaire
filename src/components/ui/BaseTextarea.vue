<template>
  <Field :name="name" :value="value" v-slot="{ field }">
    <textarea
      v-model="field.value"
      v-bind="field"
      class="w-full resize-none bg-transparent focus:ring-0 border border-black outline-none p-2 mt-5"
      rows="7"
    ></textarea>
  </Field>
</template>
<script setup>
import { Field } from 'vee-validate'

defineProps({
  name: { type: String, required: true },
  value: { type: String, required: true },
})
</script>
