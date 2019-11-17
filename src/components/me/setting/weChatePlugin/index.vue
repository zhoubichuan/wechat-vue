<template>
  <div class="weChatePlugin">
    <h1>欢迎使用微信插件</h1>
    <p>这里有微信的新功能，你可以打开来使用</p>
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
      accountSafe: []
    };
  },
  computed: {
    ...mapState('store_me_setting_modules', ['settingWeChatePluginHeader'])
  },
  methods: {
    ...mapMutations({
      setInitPageConfig: 'INIT_PAGE_CONFIG'
    }),
    init () {
      let initPageConfig = {
        header: this.settingWeChatePluginHeader,
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
.weChatePlugin {
  height: 100vh;
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
  background-color: orange;
  z-index: 10000;
  h1 {
    text-align: center;
  }
  p {
    text-align: center;
  }
  ul {
    li {
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
    &:empty::before {
      content: "暂无功能可使用";
      text-align: center;
      display: block;
    }
  }
}
</style>
