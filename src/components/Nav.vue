<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="nav-link">Fakhri Azra</router-link>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              to="/"
              class="nav-link"
              :class="{ 'bg-secondary text-dark rounded-3 p-2': isActive('/') }"
            >
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/project"
              class="nav-link"
              :class="{
                'bg-secondary text-dark rounded-3 p-2': isActive(
                  '/project',
                  '/project/:slug'
                ),
              }"
            >
              Project
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/contact"
              class="nav-link"
              :class="{
                'bg-secondary text-dark rounded-3 p-2': isActive('/contact'),
              }"
            >
              Contact
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  width: 100%;
  z-index: 999;
  background-color: #27374d;
  /* Menentukan tingkat tumpukan */
}
.navbar-brand {
  margin-right: 1rem;
}
.navbar-toggler {
  margin-right: 0;
  margin-left: auto;
  background: black;
}
</style>
