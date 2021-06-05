<template>
  <div class="contact">
    <div class="mt-4">
      <div class="flex justify-center">
      </div>
      <div class="flex justify-center mt-4 md:mt-12">
        <button class="bg-greenColor rounded-xl py-1 px-4 hover:bg-white">
          <div class="flex">
            <img class="w-10 rounded-full h-9 mr-1" src="../assets/f-5.png" alt="f.name">
            <a class="text-white font-serif hover:text-greenColor text-2xl md:text-4xl"
               href="https://www.facebook.com/BarberShopClujNapoca"> Class
              Barber&Beauty </a>
          </div>
        </button>
      </div>
    </div>
    <div class="locationDiv mt-4 md:mt-12 mb-2">
      <h1 class="text-white font-bold text-center md:text-4xl mt-2 font-serif ">Or visit us in one of our
        locations:</h1>
      <div class="locationContainer flex flex-col xl:flex-row justify-center">
        <div class="flex w-full xl:h-96 justify-center">
          <iframe class="mapFrame w-11/12 rounded-md md:rounded-3xl shadow-lg h-52 lg:h-64 xl:h-full mt-2"
                  src="https://maps.google.com/maps?q=%20Strada%20Alexandru%20Vlahu%C8%9B%C4%83%2028,%20Cluj-Napoca%20400000&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
          <!--        <h1 class="text-white text-center mt-2 font-serif">Or visit us in Marasti:</h1>-->
        </div>
        <div class="flex w-full xl:h-96 justify-center">
          <iframe class="mapFrame w-11/12 rounded-md md:rounded-3xl shadow-lg h-52 lg:h-64 xl:h-full mt-2"
                  src="https://maps.google.com/maps?q=Bulevardul%2021%20Decembrie%201989%20nr%2093,%20Cluj-Napoca%20400420&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>

.contact {
  /*height: 81.7vh;*/
}

</style>