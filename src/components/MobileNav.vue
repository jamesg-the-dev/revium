<template>
  <ul
    class="fixed mobile-nav -left-10 p-4 sm:hidden gap-8 justify-center h-full"
    :class="{ show: show }"
  >
    <li class="text-2xl mt-7 text-center" v-for="(link, i) in links" :key="i">
      <a class="nav-link" :href="link.route">{{ link.name }}</a>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NavigationService } from "../services/navigation.service";
export default defineComponent({
  props: {
    show: Boolean,
  },
  setup(props) {
    return {
      links: NavigationService.links,
      props,
    };
  },
});
</script>

<style lang="scss" scoped>
.mobile-nav {
  z-index: 1;
  background-color: white;
  left: 0;
  width: 100%;
  transform: translateX(-100vw);
  transition: 300ms;

  &.show {
    transform: translateX(0);
  }
}
</style>