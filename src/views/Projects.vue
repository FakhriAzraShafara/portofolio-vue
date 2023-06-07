<template>
  <div class="min-vh-100 container">
    <Nav />
    <CardProject />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import CardProject from "@/components/CardProject.vue";
export default {
  name: "Project",
  components: {
    Nav,
    CardProject,
  },
};
</script>

<style lang="scss" scoped></style>
