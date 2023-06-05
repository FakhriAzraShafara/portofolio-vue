<template>
  <div class="min-vh-100 container">
    <Nav />
    <FormContact />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import FormContact from "@/components/FormContact.vue";
export default {
  name: "Contact",
  components: {
    Nav,
    FormContact,
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 60%;
}
</style>
