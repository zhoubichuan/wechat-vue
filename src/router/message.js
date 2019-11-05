import store from '../store'
export default {
  path: "/message",
  name: "message",
  component: () => import("@/components/message"),
  children: [{
      path: "people:id",
      name: "people",
      component: () => import("@/components/message/people"),
      beforeEnter:(to, from, next) => {
        let data={
          left: "<",
          middle: to.path.split(':')[1],
          right:{text: "..."}
        }
        store.commit('HEADER_CONFIG',data)
        next()
      },
    },
    {
      path: "setting:id",
      name: "setting",
      component: () => import("@/components/message/setting")
    },
    {
      path: "people:id",
      name: "people",
      component: () => import("@/components/message/people")
    }, {
      path: "people:id",
      name: "people",
      component: () => import("@/components/message/people")
    }, {
      path: "people:id",
      name: "people",
      component: () => import("@/components/message/people")
    }
  ]
};