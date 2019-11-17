<template>
  <div>
    <div class="cardBag">
      <ul>
        <li v-for="(item,index) in cardBag"
            :key="index">
          <div class="left">
            <img :src="item.ico"
                 alt>
          </div>
          <div class="right">
            <h3 class="title">{{item.title}}</h3>
            <div class="box">
              <h4 class="card-name">{{item.cardName}}</h4>
              <p class="card-text">{{item.content}}</p>
              <p class="tips">{{item.tips}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      cardBag: [
        {
          ico: "",
          title: "绝味鸭脖",
          cardName: "会员卡",
          content: "绝味鸭脖",
          tips: ""
        },
        {
          ico: "",
          title: "绝味鸭脖",
          cardName: "会员卡",
          content: "绝味鸭脖",
          tips: ""
        },
        {
          ico: "",
          title: "绝味鸭脖",
          cardName: "会员卡",
          content: "绝味鸭脖",
          tips: ""
        }
      ],
      opPage: {
        class: "find",
        header: true,
        headContent: {
          left: "<",
          middle: "支付"
        }
      }
    };
  },
  computed: {
    ...mapState(['isShowHeader', 'isShowFooter']),
    ...mapState('store_me_cardBag_modules', ['cardBagHeader'])
  },
  methods: {
    ...mapMutations({
      setInitPageConfig: 'INIT_PAGE_CONFIG'
    }),
    init () {
      let initPageConfig = {
        header: this.cardBagHeader,
      }
      this.setInitPageConfig(initPageConfig)
    }
  },
  created () {
    this.init()
  }

};
</script>
<style lang='less' scoped>
.cardBag {
  position: absolute;
  top: 40px;
  width: 100%;
  left: 0;
  background-color: white;
  z-index: 1000;
  ul {
    li {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      padding: 10px 20px;
      .left {
        width: 40px;
      }
      .right {
        flex: 1;
        .title {
        }
        .box {
          background-color: red;
          .card-name {
          }
          .card-text {
          }
          .tips {
          }
        }
      }
    }
  }
}
</style>

