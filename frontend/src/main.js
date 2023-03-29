import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

//primevue
import "primevue/resources/themes/lara-light-indigo/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core
import "primeicons/primeicons.css"; //icons

import "./assets/main.css";

import PrimeVue from "primevue/config";
import setupInterceptors from "./services/setupInterceptors";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);

app.mount("#app");
setupInterceptors();
