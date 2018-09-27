import Vue from "vue";
import App from "./App";
import router from "./router";
import "./style-base.css";

const Bus = new Vue();
Vue.prototype.bus = Bus;

Vue.config.productionTip = false;
new Vue({
  //数据
  data: {},
  //视图
  el: "#app",
  //路由
  router,

  components: { App },
  //模板
  template: "<App/>"
});
