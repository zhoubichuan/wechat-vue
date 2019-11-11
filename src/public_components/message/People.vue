<template>
  <div class="people">
    <ul>
      <li @click="handleClick"
          v-for="(item,key) in messageData"
          :key="key">
        <router-link :to="'/messagePeople:'+item.title">
          <div class="left">
            <img class="photo"
                 :src="require(`@/assets/image/message/${item.photo||p1}.svg`)"
                 alt>
            <div class="message">
              <p class="message-title">{{item.title}}</p>
              <p class="message-information">{{item.tips}}</p>
            </div>
          </div>
          <div class="message-time">{{item.time}}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data () {
    return {
      messageData: ""
    };
  },
  created () {
    axios.get("/api/message").then(res => {
      if (res.data.code == 200) {
        this.messageData = res.data.message;
      }
    });
  },
  methods: {
    handleClick (e) {
      this.informationIsShow = !this.informationIsShow;
      this.titleData = e.target.innerText;
    }
  }
};
</script>
<style lang="less" scoped>
.people {
  ul {
    background-color: white;
    padding: 0 10px;
    li {
      padding: 5px 0;
      background-color: #ffffff;
      border-bottom: 1px solid #f2f2f2;
      a {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .left {
          display: flex;
          flex-direction: rew;
          .photo {
            width: 40px;
            height: 40px;
          }
          .message {
            padding-left: 10px;
            .message-information {
              color: gray;
            }
          }
        }
        .message-time {
          float: right;
          color: gray;
        }
      }
    }
    li:last-child {
      border: none;
    }
  }
}
</style>


