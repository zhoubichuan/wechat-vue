<template>
  <div class="outLogin">
    <ul>
      <li v-for="(item,index) in outLogin"
          :key="index"
          @click="cancel">
        <p>{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      outLogin: [
        { name: "退出后不会删除任何历史数据，下次登录依然可以使本账号。" },
        { name: "退出登录" },
        { name: "取消" }
      ]
    };
  },
  computed: {
    ...mapState('store_me_setting_modules', ['settingOutLoginHeader'])
  },
  methods: {
    ...mapMutations({
      setInitPageConfig: 'INIT_PAGE_CONFIG'
    }),
    cancel: function (e) {
      if (e.target.textContent == "取消") {
        history.go(-1);
      }
    },
    init () {
      let initPageConfig = {
        header: this.settingOutLoginHeader,
      }
      this.setInitPageConfig(initPageConfig)
    }
  },
  created () {
    this.init()
  },
};
</script>

<style lang="less" scoped>
.outLogin {
  height: 100vh;
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
  ul {
    z-index: 10001;
    position: absolute;
    bottom: 40px;
    left: 0;
    li {
      background: white;
      text-align: center;
      padding: 10px 0;
      &:nth-of-type(1) {
        p {
          font-size: 10px;
          -webkit-transform: scale(0.8);
          white-space: nowrap;
        }
        padding: 10px 0;
        border-bottom: 1px solid gray;
      }
      &:nth-of-type(2) {
      }
      &:nth-of-type(3) {
        margin-top: 5px;
      }
    }
  }
}
</style>
