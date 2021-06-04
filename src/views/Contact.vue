<template>
  <div class="contact">
    <div class="mt-6">
      <div class="flex justify-center mt-2">
      </div>
      <div class="flex justify-center mt-6 md:mt-12">
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
    <div class="locationDiv mt-6 md:mt-12">
      <div class="locationContainer grid justify-center">
        <h1 class="text-white font-bold text-center md:text-4xl mt-2 font-serif ">Or visit us in one of our locations:</h1>
        <iframe class="mapFrame rounded-md md:rounded-3xl shadow-lg h-52 lg:h-60 xl:max-w-6xl mt-2 md:w-full"
                src="https://maps.google.com/maps?q=%20Strada%20Alexandru%20Vlahu%C8%9B%C4%83%2028,%20Cluj-Napoca%20400000&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
        <!--        <h1 class="text-white text-center mt-2 font-serif">Or visit us in Marasti:</h1>-->
        <iframe class="mapFrame rounded-md md:rounded-3xl shadow-lg h-52 lg:h-60 mt-3 md:w-full"
                src="https://maps.google.com/maps?q=Bulevardul%2021%20Decembrie%201989%20nr%2093,%20Cluj-Napoca%20400420&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
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

.map-outer {
  position: relative;
  text-align: right;
}

.gmap-canvas {
  overflow: hidden;
  background: none !important;
}


.gmap_canvas {
  overflow: hidden;
  background: none !important;

}

.contact {
  height: 81.7vh;
}

</style>