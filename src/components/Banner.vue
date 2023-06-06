<template>
  <carousel wrapAround transition="850" autoplay="4000" class="banner">
    <slide v-for="(image, i) in images" :key="i">
      <img :src="image" alt="" />
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import ocean1 from "../assets/ocean-1.jpg";
import ocean2 from "../assets/ocean-2.jpg";
import ocean3 from "../assets/ocean-3.jpg";
export default defineComponent({
  setup() {
    const images = [ocean1, ocean2, ocean3];
    return {
      images,
    };
  },
  components: { Carousel, Slide, Pagination, Navigation },
});
</script>

<style lang="scss" scoped>
img {
  height: 100vh;
  width: 100%;
  object-fit: cover;
  filter: brightness(0.7);
}

.banner {
  //resetting the pagination and navigation variables
  --vc-pgn-width: 0.8rem;
  --vc-pgn-height: 0.8rem;
  --vc-pgn-margin: 8px;
  --vc-pgn-border-radius: 50%;
  --vc-clr-primary: #ffffff;
  --vc-pgn-active-color: #ffffff;
  --vc-clr-secondary: #ffffff75;
  --vc-pgn-background-color: #ffffff75;
  --vc-nav-color: #ffffff;
  --vc-nav-width: 40px;
  --vc-nav-height: 40px;
  --vc-nav-color-hover: #ffffff75;
}

.carousel__pagination {
  position: absolute;
  bottom: 0;
  padding: 1rem;
  transform: translateX(-50%);
  left: 50%;
}
</style>
