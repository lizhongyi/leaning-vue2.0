// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import API from './api/Rest-api.js'
import 'babel-polyfill'
window.API = API;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');