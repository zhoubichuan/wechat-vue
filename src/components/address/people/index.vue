<template>
  <CommonPopPage :op="opPage">
    <div class="popple">
      <div class="photo">
        <img :src="require(`@/assets/image/message/p1.svg`)" alt />
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
    <CommonUl :op="dataOp" />
    <router-view />
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
            route:
              "/address/people:" +
              this.$route.params.id.slice(1) +
              "/settingAndTips"
          },
          {
            title: "朋友圈",
            img: "scan",
            route:
              "/address/people:" + this.$route.params.id.slice(1) + "/friend",
            active: true
          },
          {
            title: "更多信息",
            img: "shake",
            route:
              "/address/people:" +
              this.$route.params.id.slice(1) +
              "/moreInformation"
          },
          {
            title: "发消息",
            img: "shake",
            route:
              "/address/people:" +
              this.$route.params.id.slice(1) +
              "/sendInformation"
          },
          {
            title: "音视频通话",
            img: "shake",
            route:
              "/address/people:" +
              this.$route.params.id.slice(1) +
              "/audioVideoTalk"
          }
        ]
      },
      opPage: {
        class: "find",
        header: true,
        headContent: {
          left: "<",
          right: {}
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
  padding: 0 0 10px;
  border-bottom: 1px solid #f2f2f2;
  .photo {
    width: 50px;
    img {
      margin-left: 10px;
      width: 30px;
      height: 30px;
      display: inline-block;
    }
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

