<template>
  <div>
  <div class="w-full bg-black h-32 grid grid-rows">
    <div class="w-full flex justify-center">
      <button @click="moveToHome">
        <img class=" w-44 border-double border-8 border-gray-400" src="../assets/Logo.png" alt="logo.name">
      </button>
    </div>
    <div class="w-full flex justify-around">
      <router-link class="text-white" to="/gallery">Gallery</router-link>
      <router-link class="text-white" to="/services">Services</router-link>
      <router-link class="text-white" to="/about">About</router-link>
      <router-link class="text-white" to="/contact">Contact</router-link>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    moveToHome() {
      return this.$router.push("/");
    }
  }
}
</script>

<style scoped>

</style>