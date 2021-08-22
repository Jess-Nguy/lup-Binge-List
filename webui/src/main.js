import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { FontAwesomeIcon } from '@/plugins/font-awesome.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

createApp(App).use(store).use(router).component('fa', FontAwesomeIcon).mount('#app');
