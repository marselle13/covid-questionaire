<template>
  <div class="bg-[#232323] grid justify-items-center content-center h-screen">
    <div>
      <transition name="big-star" appear>
        <img :src="bigStar" alt="big_star" class="pl-10" />
      </transition>
      <transition name="thanks" appear>
        <p class="text-white text-[64px] tracking-[0.24em] font-bold">მადლობა</p>
      </transition>
      <transition name="little-star" appear>
        <img :src="littleStar" alt="little_star" class="ml-auto pr-10" />
      </transition>
    </div>
  </div>
</template>
<script setup>
import bigStar from '@/assets/big-star.png'
import littleStar from '@/assets/little-star.png'
</script>
<style scoped>
.thanks-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.thanks-enter-active {
  transition: all 1s ease-out;
  transition-delay: 1s;
}

.thanks-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.little-star-enter-from {
  opacity: 0;
  transform: translate(-40px, -40px);
}

.big-star-enter-from {
  opacity: 0;
  transform: translate(40px, 40px);
}

.little-star-enter-active,
.big-star-enter-active {
  transition: all 0.3s ease-out;
  transition-delay: 2.5s;
}
.little-star-enter-to,
.big-star-enter-to {
  opacity: 1;
  transform: translate(0, 0);
}
</style>
