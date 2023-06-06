<template>
  <nav-bar />
  <banner />
  <main class="p-5">
    <section>
      <div class="wrap mx-auto">
        <h1>Welcome</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla iure
          veritatis omnis esse exercitationem explicabo ipsa consequatur
          pariatur eum tenetur aut repellendus quis alias quod, numquam magni ut
          dolor? Doloremque! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Minima autem, maiores veritatis iusto tempora culpa id numquam
          itaque hic explicabo ad similique doloribus provident obcaecati sequi
          consequuntur nemo aspernatur veniam! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quae sed sapiente assumenda, alias
          voluptatum accusantium doloribus repellat! Itaque aliquid temporibus
          impedit accusamus exercitationem assumenda veritatis ducimus ea
          dolores, fuga asperiores?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla iure
          veritatis omnis esse exercitationem explicabo ipsa consequatur
          pariatur eum tenetur aut repellendus quis alias quod, numquam magni ut
          dolor? Doloremque! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Minima autem, maiores veritatis iusto tempora culpa id numquam
          itaque hic explicabo ad similique doloribus provident obcaecati sequi
          consequuntur nemo aspernatur veniam! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quae sed sapiente assumenda, alias
          voluptatum accusantium doloribus repellat! Itaque aliquid temporibus
          impedit accusamus exercitationem assumenda veritatis ducimus ea
          dolores, fuga asperiores?
        </p>
      </div>
    </section>
  </main>
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
