<template>
  <div class="grid justify-items-center content-center h-screen text-center gap-y-24">
    <transition name="logo" @afterEnter="delayButtonTransition" appear>
      <RedberryIcon></RedberryIcon>
    </transition>
    <div class="relative flex justify-center">
      <transition name="button">
        <router-link
          v-if="showButton"
          :to="{ name: 'personal-information' }"
          class="text-shadow-start absolute text-3xl font-bold"
          >კითხვარის <br />
          დაწყება</router-link
        >
      </transition>
    </div>
  </div>
</template>

<script setup>
import RedberryIcon from '@/pages/components/icons/RedberryIcon.vue'
import { ref } from 'vue'

const showButton = ref(false)

function delayButtonTransition() {
  setTimeout(() => {
    showButton.value = true
  }, 600)
}
</script>

<style>
.text-shadow-start:hover {
  text-shadow: #fff 2px 1px, #232323 3px 2px;
}

.logo-enter-from {
  transform: scale(30);
}

.logo-enter-active {
  transition: all 0.3s ease-in;
}

.logo-enter-to {
  transform: scale(1);
}

.button-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.button-enter-active {
  transition: all 0.5s ease-out;
}

.button-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
