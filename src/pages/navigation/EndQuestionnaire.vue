<template>
  <div class="bg-[#232323] grid justify-items-center content-center h-screen">
    <transition name="thanks" appear>
      <p class="text-white text-[64px] tracking-[0.24em] font-bold">მადლობა</p>
    </transition>
  </div>
</template>
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
</style>
