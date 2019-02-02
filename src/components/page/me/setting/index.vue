<template>
  <div class="setting">
    <ul>
      <li v-for="(item,index) in setting" :key="index">
        <p>{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      setting: [
        { title: "账号安全", img: ">" },
        { title: "新消息通知", img: ">" },
        { title: "隐私", img: ">" },
        { title: "通用", img: ">" },
        { title: "帮助与反馈", img: ">" },
        { title: "关于微信", img: ">" },
        { title: "插件", img: ">" },
        { title: "切换账号", img: ">" },
        { title: "退出登录", img: ">" }
      ]
    };
  }
};
</script>
<style lang='less'>
.setting {
  height: 100vh;
  position: absolute;
  top: 40px;
  width: 100%;
  left: 0;
  background-color: #efeff4;
  z-index: 1000;
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
        text-align: center;
      }
      &:nth-of-type(9) {
        text-align: center;
      }
    }
  }
}
</style>

