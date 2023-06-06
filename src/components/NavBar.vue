<template>
  <nav class="fixed text-xl w-full">
    <div class="flex gap-8 justify-center h-full items-center">
      <a class="nav-link" href="#">Home</a>
      <a class="nav-link" href="#">About</a>
      <a class="nav-link" href="#">Contact Us</a>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    //
  },
});
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';
nav {
  z-index: 1000;
  height: 4rem;
}

.nav-link {
  &::after {
    content: "";
    width: 0;
    height: 2px;
    display: block;
    transition: width 300ms;
    background-color: $black;
  }
  &:hover::after {
    width: 100%;
  }
}
</style>
