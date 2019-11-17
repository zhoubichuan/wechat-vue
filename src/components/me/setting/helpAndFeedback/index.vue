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
        {
          name: "安卓手机微信7.0.0及以上版本如何开启和关闭微信消息提醒",
          text: "",
          ico: ">"
        },
        { name: "微信如何开启或关闭新消息通知？", text: "", ico: ">" },
        {
          name: "微信提示数据文件发现损坏，但修复失败怎么办？",
          text: "",
          ico: ">"
        },
        { name: "盆友圈发表异常问题", text: "", ico: ">" },
        { name: "如何迁移/备份微信聊天记录？", text: "", ico: ">" },
        { name: "手机号/QQ号绑定与解绑微信问题", text: "", ico: ">" },
        { name: "微信通讯录添加朋友问题", text: "", ico: ">" }
      ]
    };
  },
  computed: {
    ...mapState('store_me_setting_modules', ['settingHelpAndFeedbackHeader'])
  },
  methods: {
    ...mapMutations({
      setInitPageConfig: 'INIT_PAGE_CONFIG'
    }),
    init () {
      let initPageConfig = {
        header: this.settingHelpAndFeedbackHeader,
      }
      this.setInitPageConfig(initPageConfig)
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
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
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
