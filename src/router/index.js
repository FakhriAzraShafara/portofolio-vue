import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contact from '../views/Contacts.vue'
import Project from '../views/Projects.vue'
import ProjectDetails from '../views/ProjectDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/project',
      name: 'project',
      component: Project,
    },
    {
      path: "/project/:slug",
      component: ProjectDetails,
      props: true,
    },
  ]
})

export default router
