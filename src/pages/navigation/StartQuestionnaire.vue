<template>
  <div
    class="overflow-hidden grid justify-items-center content-center h-screen text-center gap-y-24"
  >
    <transition name="logo" appear>
      <RedberryIcon></RedberryIcon>
    </transition>
    <div class="relative flex justify-center">
      <transition name="button" appear>
        <router-link
          :to="{ name: 'personal-information' }"
          class="text-shadow-start absolute text-3xl font-bold"
          >კითხვარის <br />
          დაწყება</router-link
        >
      </transition>
    </div>
  </div>
</template>
<style>
.text-shadow-start:hover {
  text-shadow: #fff 2px 1px, #232323 3px 2px;
}

.logo-enter-from {
  transform: scale(28);
}

.logo-enter-active {
  transition: all 0.6s ease-out;
}

.logo-enter-to {
  transform: scale(1);
}

.button-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.button-enter-active {
  transition: all 1s ease-out;
  transition-delay: 1.5s;
}

.button-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
<script setup>
import RedberryIcon from '@/components/icons/RedberryIcon.vue'
</script>
