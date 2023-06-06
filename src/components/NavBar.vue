<template>
  <nav class="fixed text-xl w-full">
    <div class="hidden sm:block h-full">
      <ul class="sm:flex gap-8 justify-center h-full items-center">
        <li v-for="(link, i) in links" :key="i">
          <a class="nav-link" :href="link.route">{{ link.name }}</a>
        </li>
      </ul>
    </div>
    <div class="p-3">
      <burger-menu class="block ml-auto" @trigger="handleTrigger" />
    </div>
  </nav>
</template>

<script lang="ts">
import { NavigationService } from "@/services/navigation.service";
import { defineComponent } from "vue";
import BurgerMenu from "./BurgerMenu.vue";

export default defineComponent({
  components: { BurgerMenu },
  emits: ["trigger"],
  setup(props, { emit }) {
    const navigationService = NavigationService.links;

    function handleTrigger(event: boolean) {
      emit("trigger", event);
    }
    return {
      links: navigationService,
      handleTrigger,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
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
