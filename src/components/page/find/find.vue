<template>
  <div>
    <vheader>
      <p slot="title">发现</p>
    </vheader>
    <div class="find-component">
      <div class="find">
        <ul >
          <li v-for="(item,index) in data" :key="index">
            <img :src="item.img" alt=""><p>{{item.title}}</p><img src="" alt="">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import vheader from "@/components/base-page/v-header.vue";
import friend from "./friend.png";
import game from "./game.png";
import scan from "./scan.png";
import shake from "./shake.png";
import shop from "./shop.png";

export default {
  data() {
    return {
      data: [
        {
          title: "朋友圈",
          img: friend
        },
        {
          title: "扫一扫",
          img: scan
        },
        {
          title: "摇一摇",
          img: shake
        },
        {
          title: "搜一搜",
          img: "http://www.cdhdky.com/images/ttt.jpg"
        },
        {
          title: "附近的人",
          img: "http://www.cdhdky.com/images/ttt.jpg"
        },
        {
          title: "购物",
          img: shop
        },
        {
          title: "游戏",
          img: game
        },
        {
          title: "小程序",
          img: "http://www.cdhdky.com/images/ttt.jpg"
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
      padding: 5px 0;
      img {
        width: 40px;
        height: 40px;
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
