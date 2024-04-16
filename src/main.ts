import { createApp } from 'vue'
import './index.css'
import App from './App.vue';
import store from './store';
import router from './router';


const main =  createApp(App);
main.use(store);
main.use(router);

main.mount('#app');
