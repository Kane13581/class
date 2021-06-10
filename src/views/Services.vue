<template>
  <div class="services w-full">
    <button @click="toggleBack" v-if="showBack"
            class="absolute right-2 w-16 text-black bg-white border-black border-8 border-double">back
    </button>
    <div v-else class="flex h-80 lg:h-96 justify-around md:justify-center items-center">
      <div class="flex 2xl:mt-32 2xl:border-8 md:mr-8 lg:mr-16 xl:mr-20 justify-center items-center">
        <button @click="showServicesM"
                class="origin-left bg-gray-300 transform border-8 border-double border-black hover:skew-y-12 hover:bg-greenColor text-7xl rounded-md w-32 md:w-48 md:h-28 lg:w-52 lg:h-40 2xl:w-60 2xl:h-80  text-black font-serif">
          M
          <br>
          <p class="absolute invisible 2xl:visible right-0 bottom-24">.</p>
        </button>
      </div>
      <div class="flex 2xl:mt-32 2xl:border-8 justify-center items-center">
        <button @click="showServicesF"
                class="origin-right bg-gray-300 transform hover:bg-greenColor hover:-skew-y-12 text-7xl border-8 border-double border-black rounded-md w-32 md:w-48 md:h-28 lg:w-52 lg:h-40 2xl:w-60 2xl:h-80 text-black font-serif">
          F
          <br>
          <p class="absolute invisible 2xl:visible left-0 bottom-24">.</p>
        </button>
      </div>
    </div>
    <div>
      <div class="flex justify-center">
      <div v-if="showF" class="flex flex-col w-full md:w-2/3 lg:w-2/4 xl:w-2/5 justify-center text-white p-4 py-12">
        <button @click="showTunsVopsit" class="text-2xl mb-1 border-2 p-1 hover:bg-green-300 hover:text-black hover:border-greenColor bg-greenColor focus:outline-none rounded-xl">Tuns - Vopsit</button>
        <div v-if="tunsVopsit" class="flex hover:bg-greenColor rounded-full justify-center text-justify font-serif" v-for="(service6, index6) in services6" :key="index6">
          {{ `${service6.service} - ${service6.price}` }}
        </div>
        <button @click="showPacheteF" class="text-2xl mb-1 border-2 p-1 hover:bg-green-300 hover:text-black hover:border-greenColor bg-greenColor focus:outline-none rounded-xl">Pachete</button>
        <div v-if="pacheteF" class="flex hover:bg-greenColor rounded-full justify-center font-serif" v-for="(service5, index5) in services5" :key="index5">
          {{ `${service5.service} - ${service5.price}` }}
        </div>
        <button @click="showEpilareLaserF" class="text-2xl mb-1 border-2 p-1 hover:bg-green-300 hover:text-black hover:border-greenColor bg-greenColor focus:outline-none rounded-xl">Epilare Laser</button>
        <div v-if="epilareLaserF" class="flex hover:bg-greenColor rounded-full justify-center font-serif" v-for="(service7, index7) in services7" :key="index7">
          {{ `${service7.service} - ${service7.price}` }}
        </div>
        <button @click="showPachetEpilareF" class="text-2xl  mb-1 border-2 p-1 hover:bg-green-300 hover:text-black hover:border-greenColor bg-greenColor focus:outline-none rounded-xl">Pachete Epilare Laser</button>
        <div v-if="pachetEpilareF" class="flex hover:bg-greenColor rounded-full justify-center font-serif" v-for="(service4, index4) in services4" :key="index4">
          {{ `${service4.service} - ${service4.price}` }}
        </div>
        <button @click="showCosmetica" class="text-2xl mb-1 border-2 p-1 hover:bg-green-300 hover:text-black hover:border-greenColor bg-greenColor focus:outline-none rounded-xl">Cosmetica - Epilare Ceara</button>
        <div v-if="cosmetica" class="flex hover:bg-greenColor rounded-full justify-center font-serif" v-for="(service8, index8) in services8" :key="index8">
          {{ `${service8.service} - ${service8.price}` }}
        </div>
        <button @click="showEpilareZahar" class="text-2xl mb-1 border-2 p-1 hover:bg-green-300 hover:text-black hover:border-greenColor bg-greenColor focus:outline-none rounded-xl">Epilare Pasta Zahar</button>
        <div v-if="epilareZahar" class="flex hover:bg-greenColor rounded-full justify-center font-serif" v-for="(service9, index9) in services9" :key="index9">
          {{ `${service9.service} - ${service9.price}` }}
        </div>
      </div>
      </div>

      <div class="flex justify-center">
        <div v-if="showM" class="flex flex-col w-full md:w-2/3 lg:w-2/4 xl:w-2/5 justify-center text-white p-4 py-12">
          <button @click="showGrigorescu" class="text-2xl mb-1 border-2 p-1 hover:bg-green-300 hover:text-black hover:border-greenColor bg-greenColor focus:outline-none rounded-xl">Tuns - Grigorescu</button>
          <div v-if="grigorescu" class="flex justify-center font-serif " v-for="(service, index) in services1" :key="index">
             {{ `${service.service} - ${service.price}` }}
          </div>
          <button @click="showMarasti" class="text-2xl mb-1 border-2 p-1 hover:bg-green-300 hover:text-black hover:border-greenColor bg-greenColor focus:outline-none rounded-xl">Tuns - Marasti</button>
          <div v-if="marasti" class="flex justify-center font-serif " v-for="(service2, index2) in services2" :key="index2">
           {{ `${service2.service} - ${service2.price}` }}
          </div>
          <button @click="showEpilareLaserM" class="text-2xl mb-1 border-2 p-1 hover:bg-green-300 hover:text-black hover:border-greenColor bg-greenColor focus:outline-none rounded-xl">Epilare Laser</button>
          <div v-if="epilareLaserM" class="flex justify-center font-serif " v-for="(service3, index3) in services3" :key="index3">
            {{ `${service3.service} - ${service3.price}` }}
          </div>
          <button @click="showPachetEpilareM" class="text-2xl mb-1 border-2 p-1 hover:bg-green-300 hover:text-black hover:border-greenColor bg-greenColor focus:outline-none rounded-xl">Pachet Epilare Laser</button>
          <div v-if="pachetEpilareM" class="flex justify-center text-justify font-serif " v-for="(service4, index4) in services4" :key="index4">
            {{ `${service4.service} - ${service4.price}` }}
          </div>
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
      grigorescu: false,
      marasti: false,
      epilareLaserM: false,
      pachetEpilareM: false,
      tunsVopsit: false,
      pacheteF: false,
      epilareLaserF: false,
      pachetEpilareF: false,
      cosmetica: false,
      epilareZahar: false,
    }
  },
  computed: {
    services1() {
      return this.$store.getters.services1;
    },
    services2() {
      return this.$store.getters.services2;
    },
    services3() {
      return this.$store.getters.services3;
    },
    services4() {
      return this.$store.getters.services4;
    },
    services5() {
      return this.$store.getters.services5;
    },
    services6() {
      return this.$store.getters.services6;
    },
    services7() {
      return this.$store.getters.services7;
    },
    services8() {
      return this.$store.getters.services8;
    },
    services9() {
      return this.$store.getters.services9;
    }
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
    },
    showGrigorescu() {
      this.grigorescu = !this.grigorescu;
    },
    showMarasti() {
      this.marasti = !this.marasti;
    },
    showEpilareLaserM() {
      this.epilareLaserM = !this.epilareLaserM;
    },
    showPachetEpilareM() {
      this.pachetEpilareM = !this.pachetEpilareM;
    },
    showTunsVopsit() {
      this.tunsVopsit = !this.tunsVopsit;
    },
    showPacheteF() {
      this.pacheteF = !this.pacheteF;
    },
    showEpilareLaserF() {
      this.epilareLaserF = !this.epilareLaserF;
    },
    showPachetEpilareF() {
      this.pachetEpilareF = !this.pachetEpilareF;
    },
    showCosmetica() {
      this.cosmetica = !this.cosmetica;
    },
    showEpilareZahar() {
      this.epilareZahar = !this.epilareZahar;
    }
  }
}
</script>

<style scoped>




</style>