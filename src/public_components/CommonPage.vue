<template>
  <div id="CommonPage" :class="['common-page',op.class]">
    <!-- <Header :op="op.headContent" v-if="op.header"/> -->
    <div class="common-content">
      <slot></slot>
    </div>
    <!-- <Footer v-if="op.footer"/>
    <Pop v-if="op.pop"/> -->
  </div>
</template>
<script>
// import Header from "./Header";
// import Footer from "./Footer";
// import Pop from "./Pop";
export default {
  props: {
    op: {
      type: Object,
      default: function() {
        return {
          class: "page",
          header: true,
          headContent: {
            style: "color:black ;background-color: white;",
            left: "",
            middle: "微信(18)",
            right: "+"
          },
          footer: true
        };
      }
    }
  },
  components: {
    // Header,
    // Footer,
    // Pop
  }
};
</script>
<style lang="less" scoped>
.common-page {
  position: relative;
  .common-content {
    min-height: calc(100vh - 80px);
    margin-bottom: 40px;
  }
}
</style>

