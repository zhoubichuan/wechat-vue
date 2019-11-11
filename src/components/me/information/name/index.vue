<template>
  <div>
    <div class="information">
      <input type="text"
             v-model="val">
    </div>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      val: "会跑的鸡腿",
      opPage: {
        class: "me-information-name",
        header: true,

      }
    };
  },
  computed: {
    ...mapState('storeMeModules/storeInformationModules', ['nameHeader'])
  },
  methods: {
    ...mapMutations({
      setHeaderConfig: 'HEADER_CONFIG'
    }),
    init () {
      this.setHeaderConfig(this.nameHeader)
    }
  },
  created () {
    this.init()
  }
};
</script>
<style lang='less' scoped>
.information {
  padding-top: 40px;
  input {
    width: 100%;
    height: 30px;
    text-indent: 10px;
    border: none;
    line-height: 30px;
  }
}
</style>

