export default {
  path: "/address",
  name: "address",
  component: () => import("@/components/page/address/address"),
  children: [
    {
      path: "newfriend",
      name: "newfriend",
      component: () => import("@/components/page/address/newfriend")
    },
    {
      path: "number",
      name: "number",
      component: () => import("@/components/page/address/number")
    },
    {
      path: "talk",
      name: "talk",
      component: () => import("@/components/page/address/talk")
    },
    {
      path: "tips",
      name: "tips",
      component: () => import("@/components/page/address/tips")
    }
  ]
};
