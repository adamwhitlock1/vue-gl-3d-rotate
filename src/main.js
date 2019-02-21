// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import * as VueGL from "vue-gl";

Vue.config.productionTip = false;

Object.keys(VueGL).forEach(name => {
  Vue.component(name, VueGL[name]);
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
