<template>
  <footer>
      <router-link to="/message">
          <i></i>
          <span>微信</span>
      </router-link>
      <router-link to="/address">
          <i></i>
          <span>通讯录</span>
      </router-link>
      <router-link to="/find">
          <i></i>
          <span>发现</span>
      </router-link>
      <router-link to="/me">
          <i></i>
          <span>我</span>
      </router-link>
  </footer>
</template>
<style>
footer {
  position: fixed;
  height: 40px;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  text-align: center;
  background-color: lightgrey;
  z-index: 1000;
}
footer a {
  width: 25%;
  line-height: 40px;
}
</style>
