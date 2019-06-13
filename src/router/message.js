export default {
  path: "/message",
  name: "message",
  component: () => import("@/components/page/message"),
  children: [
    {
      path: "people:id",
      name: "people",
      component: () => import("@/components/page/message/people")
    }
  ]
};
