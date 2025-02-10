import "./assets/main.css";
import "primeicons/primeicons.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { createApp } from "vue";
import App from "./App.vue";
import route from "./routes";

const app = createApp(App);
app.use(route);
app.use(Toast);
app.mount("#app");
