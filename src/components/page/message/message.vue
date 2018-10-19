<template>
  <div class="message">
    <information v-show="informationIsShow"/>
    <div v-show="!informationIsShow">
      <div class="search">
        <input type="text" placeholder="搜索">
      </div>
      <div class="device">
        <img src="" alt="">
        <p>微信已登录</p>
      </div>
      <div class="notice">
        <ul>
          <li @click="informationIsShow=!informationIsShow">
            <div class="left">
              <img src="http://www.cdhdky.com/images/ttt.jpg" alt="">
              <div>
                <p>中国银行深圳分行</p>
                <p>全棉时代5折沟</p>
              </div>
            </div>
            <div class="time">
              下午5:44
            </div>
          </li>
          <li>
            <div class="left">
              <img src="http://www.cdhdky.com/images/ttt.jpg" alt="">
              <div>
                <p>五包辣条</p>
                <p>全棉时代5折沟</p>
              </div>
            </div>
            <div class="time">
              下午5:44
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import information from "./information.vue";
export default {
  data() {
    return {
      informationIsShow: false
    };
  },
  components: {
    information
  }
};
</script>


<style lang="less">
.message {
  .search {
    width: 100%;
    input {
      width: 100%;
    }
  }
  .device {
  }
  .notice {
    ul {
      li {
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
        }
      }
    }
  }
}
</style>
