<template>
  <CommonPopPage :op="opPage">
    <div class="album">
      <img src alt>
      <div>
        <h3>{{this.$route.params.id.slice(1)}}</h3>
        <div>
          <span>微信号：</span>
          <span>2323</span>
        </div>
        <div>
          <span>地区：</span>
          <span>广东 深圳</span>
        </div>
      </div>
    </div>
  </CommonPopPage>
</template>

<script>
import CommonPopPage from "@/common/CommonPopPage";
export default {
  data() {
    return {
      opPage: {
        class: "find",
        header: true,
        headContent: {
          left: "<",
          right: "..."
        }
      }
    };
  },
  components: {
    CommonPopPage
  }
};
</script>
<style lang='less' scoped>
.album {
  position: absolute;
  top: 40px;
  width: 100%;
  left: 0;
  background-color: white;
  z-index: 1000;
}
</style>

