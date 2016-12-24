// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import API from './api/Rest-api.js'
window.API = API;
window.ajax = axios;
/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');