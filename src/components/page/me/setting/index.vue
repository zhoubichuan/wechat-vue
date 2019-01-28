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
<style>
.setting {
  height: 100vh;
  position: absolute;
  top: 40px;
  width: 100%;
  left: 0;
  background-color: white;
  z-index: 1000;
}
</style>

