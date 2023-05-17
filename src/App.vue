<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>
<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

onMounted(() => {
  const personalStorage = JSON.parse(localStorage.getItem('personal'))
  if (personalStorage) {
    store.commit('covid/setPersonal', personalStorage)
  }
  const conditionStorage = JSON.parse(localStorage.getItem('condition'))
  if (conditionStorage) {
    store.commit('covid/setCondition', conditionStorage)
  }
  const vaccinatedStorage = JSON.parse(localStorage.getItem('vaccinated'))
  if (vaccinatedStorage) {
    store.commit('covid/setVaccinated', vaccinatedStorage)
  }
})
</script>
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
