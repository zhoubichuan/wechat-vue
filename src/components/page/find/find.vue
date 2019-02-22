<template>
  <div>
    <vheader>
      <p slot="title">发现</p>
    </vheader>
    <div class="find-component">
      <div class="find">
        <ul >
          <li v-for="(item,index) in data" :key="index">
            <router-link :to='"/find/"+item.route'>
              <img :src="item.img" alt="">
              <p>{{item.title}}</p>
              <img src="" alt="">
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import vheader from "@/components/base-page/v-header.vue";
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
    vheader
  }
};
</script>
<style lang="less">
.find {
  background-color: #efeff4;
  ul {
    margin-top: 40px;
    li {
      padding: 10px 10px;
      background-color: #ffffff;
      border-bottom: 1px solid #f2f2f2;
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
