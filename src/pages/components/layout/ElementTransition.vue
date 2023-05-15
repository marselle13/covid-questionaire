<template>
  <transition name="element" mode="out-in" appear>
    <RedberryIcon v-if="currentPage === '/'" key="redberryIcon"></RedberryIcon>
    <img
      v-else-if="currentPage === '/personal'"
      :src="Rectangle"
      alt="rectangle"
      class="top-[230px] absolute"
    />
    <img
      v-else-if="currentPage === '/condition'"
      :src="Circle"
      alt="circle"
      class="top-[260px] left-[80px] absolute"
    />
    <img
      v-else-if="currentPage === '/vaccinated'"
      :src="Star"
      alt="star"
      class="absolute left-[30px]"
    />
  </transition>
</template>
<script setup>
import RedberryIcon from '@/pages/components/icons/RedberryIcon.vue'
import Rectangle from '@/assets/rectangle.png'
import Circle from '@/assets/circle.png'
import Star from '@/assets/star.png'
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

.logo-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 0;
}
</style>
