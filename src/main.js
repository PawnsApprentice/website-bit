import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import Nav from "./components/Navbar.vue";
import router from "./router";

const app = createApp(App);
app.component("main-nav", Nav);
app.use(router).mount("#app");
