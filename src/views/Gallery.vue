<template>
<div class="p-8 mt-10 min-h-screen grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 gap-12 items-center">
  <div class="grid justify-center" v-for="(client, index) in clients" :key="index">
    <div class="">
    <img class="rounded-xl md:w-76 md:h-96 border-double border-4 border-pageGreen-newGreen" :src="require(`../assets/gallery/${client.image}`)"
         :alt="client.name">
    </div>
  </div>
</div>
</template>


<script>

export default {
  name: "Gallery",
  computed: {
    clients() {
      return this.$store.getters.clients;
    },
  }
}
</script>

<style scoped>

</style>