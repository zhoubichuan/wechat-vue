export default {
  path: "/address",
  name: "address",
  component: () => import("@/components/address"),
  children: [
    {
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
      component: () => import("@/components/address/people")
    }
  ]
};
