<template>
  <CommonPage :op="opPage">
    <div class="information">
      <input type="text" v-model="val">
    </div>
  </CommonPage>
</template>

<script>
import CommonPage from "@/public_components/CommonPage";

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
    CommonPage
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

