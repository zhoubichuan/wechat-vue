<template>
  <div>
    <div class="tips">
      <p class="tips-create">新建标签</p>
      <ul class="tips-content">
        <li class="tips-kind"
            v-for="(item,index) in addressTipsData"
            :key="index">
          <h3 class="tips-kind-title">{{item.title +'('+item.content.length+')'}}</h3>
          <div class="tips-kind-person">
            {{item.content.join(',')}}
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

    };
  },
  computed: {
    ...mapState('store_address_tips_modules', ['addressTipsHeader', 'addressTipsData'])
  },
  methods: {
    ...mapMutations({
      setInitPageConfig: 'INIT_PAGE_CONFIG'
    }),
    init () {
      let initPageConfig = {
        header: this.addressTipsHeader,
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
.tips {
  position: absolute;
  top: 40px;
  width: 100%;
  left: 0;
  background-color: white;
  z-index: 1000;
  .tips-create {
    padding: 0 20px;
  }
  .tips-content {
    padding: 0 20px;
    .tips-kind {
      .tips-kind-title {
        font-size: 14px;
      }
      .tips-kind-person {
        font-size: 12px;
        color: gray;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding: 5px 0;
      }
    }
  }
}
</style>

