export default {
  path: "/message",
  name: "message",
  component: () => import("@/components/message"),
  children: [
    {
      path: "people:id",
      name: "people",
      component: () => import("@/components/message/people")
    }
  ]
};
