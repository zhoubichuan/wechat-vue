<template>
  <div class="account-safe">
    <ul>
      <li v-for="(item,index) in accountSafe"
          :key="index">
        <span>{{item.name}}</span>
        <span>{{item.text}}</span>
        <span>{{item.ico}}</span>
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
        { name: "微信号", text: "zbc159x", ico: ">" },
        { name: "手机号", text: "18064034145", ico: ">" },
        { name: "微信密码", text: "已设置", ico: ">" },
        { name: "声音锁", text: "未设置", ico: ">" },
        { name: "应急联系人", text: "", ico: ">" },
        { name: "登录设备管理", text: "", ico: ">" },
        { name: "更多安全设置", text: "", ico: ">" },
        { name: "帮朋友冻结微信", text: "", ico: ">" },
        { name: "微信安全中心", text: "", ico: ">" }
      ],
      tips:
        "如果遇到账号信息泄露，忘记密码，诈骗等账号安全问题，可前往微信安全中心"
    };
  }, computed: {
    ...mapState(['isShowHeader', 'isShowFooter']),
    ...mapState('store_me_setting_modules', ['settingAccountSafeHeader'])
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
      this.setHeaderConfig(this.settingAccountSafeHeader)
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
      span {
        &:nth-of-type(1) {
          text-align: left;
        }
        &:nth-of-type(3) {
          text-align: right;
          font-size: 20px;
          color: gray;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
