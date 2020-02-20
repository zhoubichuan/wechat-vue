<template>
  <div>
    <div class="information">
      {{$log(meInformationNameHeader.right.disabled)}}
      <input type="text" 
             v-model="myName">
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
    ...mapState('store_me_information_name_location_modules', ['meInformationNameHeader','name']),
    myName:{
        get () {
            return this.name
        },
        set (name) {
          let disabled= (name == localStorage.name)
            this.changeName({name,disabled})
        }
      }
  },
  methods: {
    ...mapMutations({
      setInitPageConfig: 'INIT_PAGE_CONFIG'
    }),
    ...mapMutations('store_me_information_name_location_modules', {
      handleHeaderRight: 'handleHeaderRight',
      changeName: 'changeName',
    }),
    init () {
      let initPageConfig = {
        header: this.meInformationNameHeader,
      }
      this.setInitPageConfig(initPageConfig)
      this.changeName({name:localStorage.name,disabled:true})
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

