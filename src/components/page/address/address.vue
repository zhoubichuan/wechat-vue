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
            <li v-for="(item,index) in data " :key="index" v-if="item.img">
              <img :src="item.img" alt="">
              <p>{{item.title}}</p>
            </li>
            <li v-else class="no-people">{{item.title}}</li>
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
        { title: "A" },
        { title: "曹操", img },
        { title: "孙权", img },
        { title: "周瑜", img },
        { title: "黄盖", img },
        { title: "B" },
        { title: "刘备", img },
        { title: "诸葛亮", img },
        { title: "张飞", img },
        { title: "D" },
        { title: "关羽", img },
        { title: "魏延", img }
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
        padding: 10px 15px;
        background-color: #ffffff;
        border-bottom: 1px solid #f2f2f2;
        img {
          width: 30px;
          height: 30px;
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