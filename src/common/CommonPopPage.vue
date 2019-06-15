<template>
  <div id="CommonPopPage" :class="['common-pop-page',op.class]">
    <Header :op="op.headContent" v-if="op.header" @handleLeft="goBack()"/>
    <div class="pop-content">
      <slot></slot>
    </div>
    <Footer v-if="op.footer"/>
    <Pop v-if="op.pop"/>
  </div>
</template>
<script>
import Header from "./Header";
import Footer from "./Footer";
import Pop from "./Pop";
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
  methods: {
    goBack() {
      window.history.go(-1);
    }
  },
  components: {
    Header,
    Footer,
    Pop
  }
};
</script>
<style lang="less" scoped>
.common-pop-page {
  position: fixed;
  z-index: 10000;
  top: -40px;
  width: 100%;
  left: 0;
  background: #efeff4;
  .pop-content {
    min-height: calc(100vh - 40px);
    margin-top: 40px;
  }
}
</style>

