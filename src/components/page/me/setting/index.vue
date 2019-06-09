<template>
  <CommonPopPage :op="opPage">
    <div class="setting-part">
      <div class="setting">
        <ul>
          <li v-for="(item,index) in setting" :key="index">
            <router-link :to="'/me/setting/' + item.route">
              <span>{{item.title}}</span>
              <span v-if="item.img">{{item.img}}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <router-view></router-view>
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
          middle: "支付"
        }
      },
      setting: [
        { title: "账号安全", img: ">", route: "accountSafe" },
        { title: "新消息通知", img: ">", route: "newMessageNote" },
        { title: "隐私", img: ">", route: "privacy" },
        { title: "通用", img: ">", route: "common" },
        { title: "帮助与反馈", img: ">", route: "helpAndFeedback" },
        { title: "关于微信", img: ">", route: "aboutWeChate" },
        { title: "插件", img: ">", route: "weChatePlugin" },
        { title: "切换账号", route: "changeAcount" },
        { title: "退出登录", route: "outLogin" }
      ]
    };
  },
  components: {
    CommonPopPage
  }
};
</script>
<style lang='less'>
.setting-part {
  position: absolute;
  top: 40px;
  width: 100%;
  left: 0;
  background-color: #efeff4;
  z-index: 1000;
  .setting {
    ul {
      li {
        background-color: white;
        border-bottom: 1px solid #f2f2f2;
        height: 40px;
        line-height: 40px;
        &:nth-of-type(1) {
          margin-bottom: 8px;
        }
        &:nth-of-type(4) {
          margin-bottom: 8px;
        }
        &:nth-of-type(6) {
          margin-bottom: 8px;
        }
        &:nth-of-type(7) {
          margin-bottom: 8px;
        }
        &:nth-of-type(8) {
          margin-bottom: 8px;
          a {
            justify-content: center;
          }
        }
        &:nth-of-type(9) {
          a {
            justify-content: center;
          }
        }
        a {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 0 10px;
          span {
            &:nth-of-type(1) {
              text-align: left;
            }
            &:nth-of-type(2) {
              text-align: right;
              font-size: 20px;
              color: gray;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
}
</style>

