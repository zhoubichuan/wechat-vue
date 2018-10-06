import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const state = {
  redBagTyep: "commonRedBag",
  redBagAmount: "",
  redBagNumber: "",
  sendMessage: "",
  pageShow: false,
  applianceShow: false,
  pageStopScroll: false
};
const store = new Vuex.Store({
  state
});

export default store;
