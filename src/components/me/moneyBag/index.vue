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
      <Card :data="tencentPayService" />
      <Card :data="thirdPartyPayService" />
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
    async getAllData () {
      let tencentPayService = await this.getTencentPayService({ axios: this.axios })
      this.tencentPayService = tencentPayService.data
      let thirdPartyPayService = await this.getThirdPartyPayService({ axios: this.axios })
      this.thirdPartyPayService = thirdPartyPayService.data
    },
    init () {
      let initPageConfig = {
        header: this.moneyBagHeader,
      }
      this.setInitPageConfig(initPageConfig)
      this.getAllData()
    }
  },
  created () {
    this.init()
  }
};
</script>
<style lang='less' scoped>
@import "index.less";
</style>

