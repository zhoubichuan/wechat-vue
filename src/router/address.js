// export default {
//   address: () => import("@/components/address"),
//   children: [{
//       friends: () => import("@/components/address/newfriend"),
//     },
//     {
//       number: () => import("@/components/address/number"),
//     },
//     {
//       talk: () => import("@/components/address/talk"),
//     },
//     {
//       tips: () => import("@/components/address/tips"),
//     },
//     {
//       people: () => import("@/components/address/people"),
//       move: true
//     }
//   ]
// }

export default {
  path: "/address",
  name: "address",
  component: () => import("@/components/address"),
  children: [{
      path: "friends",
      name: "friends",
      component: () => import("@/components/address/newfriend")
    },
    {
      path: "number",
      name: "number",
      component: () => import("@/components/address/number")
    },
    {
      path: "talk",
      name: "talk",
      component: () => import("@/components/address/talk")
    },
    {
      path: "tips",
      name: "tips",
      component: () => import("@/components/address/tips")
    },
    {
      path: "people:id",
      name: "people",
      component: () => import("@/components/address/people"),
      children: [{
          path: "settingAndTips",
          name: "settingAndTips",
          component: () => import("@/components/address/people/settingAndTips")
        },
        {
          path: "friend",
          name: "friend",
          component: () => import("@/components/address/people/friend")
        },
        {
          path: "moreInformation",
          name: "moreInformation",
          component: () => import("@/components/address/people/moreInformation")
        },
        {
          path: "sendInformation",
          redirect: {
            path: "/message/people:id"
          }
        },
      ]
    }
  ]
};