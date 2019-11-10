import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import "./assets/css/common.css";

Vue.prototype.$log = window.console.log;
Vue.config.productionTip = false;
new Vue({
  data: {},
  el: "#app",
  router,
  components: {
    App
  },
  template: "<App/>",
  store
});