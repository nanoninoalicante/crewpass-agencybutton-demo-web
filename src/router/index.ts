import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "agencyintegration-dev",
            component: () => import("../views/AgencyIntegrationView.vue"),
        },
        {
            path: "/agency-prod",
            name: "agencyintegration-prod",
            component: () => import("../views/AgencyIntegrationProdView.vue"),
        },
    ],
});

export default router;
