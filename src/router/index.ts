import { createRouter, createWebHistory } from 'vue-router';
// import Home from './components/Home.vue';
// import About from './components/About.vue';
import ProductOverview from '@/pages/ProductOverview.vue';
import ProductDetail from '@/pages/ProoductDetails.vue';

const routes = [
  { path: '/', component: ProductOverview },
  { path: '/product/:id', component: ProductDetail }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;