<template>
  <div class="account-safe">
    <ul>
      <li v-for="(item,index) in accountSafe"
          :key="index">
        <span>{{item.name}}</span>
        <span :class="item.onoff"></span>
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
        { name: "新消息通知", onoff: "open" },
        { name: "语言和视频通话提醒", onoff: "open" },
        { name: "通知显示消息详情", onoff: "open" },
        { name: "声音", onoff: "open" },
        { name: "震动", onoff: "open" }
      ]
    };
  }, computed: {
    ...mapState(['isShowHeader', 'isShowFooter']),
    ...mapState('store_me_setting_modules', ['settingNewMessageNoteHeader'])
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
      this.setHeaderConfig(this.settingNewMessageNoteHeader)
    }
  },
  created () {
    this.init()
  }
};
</script>

<style lang="less" scoped>
.account-safe {
  height: 100vh;
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
  background-color: #efeff4;
  z-index: 10000;
  ul {
    li {
      background-color: white;
      border-bottom: 1px solid #f2f2f2;
      height: 40px;
      line-height: 40px;
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
      flex-direction: row;
      justify-content: space-between;
      padding: 0 10px;
      align-items: center;
      span {
        &:nth-of-type(1) {
          text-align: left;
        }
        &:nth-of-type(2) {
          position: relative;
          width: 50px;
          background: gray;
          height: 25px;
          border-radius: 25px;
          &::before {
            content: "";
            height: 23px;
            width: 23px;
            background: gray;
            position: absolute;
            right: 1px;
            top: 1px;
            border-radius: 50%;
          }
        }
      }
      .open {
        background: green !important;
      }
    }
  }
}
</style>
