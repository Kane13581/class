<template>
  <div>
    <div class="w-full grid grid-rows">
      <div class="w-full mt-2 grid p-2 md:flex justify-around items-center">
        <div class="flex order-2 md:order-1 justify-center rounded-md hover:bg-greenColor">
          <router-link class="text-white font-serif flex text-2xl p-1 hover:text-black" to="/gallery">Gallery</router-link>
        </div>
        <div class="flex order-3 md:order-2 justify-center rounded-md hover:bg-greenColor">
          <router-link class="text-white font-serif text-2xl p-1 hover:text-black" to="/services">Services</router-link>
        </div>
        <div class="flex justify-center order-1 md:order-3">
          <button class="focus:outline-none" @click="moveToHome">
            <img class="w-48 border-double border-8 border-greenColor" src="../assets/Logo.png" alt="logo.name">
          </button>
        </div>
        <div class="flex order-4 md:order-4 justify-center rounded-md hover:bg-greenColor">
          <router-link class="text-white font-serif text-2xl p-1 hover:text-black" to="/about">About</router-link>
        </div>
        <div class="flex order-5 md:order-5 justify-center rounded-md hover:bg-greenColor">
          <router-link class="text-white font-serif text-2xl p-1 hover:text-black" to="/contact">Contact</router-link>
        </div>
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