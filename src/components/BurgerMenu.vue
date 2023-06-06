<template>
  <button
    @click="
      state.open = !state.open;
      $emit('trigger', state.open);
    "
    class="sm:hidden burger-menu"
    :class="{ open: state.open }"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  emits: ["trigger"],
  setup() {
    const state = reactive({
      open: false,
    });

    return {
      state,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
.burger-menu {
  width: 40px;
  height: 100%;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 6px;
    width: 100%;
    background: #323035;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  %transform {
    transform-origin: left center;
  }

  span:nth-child(1) {
    top: 0px;
    @extend %transform;
  }

  span:nth-child(2) {
    top: 12px;
    @extend %transform;
  }

  span:nth-child(3) {
    top: 24px;
    @extend %transform;
  }

  &.open span:nth-child(1) {
    transform: rotate(45deg);
    left: 0;
  }

  &.open span:nth-child(2) {
    width: 0%;
    opacity: 0;
  }

  &.open span:nth-child(3) {
    transform: rotate(-45deg);
    top: 26px;
    left: 0;
  }
}
</style>
