<template>
  <CommonPage :op="opPage">
    <div class="me-part">
      <div class="me-component">
        <div class="me">
          <div class="me-application">
            <ul>
              <li v-for="(item,index) in application" :key="index">
                <router-link v-if="item.content" class="me-information" :to="'/me/' + item.route">
                  <div class="left">
                    <img :src="require(`@/assets/image/me/${item.ico}.png`)" alt>
                    <div>
                      <p>{{item.title}}</p>
                      <p>{{item.content}}</p>
                    </div>
                  </div>
                  <div class="right">
                    <img src alt>
                    <img src alt>
                  </div>
                </router-link>
                <router-link v-else :to="'/me/' + item.route">
                  <img :src="require(`@/assets/image/me/${item.ico}.png`)" alt>
                  <p>{{item.title}}</p>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <transition name="transitionRouter" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </CommonPage>
</template>
<script>
import CommonPage from "@/common/CommonPage";
export default {
  data() {
    return {
      opPage: {
        class: "me",
        header: true,
        footer: true,
        headContent: {
          right: {
            ico: "camera"
          }
        }
      },
      application: [
        {
          ico: "photo",
          title: "会跑的鸡腿",
          content: "微信号：zbc159x",
          route: "information"
        },
        {
          ico: "moneyBag",
          title: "支付",
          route: "moneyBag"
        },
        {
          ico: "collection",
          title: "收藏",
          route: "collection"
        },
        {
          ico: "album",
          title: "相册",
          route: "album"
        },
        {
          ico: "cardBag",
          title: "卡包",
          route: "cardBag"
        },
        {
          ico: "emoji",
          title: "表情",
          route: "emoji"
        },
        {
          ico: "setting",
          title: "设置",
          route: "setting"
        }
      ]
    };
  },
  components: {
    CommonPage
  },
  methods: {
    go() {
      history.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.me-part {
  position: relative;
}
.me {
  background-color: #efeff4;
  overflow-y: auto;

  ul {
    margin-top: 15px;
    li {
      &:first-child {
        border: none;
        margin-bottom: 15px;
      }
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
  &:nth-last-child(2) {
    border: none;
    &:last-child {
      border: none;
      margin-top: 15px;
    }
  }
  .me-information {
    background-color: #ffffff;
    padding: 5px 15px;
    box-sizing: border-box;
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
.transitionRouter-enter-active,
.transitionRouter-leave-active {
  transition: all 0.4s;
}
.transitionRouter-enter,
.transitionRouter-leave {
  transform: translate3d(100%, 0, 0);
}
</style>

