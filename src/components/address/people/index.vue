<template>
  <div>
    <div class="popple">
      <div class="photo">
        <img :src="require(`@/assets/image/message/p1.svg`)"
             alt />
      </div>
      <div class="card">
        <h3>{{decodeURIComponent(this.$route.params.id.slice(1).split(":")[1])}}</h3>
        <div class="number">
          <span>微信号：</span>
          <span>2323</span>
        </div>
        <div class="area">
          <span>地区：</span>
          <span>广东 深圳</span>
        </div>
      </div>
    </div>
    <CommonUl :op="addressPeopleData" />
  </div>
</template>

<script>

import CommonUl from "@/public_components/CommonUl";
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
    CommonUl
  },
  data () {
    return {
      opPage: {
        class: "find",
        header: true,
        headContent: {
          left: "<",
          right: {}
        }
      }
    };
  },
  computed: {
    ...mapState('store_address_people_modules', ['peopleHeader', 'addressPeopleData'])
  },
  methods: {
    ...mapMutations({
      setInitPageConfig: 'INIT_PAGE_CONFIG'
    }),
    init () {
      let initPageConfig = {
        header: this.peopleHeader,
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
.popple {
  display: flex;
  flex-direction: row;
  padding: 0 0 10px;
  border-bottom: 1px solid #f2f2f2;
  .photo {
    width: 50px;
    img {
      margin-left: 10px;
      width: 30px;
      height: 30px;
      display: inline-block;
    }
  }
  .card {
    h3 {
      font-size: 16px;
    }
    .number {
      color: gray;
    }
    .area {
      color: gray;
    }
  }
}
</style>

