import { createApp } from "vue";
import { createPinia } from "pinia";

import "bootstrap/scss/bootstrap.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

import App from "@/App.vue";
import router from "@/router";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");
