import Vue from "vue";
import Router from "vue-router";
import address from "./address";
import find from "./find";
import me from "./me";
import message from "./message";

Vue.use(Router);

// let getChage = function (obj) {
//   let route

//   function changeRoute(obj, key) {
//     if (Object.prototype.toString.call(obj) === "[object Object]") {
//       let [name] = Object.keys(obj)
//       let [component] = Object.values(obj)
//       return ({
//         path: (key ? key : '') + name + (obj.move ? ":id" : ""),
//         name,
//         component
//       })
//     }
//   }

//   function get(obj) {
//     if (typeof obj === 'object') {
//       route = changeRoute(obj, '/')
//       if (Array.isArray(obj.children)) {
//         route.children = []
//         obj.children.forEach((item, index) => {
//           route.children[index] = changeRoute(item)
//         })
//       }
//     }
//   }
//   get(obj)
//   return route
// }

export default new Router({
  routes: [{
      path: "/",
      redirect: {
        path: "/message"
      }
    },
    message,
    address,
    find,
    me
  ]
});