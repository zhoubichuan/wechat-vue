<template>
  <div>
    <div class="emoji">
      <div class="top">
        <ul>
          <li v-for="(item,index) in money"
              :key="index">
            <img src
                 alt>
            <p class="title">{{item.title}}</p>
          </li>
        </ul>
      </div>
      <div class="middle">
        <h3>推荐表情</h3>
        <ul>
          <li v-for="(item,index) in tenxun"
              :key="index">
            <img src
                 alt>
            <span class="title">{{item.title}}</span>
            <button>添加</button>
          </li>
        </ul>
      </div>
      <div class="bottom">
        <h3>更多精选</h3>
        <ul>
          <li v-for="(item,index) in server"
              :key="index">
            <img src
                 alt>
            <span class="title">{{item.title}}</span>
            <button>添加</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {
      opPage: {
        class: "find",
        header: true,
        headContent: {
          left: "<",
          middle: "支付"
        }
      },
      money: [],
      tenxun: '',
      server: ''
    };
  },
  computed: {
    ...mapState('store_me_emoji_modules', ['emojiHeader'])
  },
  methods: {
    ...mapMutations({
      setInitPageConfig: 'INIT_PAGE_CONFIG'
    }),
    ...mapActions('store_me_emoji_modules', {
      getMoreExcitingExpression: 'get_moreExcitingExpression',
      getRecommendedExpression: 'get_recommendedExpression'
    }),
    init () {
      let initPageConfig = {
        header: this.emojiHeader,
      }
      this.setInitPageConfig(initPageConfig)
      this.getMoreExcitingExpression({ axios: this.axios }).then(res => {
        this.server = res.data
      })
      this.getRecommendedExpression({ axios: this.axios }).then(res => {
        this.tenxun = res.data
      })
    }
  },
  created () {
    this.init()
  }
};
</script>
<style lang='less' scoped>
.emoji {
  position: absolute;
  top: 40px;
  width: 100%;
  left: 0;
  background-color: white;
  z-index: 1000;
  border-radius: 8px;
  h3 {
    padding: 10px 5px;
  }
  ul {
    li {
      background-color: white;
      border-bottom: 1px solid #f2f2f2;
      height: 30px;
      &:nth-of-type(5) {
        border-bottom: none;
        margin-bottom: 10px;
      }
      button {
        float: right;
      }
    }
  }
}
</style>

