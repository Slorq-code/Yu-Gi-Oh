import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SingIn from "../views/SingIn.vue";

const routes = [
    {
        path: "/",
        name: "SingIn",
        component: SingIn,
    },
    {
        path: "/home",
        name: "home",
        component: Home,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
export default router;
