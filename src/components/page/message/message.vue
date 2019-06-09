<template>
  <CommonPage :op="opPage">
    <information v-show="informationIsShow" :title="titleData"/>
    <div v-show="!informationIsShow">
      <Search/>
      <div class="device">
        <img :src="imgData" alt>
        <p>微信已登录</p>
      </div>
      <div class="notice">
        <ul>
          <li @click="handleClick" v-for="(item,key) in messageData" :key="key">
            <div class="left">
              <img :src="imgData" alt>
              <div>
                <p class="title">{{item.title}}</p>
                <p>{{item.tips}}</p>
              </div>
            </div>
            <div class="time">{{item.time}}</div>
          </li>
        </ul>
      </div>
    </div>
  </CommonPage>
</template>

<script>
import CommonPage from "@/common/CommonPage";
import Search from "@/common/Search";
import information from "./information.vue";
import img from "../logo.png";
import axios from "axios";
export default {
  data() {
    return {
      opPage: {
        class: "message",
        header: true,
        footer: true,
        headContent: {
          style: "color:black ;background-color: white;",
          left: "",
          middle: "微信(18)",
          right: "+",
          popFloor: true
        }
      },
      imgData: img,
      titleData: "",
      informationIsShow: false,
      messageData: ""
    };
  },
  created() {
    axios.get("/api/message").then(res => {
      if (res.data.code == 200) {
        this.messageData = res.data.message;
      }
    });
  },
  components: {
    CommonPage,
    information,
    Search
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
.message {
  background-color: #efeff4;
  overflow-y: scroll;
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
