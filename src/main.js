import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import "./assets/css/common.css";
import requestUrl from "@/assets/requestUrl.js";
import axios from "axios";

Vue.prototype.$log = window.console.log;
Vue.prototype.requestUrl = requestUrl
Vue.prototype.axios = axios
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