<template>
  <CommonPopPage :op="opPage">
    <div class="information">
      <input type="text" v-model="val">
    </div>
  </CommonPopPage>
</template>

<script>
import CommonPopPage from "@/common/CommonPopPage";

export default {
  data() {
    return {
      val: "会跑的鸡腿",
      opPage: {
        class: "me-information-name",
        header: true,
        headContent: {
          left: "取消",
          middle: "设置名字",
          right: "完成"
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
.information {
  padding-top: 40px;
  input {
    width: 100%;
    height: 30px;
    text-indent: 10px;
    border: none;
    line-height: 30px;
  }
}
</style>

