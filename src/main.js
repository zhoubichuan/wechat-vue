import Vue from "vue";
import App from "./App";
import router from "./router";
import "./style-base.css";

Vue.config.productionTip = false;
new Vue({
  data: {},
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
