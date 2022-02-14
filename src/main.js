import { createApp } from "vue";
import router from "../src/core/router.js";
import App from "./App.vue";
import "./index.css";
const app = createApp(App);
app.use(router);
app.mount("#app");
