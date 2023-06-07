<template>
  <div class="min-vh-100 container">
    <Nav />
    <About />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import About from "@/components/About.vue";
export default {
  name: "Home",
  components: {
    Nav,
    About,
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 60%;
}

@media (max-width: 767px) {
  .container {
    max-width: 100%;
  }
}
</style>
