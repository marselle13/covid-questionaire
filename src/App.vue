<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>
<style>
.route-enter-from,
.route-leave-to {
  opacity: 0;
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-enter-leave {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
}
</style>
<script setup>
import ElementTransition from '@/pages/components/layout/ElementTransition.vue'
</script>
