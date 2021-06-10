<template>
  <div class="home">
    <div class="text-white h-1/3 md:h-1/2 flex justify-center items-end">
<!--      <button class="buttonStyle rounded-full focus:outline-none cursor-default">-->
        <h1 class="neonText text-4xl md:text-6xl font-serif">
          We care for your hair.
        </h1>
<!--      </button>-->
    </div>
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {},
}
</script>

<style scoped>

.home {
  height: 84.3vh;
}

/*.neonText {*/
/*  color: #fff;*/
/*  text-shadow: 0 0 7px white,*/
/*  0 0 4px white,*/
/*  0 0 12px white,*/
/*  0 0 20px white,*/
/*  0 0 40px green,*/
/*  0 0 60px green,*/
/*  0 0 80px white,*/
/*  0 0 100px white;*/
/*}*/

/*.buttonStyle {*/
/*  display: inline-block;*/
/*  position: relative;*/
/*}*/

/*.buttonStyle::after {*/
/*  content: "";*/
/*  position: absolute;*/
/*  width: 100%;*/
/*  transform: scaleX(0);*/
/*  height: 5px;*/
/*  bottom: 0;*/
/*  left: 0;*/
/*  background-color: white;*/
/*  transform-origin: bottom right;*/
/*  transition: transform 0.25s ease-out;*/
/*}*/

/*.buttonStyle:hover::after {*/
/*  transform: scaleX(1);*/
/*  transform-origin: bottom left;*/
/*}*/

</style>