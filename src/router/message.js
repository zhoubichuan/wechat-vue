export default {
  path: "/message",
  name: "message",
  component: () => import("@/components/message"),
  children: [{
      path: "people:id",
      name: "people",
      component: () => import("@/components/message/people")
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