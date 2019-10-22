<template>
  <CommonPopPage :op="opPage">
    <div class="information">
      <ul>
        <li v-for="(item,index) in data" :key="index">
          <router-link :to=" item.route?'/me/information/' + item.route:'#'">
            <p class="title">{{item.title}}</p>
            <img src alt>
          </router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </CommonPopPage>
</template>

<script>
import CommonPopPage from "@/public_components/CommonPopPage";

export default {
  data() {
    return {
      opPage: {
        class: "setting",
        header: true,
        headContent: {
          left: "<",
          middle: "个人信息"
        }
      },
      data: [
        { title: "头像", image: "", route: "photo" },
        { title: "名字", image: "", route: "name" },
        { title: "微信号", image: "" },
        { title: "我的二维码", image: "", route: "code" },
        { title: "更多", image: "", route: "more" },
        { title: "我的地址", image: "", route: "address" }
      ]
    };
  },
  components: {
    CommonPopPage
  }
};
</script>
<style lang='less' scoped>
.information {
  width: 100%;
  left: 0;
  background-color: #efeff4;
  z-index: 1000;
  ul {
    li {
      padding: 0 15px;
      background-color: white;
      border-bottom: 1px solid #f2f2f2;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 40px;
      &:nth-of-type(5) {
        border-bottom: none;
        margin-bottom: 10px;
      }
    }
  }
}
</style>

