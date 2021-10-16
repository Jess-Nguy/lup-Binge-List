import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/lib/css/mdb.min.css';

import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import Axios from 'axios';
import { AutoCompletePlugin } from '@syncfusion/ej2-vue-dropdowns';

createApp(App).config.globalProperties.$http = Axios;
// @import url(https://cdn.syncfusion.com/ej2/material.css);

createApp(App).use(store).use(router).mount('#app');
createApp(App).use(AutoCompletePlugin);
