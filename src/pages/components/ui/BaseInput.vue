<template>
  <div class="flex flex-col gap-3">
    <label class="text-[22px] leading-[27px] font-bold" for="firstname"><slot></slot>*</label>
    <input
      class="bg-transparent border border-[#232323] px-5 py-2.5 text-lg outline-none placeholder-[#232323]"
      id="firstname"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup>
defineProps({ placeholder: { type: String, required: false } })
</script>
