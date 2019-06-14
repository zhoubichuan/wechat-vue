<template>
  <CommonPopPage :op="opPage">
    <div class="popple">
      <div class="photo">
        <img src alt>
      </div>
      <div class="card">
        <h3>{{this.$route.params.id.slice(1)}}</h3>
        <div class="number">
          <span>微信号：</span>
          <span>2323</span>
        </div>
        <div class="area">
          <span>地区：</span>
          <span>广东 深圳</span>
        </div>
      </div>
    </div>
    <CommonUl :op="dataOp"/>
  </CommonPopPage>
</template>

<script>
import CommonPopPage from "@/common/CommonPopPage";
import CommonUl from "@/common/find/CommonUl";
export default {
  data() {
    return {
      dataOp: {
        data: [
          {
            title: "设置备注和标签",
            img: "friend",
            route: "friend"
          },
          {
            title: "朋友圈",
            img: "scan",
            route: "scan",
            active: true
          },
          {
            title: "更多信息",
            img: "shake",
            route: "shake"
          }
        ]
      },
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
    CommonPopPage,
    CommonUl
  }
};
</script>
<style lang='less' scoped>
.popple {
  display: flex;
  flex-direction: row;

  .photo {
    width: 50px;
  }
  .card {
    h3 {
      font-size: 16px;
    }
    .number {
      color: gray;
    }
    .area {
      color: gray;
    }
  }
}
</style>

