import Vue from "vue"
import App from "./App"
import router from "./router"
import store from "./store"
import "./assets/css/common.css"
import requestUrl from "@/assets/requestUrl.js"
import axios from "./axios"
import i18n from "./i18n"
import _ from "lodash"
import moment from "moment"
import Bus from "./bus"
import filter from "./filter"

Vue.prototype.$log = window.console.log
Vue.prototype.$requestUrl = requestUrl
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.prototype.$_ = _
Vue.prototype.$moment = moment
Vue.prototype.$Bus = Bus
Vue.config.devtools = true

Object.keys(filter).forEach(item => {
  Vue.filter(item, filter[item])
})

new Vue({
  el: "#app",
  router,
  i18n,
  components: {
    App,
  },
  template: "<App/>",
  store,
})