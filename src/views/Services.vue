<template>
  <div class="services w-full">
    <button @click="toggleBack" v-if="showBack" class="absolute right-2 w-16 text-black bg-white border-black border-8 border-double">back</button>
    <div v-else class="flex h-80 justify-center items-center">
      <div class="text-white text-6xl flex justify-center items-center">
        <button @click="showServicesM" class="bg-white border-8 border-double border-black rounded-md w-32 text-black font-serif">
          M
        </button>
      </div>
        <div class="text-white text-6xl flex justify-center items-center">
          <button @click="showServicesF" class="bg-white border-8 border-double border-black rounded-md w-32 text-black font-serif">
            F
          </button>
        </div>
    </div>
    <div>
      <div v-if="showF" class="text-2xl text-white">F</div>
      <div v-if="showM" class="text-2xl text-white p-4 py-12">
          <div class="flex justify-center font-serif" v-for="(service, index) in servicesM" :key="index">
            {{ `${service.service} - ${service.price}` }}
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      showM: false,
      showF: false,
      showBack: false,
    }
  },
  computed: {
    servicesM() {
      return this.$store.getters.servicesM;
    },
  },
  methods: {
    showServicesF() {
      this.showF = !this.showF;
      this.showBack = !this.showBack;
    },
    showServicesM() {
      this.showM = !this.showM;
      this.showBack = !this.showBack;
    },
    toggleBack() {
      this.showBack = !this.showBack;
      this.showF = false;
      this.showM = false;
    }
  }
}
</script>

<style scoped>

.services {
  /*height: 81.7vh;*/
}

</style>