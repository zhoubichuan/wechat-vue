<template>
  <div>
    <div class="red-bag-record-component">
      <section class="red-bag-record">
        <div class="top">
          <img class="photo" :src="message.pho">
          <p>{{message.name}}</p>
          <p>给你发一个红包</p>
        </div>
        <slot>
          <p>{{message.sum}}个红包</p>
          <ul class="record">
            <li v-for="(item,index) in message.redBag" :key="index">
              <div class="left">
                <img :src="item.photo" alt>
                <div class="record-content">
                  <p>{{item.name}}</p>
                  <p>{{item.time}}</p>
                </div>
              </div>
              <div class="right">
                <span>{{item.money}}元</span>
              </div>
            </li>
          </ul>
        </slot>
      </section>
    </div>
  </div>
</template>

<script>
import Bus from "@/common/Bus.js";
import axios from "axios";
export default {
  data() {
    return {
      message: ""
    };
  },
  created() {
    axios.get("http://localhost:3000/api/record").then(res => {
      this.message = res.data.record;
    });
  },
  methods: {
    hideRedBag() {
      Bus.$emit("hide", true);
      this.$emit("update:s", false);
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  line-height: 40px;
}
#modal {
  .detail {
    position: fixed;
    top: 0;
    z-index: 1000;
    background-color: #d8593f;
    width: 100%;
    height: 100vh;
    left: 0;
    .top {
      img {
        width: 40px;
        padding-top: 50px;
        margin: 0 auto;
        display: block;
      }
      p {
      }
    }
  }
}

#modal .detail .tips {
  margin: 20px 0;
}
.red-bag-record {
  padding: 0 15px;
  height: 100%;
  .top {
    .photo {
      height: 40px;
      width: 40px;
    }
    p {
      text-align: center;
    }
  }
  .record {
    background-color: #f1f1f1;
    margin-top: 10px;
    max-height: 495px;
    overflow-y: scroll;
    li {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .left {
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        img {
          height: 40px;
          width: 40px;
        }
        .record-content {
          padding-left: 10px;
        }
      }
      .right {
      }
    }
  }
}
</style>

