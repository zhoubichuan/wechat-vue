<template>
  <div>
    <div class="number">
      <NameList />
    </div>
  </div>
</template>

<script>
import NameList from "@/public_components/NameList";
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
    NameList
  },
  data () {
    return {

    };
  },
  computed: {
    ...mapState('store_address_number_modules', ['addressNumberHeader'])
  },
  methods: {
    ...mapMutations({
      setInitPageConfig: 'INIT_PAGE_CONFIG'
    }),
    init () {
      let initPageConfig = {
        header: this.addressNumberHeader,
        isShowSearch: true,
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
.number {
  top: 40px;
  width: 100%;
  left: 0;
  background-color: white;
  z-index: 1000;
}
</style>

