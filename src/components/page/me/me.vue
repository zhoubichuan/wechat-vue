<template>
  <div class="me-part">
    <vheader>
      <p slot="title">个人信息</p>
      <p slot="cancel" @click="goAhead">{{"<我"}}</p>
    </vheader>
    <div class="me-component">
      <div class="me">
        <div class="information">
          <router-link to="/me/information">
            <div class="left">
            <img :src="ico" alt="">
            <div>
              <p>会跑的鸡腿</p>
              <p>微信号：zbc159x</p>
            </div>
          </div>
          <div class="right">
            <img src="" alt="">
            <img src="" alt="">
          </div>
          </router-link>
          
        </div>
        <div class="me-application">
          <ul>
            <li v-for="(item,index) in application" :key="index">
              <router-link :to='"/me/" + item.route'>
                <img :src="item.ico" alt="" />
                <p>{{item.title}}</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import vheader from "@/components/base-page/v-header.vue";
import ico from "./photo.png";
export default {
  data() {
    return {
      ico,
      application: [
        {
          ico,
          title: "钱包",
          route: "MoneyBag"
        },
        {
          ico,
          title: "收藏",
          route: "Collection"
        },
        {
          ico,
          title: "相册",
          route: "Album"
        },
        {
          ico,
          title: "卡包",
          route: "CardBag"
        },
        {
          ico,
          title: "表情",
          route: "Emoji"
        },
        {
          ico,
          title: "设置",
          route: "Setting"
        }
      ]
    };
  },
  components: {
    vheader
  },
  methods: {
    goAhead() {
      history.go(-1);
    }
  }
};
</script>

<style lang="less">
.me-part {
  position: relative;
}
.me {
  background-color: #efeff4;
  padding-top: 47px;
  height: calc(100vh - 50px);
  overflow-y: auto;
  .information {
    background-color: #ffffff;
    padding: 5px 15px;
    box-sizing: border-box;
    a {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 5px 0;
      .left {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        img {
          width: 40px;
          height: 40px;
        }
        div {
          margin-left: 20px;
        }
      }
      .rigth {
      }
    }
  }
  ul {
    margin-top: 15px;
    li:first-child {
      border: none;
      margin-bottom: 15px;
    }
    li {
      padding: 5px 15px;
      background-color: #ffffff;
      border-bottom: 1px solid #f2f2f2;
      a {
        display: flex;
        flex-direction: row;
        align-items: center;
        img {
          width: 20px;
          height: 20px;
        }
        p {
          margin-left: 10px;
        }
      }
    }
  }
  li:nth-last-child(2) {
    border: none;
  }
  li:last-child {
    border: none;
    margin-top: 15px;
  }
}
</style>

