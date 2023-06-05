<template>
  <div class="min-vh-100 container">
    <Nav />
    <div class="d-flex justify-content-end mt-5 pt-5">
      <img :src="project.image" :alt="project.name" class="project-image" />
      <div class="d-flex flex-column align-items-start ms-5">
        <ul>
          <h2 class="text-purple fw-bold">{{ project.name }}</h2>
          <p class="text-justify text-light text-start fs-6">
            {{ project.description }}
          </p>
        </ul>
        <ul class="pb-3">
          <h2 class="text-center text-purple">Technology</h2>
          <ul class="text-start">
            <li
              v-for="tech in project.tech"
              class="text-light fs-6"
              :key="tech"
            >
              {{ tech }}
            </li>
          </ul>
        </ul>
        <ul>
          <h2 class="text-purple fw-bold">Year Build</h2>
          <p class="text-light text-start fs-6">{{ project.develop }}</p>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { useProjectsStore } from "../stores/project";
import Nav from "@/components/Nav.vue";

export default {
  name: "ProjectDetails",
  components: {
    Nav,
  },
  props: ["slug"],
  setup(props) {
    const projectsStore = useProjectsStore();

    const project = projectsStore.projects.find((p) => p.slug === props.slug);

    return {
      project,
    };
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .project-image {
    max-height: 50vh;
    max-width: 30vw;
  }
}
@media (max-width: 768px) {
  .project-image {
    max-height: 50vh;
    max-width: 30vw;
  }
}
@media (max-width: 490px) {
  .project-image {
    max-height: 40vh;
    max-width: 40vw;
  }
}

.text-justify {
  text-align: justify;
}
.text-purple {
  color: #576cbc;
}
</style>
