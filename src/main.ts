import "./assets/scss/reset.scss";
import "./assets/scss/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from "./App.vue";
import router from "./router";
import './router/middleware';


const app = createApp(App);

app.use(createPinia());
app.use(router);
// app.use(axios);
app.use(ElementPlus)
app.mount("#app");

// globais

// app.config.globalProperties.$axios = axios;
