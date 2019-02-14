<template>
  <div class="message-component">
    <vheader>
      <p slot="title">微信（4）</p>
      <p slot="more">+</p>
    </vheader>
    <div class="information">
      <information v-show="informationIsShow" :title="titleData"/>
      <div v-show="!informationIsShow">
        <div class="search">
          <input type="text" placeholder="搜索">
        </div>
        <div class="device">
          <img :src="imgData" alt="">
          <p>微信已登录</p>
        </div>
        <div class="notice">
          <ul >
            <li @click="handleClick" v-for="(item,key) in messageData" :key="key">
              <div class="left">
                <img :src="imgData" alt="">
                <div>
                  <p class="title">{{item.title}}</p>
                  <p>{{item.tips}}</p>
                </div>
              </div>
              <div class="time">
                {{item.time}}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vheader from "@/components/base-page/v-header.vue";
import information from "./information.vue";
import img from "../logo.png";
import axios from "axios";
export default {
  data() {
    return {
      imgData: img,
      titleData: "",
      informationIsShow: false,
      messageData: ""
    };
  },
  created() {
    axios.get("http://localhost:3000/api/message").then(res => {
      if (res.data.code == 200) {
        this.messageData = res.data.message;
      }
    });
  },
  components: {
    information,
    vheader
  },
  methods: {
    handleClick(e) {
      this.informationIsShow = !this.informationIsShow;
      this.titleData = e.target.innerText;
    }
  }
};
</script>


<style scoped lang="less">
.information {
  background-color: #efeff4;
  padding-top: 40px;
  overflow-y: scroll;

  height: calc(100vh - 80px);
  .search {
    padding: 10px 5px;
    box-sizing: border-box;
    input {
      width: 100%;
      height: 28px;
      border-radius: 5px;
      outline: none;
      border: none;
      text-align: center;
    }
  }
  .device {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 0;
    img {
      width: 20px;
      height: 20px;
      margin-left: 10px;
    }
    p {
      padding-left: 10px;
    }
  }
  .notice {
    ul {
      background-color: white;
      padding: 0 10px;
      li {
        padding: 5px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #ffffff;
        border-bottom: 1px solid #f2f2f2;
        .left {
          display: flex;
          flex-direction: rew;
          img {
            width: 40px;
            height: 40px;
          }
          div {
            padding-left: 10px;
          }
        }
        .time {
        }
      }
      li:last-child {
        border: none;
      }
    }
  }
}
</style>
