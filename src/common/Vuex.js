import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const state = { redBagName: "我的红包" };
const store = new Vuex.Store({
  state
});

export default store;
