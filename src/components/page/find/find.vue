<template>
<CommonPage :op="opPage">
  <ul class="content">
    <li v-for="(item,index) in data" :key="index">
      <router-link :to='"/find/"+item.route'>
        <img :src="item.img" alt="">
        <p>{{item.title}}</p>
        <img src="" alt="">
      </router-link>
    </li>
  </ul>
</CommonPage>
</template>
<script>
import CommonPage from "@/common/CommonPage";
import friend from "./friend.png";
import scan from "./scan.png";
import shake from "./shake.png";
import search from "./shop.png";
import nearby from "./shop.png";
import shop from "./shop.png";
import game from "./game.png";
import program from "./shop.png";

export default {
  data() {
    return {
      opPage: {
        class: "find",
        header: true,
        footer: true,
        headContent:{
          middle:'发现'
        }
      },
      data: [
        {
          title: "朋友圈",
          img: friend,
          route: "friend"
        },
        {
          title: "扫一扫",
          img: scan,
          route: "scan"
        },
        {
          title: "摇一摇",
          img: shake,
          route: "shake"
        },
        {
          title: "搜一搜",
          img: search,
          route: "search"
        },
        {
          title: "附近的人",
          img: nearby,
          route: "nearby"
        },
        {
          title: "购物",
          img: shop,
          route: "shop"
        },
        {
          title: "游戏",
          img: game,
          route: "game"
        },
        {
          title: "小程序",
          img: program,
          route: "program"
        }
      ]
    };
  },
  components: {
    CommonPage,
  }
};
</script>
<style lang="less" >
.find {
  background-color: #efeff4;
  .content {
    margin-top: 40px;
    li {
      padding: 10px 10px;
      background-color: #ffffff;
      img {
        width: 20px;
        height: 20px;
        display: inline-block;
      }
      p {
        display: inline-block;
        margin-left: 20px;
      }
    }
  }
}
</style>
