<template>
  <div>
    <div class="pay">
      <div class="banner">
        <ul>
          <li v-for="(item,index) in money"
              :key="index">
            <img class="image"
                 :src="require(`@/assets/image/me/didi.png`)"
                 alt>
            <p class="text">{{item.title}}</p>
          </li>
        </ul>
      </div>
      <Card :op="tencentPayService" />
      <Card :op="thirdPartyPayService" />
    </div>
  </div>
</template>

<script>
import Card from "@/public_components/Card";
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  components: {
    Card
  },
  data () {
    return {
      money: [{ img: "", title: "收付款" }, { img: "", title: "钱包" }],
      tencentPayService: '',
      thirdPartyPayService: ''
    };
  },
  computed: {
    ...mapState('store_me_moneyBag_modules', ['moneyBagHeader'])
  },
  methods: {
    ...mapMutations({
      setInitPageConfig: 'INIT_PAGE_CONFIG'
    }),
    ...mapActions('store_me_moneyBag_modules', {
      getTencentPayService: 'get_tencentPayService',
      getThirdPartyPayService: 'get_thirdPartyPayService'
    }),
    init () {
      let initPageConfig = {
        header: this.moneyBagHeader,
      }
      this.setInitPageConfig(initPageConfig)
      this.getTencentPayService({ axios: this.axios }).then(res => {
        this.tencentPayService = res.data
      })
      this.getThirdPartyPayService({ axios: this.axios }).then(res => {
        this.thirdPartyPayService = res.data
      })
    }
  },
  created () {
    this.init()
  }
};
</script>
<style lang='less' scoped>
.pay {
  padding: 0 5px;
  left: 0;
  background-color: #efeff4;
  z-index: 1000;
  .banner {
    padding-bottom: 5px;
    ul {
      background-color: #3b9e1e;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      border-radius: 5px;
      padding: 30px 0;
      li {
        .image {
          width: 30px;
        }
        .text {
          color: white;
          margin-top: 5px;
        }
      }
    }
  }
  .middle {
    border-radius: 8px;
    background-color: white;
    margin-top: 10px;
    margin-bottom: 10px;
    h3 {
      padding: 10px 5px;
    }
    ul {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      li {
        height: 100px;
        width: 33.33%;
        border: 1px solid #f2f2f2;
        box-sizing: border-box;
        p {
          text-align: center;
        }
      }
    }
  }
  .bottom {
    border-radius: 8px;
    background-color: white;
    margin-top: 10px;
    margin-bottom: 10px;
    h3 {
      padding: 10px 5px;
    }
    ul {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      li {
        height: 100px;
        width: 33.33%;
        border: 1px solid gray;
        box-sizing: border-box;
        p {
          text-align: center;
        }
      }
    }
  }
}
</style>

