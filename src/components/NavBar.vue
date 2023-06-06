<template>
  <nav class="fixed text-xl">
    <div class="flex gap-4">
      <a class="p-3" href="#">Home</a>
      <a class="p-3" href="#">About</a>
      <a class="p-3" href="#">Contact Us</a>
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
nav {
  z-index: 1000;
}
</style>
