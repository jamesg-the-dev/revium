<template>
  <nav-bar />
  <banner />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Banner from "./components/Banner.vue";
import NavBar from "./components/NavBar.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
    Banner,
  },
});
</script>
