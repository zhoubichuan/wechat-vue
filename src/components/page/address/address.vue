<template>
  <div>
    <vheader>
      <p slot="title">通讯录</p>
      <p slot="more">人像</p>
    </vheader>
    <div class="address-component">
      <div class="address">
        <div class="search">
          <input type="text"/>
        </div>
        <div class="top">
          <ul>
            <li v-for="(item,index) in data " :key="index">
              <img :src="item.img" alt="">
              <p>{{item.title}}</p>
            </li>
          </ul>
        </div>
        <div class="peopel">
          <ul>
            <li><img src="" alt=""><p class="name">aaaa</p></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vheader from "@/components/base-page/v-header.vue";
import img from "../logo.png";
import groupChat from "./group-chat.png";
import newFriends from "./new-friends.png";
import officialAcounts from "./official-acounts.png";
import tips from "./tips.png";
export default {
  data() {
    return {
      data: [
        { title: "新的朋友", img: newFriends },
        { title: "群聊", img: groupChat },
        { title: "标签", img: tips },
        { title: "公众号", img: officialAcounts },
        { title: "新的朋友", img },
        { title: "新的朋友", img }
      ]
    };
  },
  components: {
    vheader
  }
};
</script>

<style lang="less">
.address {
  background-color: #efeff4;
  margin-top: 20px;
  height: calc(100vh - 50px);
  .top {
    ul {
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
}
</style>