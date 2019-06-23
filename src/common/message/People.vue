<template>
  <div class="people">
    <ul>
      <li @click="handleClick" v-for="(item,key) in messageData" :key="key">
        <router-link :to="'/message/people:'+item.title">
          <div class="left">
            <img :src="require(`@/assets/image/message/${item.photo||p1}.svg`)" alt>
            <div>
              <p class="title">{{item.title}}</p>
              <p>{{item.tips}}</p>
            </div>
          </div>
          <div class="time">{{item.time}}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
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
  methods: {
    handleClick(e) {
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
          img {
            width: 40px;
            height: 40px;
          }
          div {
            padding-left: 10px;
          }
        }
        .time {
          float: right;
        }
      }
    }
    li:last-child {
      border: none;
    }
  }
}
</style>


