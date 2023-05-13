<template>
  <transition name="element" mode="out-in" appear>
    <RedberryIcon v-if="currentPage === '/'"></RedberryIcon>
    <img
      v-else-if="currentPage === '/personal'"
      :src="Rectangle"
      alt="rectangle"
      class="top-[230px] absolute"
    />
  </transition>
</template>
<script setup>
import RedberryIcon from '@/pages/components/icons/RedberryIcon.vue'
import Rectangle from '@/assets/rectangle.png'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()

const currentPage = computed(() => {
  return route.path
})
</script>

<style>
.element-enter-from {
  transform: scaleX(0);
}

.element-enter-active {
  transition: all 0.3s ease-out;
  transform-origin: 0 0;
}

.element-enter-to {
  transform: scaleX(1);
}
</style>
