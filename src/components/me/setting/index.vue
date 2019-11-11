<template>
  <div>
    <div class="setting-part">
      <div class="setting">
        <ul>
          <li v-for="(item,index) in setting"
              :key="index">
            <router-link :to="'/' + item.route">
              <span>{{item.title}}</span>
              <span v-if="item.img">{{item.img}}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      opPage: {
        class: "find",
        header: true,
        headContent: {
          left: "<",
          middle: "支付"
        }
      },
      setting: [
        { title: "账号安全", img: ">", route: "meSettingAccountSafe" },
        { title: "新消息通知", img: ">", route: "meSettingNewMessageNote" },
        { title: "隐私", img: ">", route: "meSettingPrivacy" },
        { title: "通用", img: ">", route: "meSettingCommon" },
        { title: "帮助与反馈", img: ">", route: "meSettingHelpAndFeedback" },
        { title: "关于微信", img: ">", route: "meSettingAboutWeChate" },
        { title: "插件", img: ">", route: "meSettingWeChatePlugin" },
        { title: "切换账号", route: "meSettingChangeAcount" },
        { title: "退出登录", route: "meSettingOutLogin" }
      ]
    };
  },

  computed: {
    ...mapState(['isShowHeader', 'isShowFooter']),
    ...mapState('store_me_setting_modules', ['settingHeader'])
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
      this.setHeaderConfig(this.settingHeader)
    }
  },
  created () {
    this.init()
  }
};
</script>
<style lang='less'>
.setting-part {
  position: absolute;
  top: 40px;
  width: 100%;
  left: 0;
  background-color: #efeff4;
  z-index: 1000;
  .setting {
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
        a {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 0 10px;
          span {
            &:nth-of-type(1) {
              text-align: left;
            }
            &:nth-of-type(2) {
              text-align: right;
              font-size: 20px;
              color: gray;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
}
</style>

