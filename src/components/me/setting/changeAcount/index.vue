<template>
  <div class="changeAcount">
    <h1>轻触头像以切换账号</h1>
    <ul>
      <li v-for="(item,index) in accountSafe"
          :key="index">
        <span>{{item.ico}}</span>
        <p>{{item.name}}</p>
        <p>{{item.tips}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      accountSafe: [
        { ico: "", name: "zbc159x", tips: "当前使用" },
        { ico: "", name: "zbc159x2", tips: "未使用" },
        { ico: "", name: "zbc159x3", tips: "未使用" },
        { ico: "", name: "zbc159x4", tips: "未使用" }
      ]
    };
  },
  computed: {
    ...mapState(['isShowHeader', 'isShowFooter']),
    ...mapState('store_me_setting_modules', ['settingChangeAcountHeader'])
  },
  methods: {
    ...mapMutations({
      setShowOrHideHeader: 'SHOW_OR_HIDE_HEADER',
      setShowOrHideFooter: 'SHOW_OR_HIDE_FOOTER',
      setHeaderConfig: "HEADER_CONFIG"
    }),
    init () {
      this.setShowOrHideFooter(true)
      this.setShowOrHideFooter(false)
      this.setHeaderConfig(this.settingChangeAcountHeader)
    }
  },
  created () {
    this.init()
  }
};
</script>

<style lang="less" scoped>
.changeAcount {
  height: 100vh;
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
  background-color: #efeff4;
  z-index: 10000;
  h1 {
    text-align: center;
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    flex-wrap: wrap;
    li {
      background-color: white;
      border-bottom: 1px solid #f2f2f2;
      &:nth-of-type(1) {
        margin-bottom: 8px;
      }
      &:nth-of-type(4) {
        margin-bottom: 8px;
      }
      &:nth-of-type(6) {
        margin-bottom: 8px;
      }
      &:nth-of-type(7) {
        margin-bottom: 8px;
      }
      &:nth-of-type(8) {
        margin-bottom: 8px;
        a {
          justify-content: center;
        }
      }
      &:nth-of-type(9) {
        a {
          justify-content: center;
        }
      }
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0 10px;
      align-items: center;
      span {
        height: 40px;
        width: 40px;
        background-color: gray;
        display: block;
      }
      width: 100px;
    }
  }
}
</style>
