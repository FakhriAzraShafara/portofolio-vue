<template>
  <section class="card-project">
    <h1 class="text-center text-light fw-bold">Own Projects</h1>
    <div class="container mt-5">
      <div class="row">
        <div
          class="col-md-4 mx-auto"
          v-for="project in projects"
          :key="project.slug"
        >
          <div class="card mb-4">
            <img
              :src="project.image"
              class="card-img-top"
              :alt="project.name"
              style="width: auto"
            />
            <div class="card-body">
              <h3>{{ project.name }}</h3>
              <p class="text-justify">{{ project.description }}</p>
              <router-link :to="`/project/${project.slug}`" class="btn"
                ><button class="button-custom">
                  View Details
                </button></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useProjectsStore } from "../stores/project";
export default {
  setup() {
    const projectsStore = useProjectsStore();

    return {
      projects: projectsStore.projects,
    };
  },
};
</script>

<style lang="scss" scoped>
.card-project {
  margin-top: 7rem;
}
.card {
  background-color: #9db2bf;
}
.card-body {
  text-align: center;
}
.text-justify {
  text-align: justify;
}
.button-custom {
  background-color: #37306b;
  text-align: center;
  color: white;
  border: none;
  border-radius: 10px;
  min-height: 50px;
  min-width: 150px;
  font-weight: 600;
  font-size: 1rem;
}
</style>
