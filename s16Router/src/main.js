import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'
import {routes} from "./router"

Vue.use(VueResource);

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savePosition) {
    if (to.hash) {
      return {selector: to.hash}
    }
  }
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
