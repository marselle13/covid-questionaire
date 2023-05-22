<template>
  <base-wrapper>
    <TheHeader>1/4</TheHeader>
    <Form @submit="onSubmit" v-slot="{ meta }">
      <div class="flex gap-32">
        <div class="mt-10 w-1/3 space-y-12 flex-shrink-0">
          <base-input
            rules="required|min:2|alpha_spaces"
            placeholder="იოსებ"
            name="firstname"
            :value="firstname"
            >სახელი*</base-input
          >
          <base-input
            rules="required|min:2"
            placeholder="ჯუღაშვილი"
            name="lastname"
            :value="lastname"
            >გვარი*</base-input
          >
          <base-input
            rules="required|email|redberry_email"
            placeholder="fbi@redberry.ge"
            name="email"
            :value="email"
            >მეილი*</base-input
          >
          <div class="pt-12 w-1/2 space-y-5">
            <hr class="border border-[#000]" />
            <p class="text-[#626262] w-[365px]">*-ით მონიშნული ველების შევსება სავალდებულოა</p>
          </div>
        </div>
        <section class="flex-shrink-0">
          <div class="relative flex justify-center">
            <img :src="PersonalImage" alt="image" class="z-10" />
            <transition name="rectangle" appear>
              <img :src="RectangleImage" alt="rectangle" class="absolute top-[230px]" />
            </transition>
          </div>
        </section>
      </div>
      <div class="relative w-full flex justify-center bottom-0 pb-10 z-10">
        <button :disabled="!meta.valid">
          <next-page :color="meta.valid ? '#232323' : '#8D8D8D'" />
        </button>
      </div>
    </Form>
  </base-wrapper>
</template>
<script setup>
import TheHeader from '@/components/layout/TheHeader.vue'
import PersonalImage from '@/assets/personal.png'
import RectangleImage from '@/assets/rectangle.png'
import { Form } from 'vee-validate'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ref } from 'vue'

const router = useRouter()
const store = useStore()
const personalData = store.getters['covid/personal']
const firstname = ref(personalData.firstname || '')
const lastname = ref(personalData.lastname || '')
const email = ref(personalData.email || '')

function onSubmit(values) {
  store.dispatch('covid/setPersonal', values)
  localStorage.setItem('personal', JSON.stringify(values))
  router.push({ name: 'covid-condition' })
}
</script>
<style scoped>
.rectangle-enter-from {
  opacity: 0;
  transform: scaleX(0);
}
.rectangle-enter-active {
  transition: all 0.3s ease-out;
  transform-origin: left;
}

.rectangle-enter-to {
  opacity: 1;
  transform: scaleX(1);
}
</style>
