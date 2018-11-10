<template>
  <div class="footer-component">
      <ul class="footer">
          <li>
            <router-link to="/message">
                <span>微信</span>
            </router-link>
        </li>
        <li>
            <router-link to="/address">
                <span>通讯录</span>
            </router-link>
        </li>
        <li>
            <router-link to="/find">
                <span>发现</span>
            </router-link>
        </li>
        <li>
            <router-link to="/me">
                <span>我</span>
            </router-link>
        </li>
    </ul>
  </div>
</template>
<style lang="less">
.footer {
  position: fixed;
  height: 40px;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  text-align: center;
  background-color: #f5f5f5;
  z-index: 100;
  li {
    width: 25%;
    text-align: center;

    height: 40px;
  }
  li::before {
    margin: 0 auto;
    content: "";
    width: 20px;
    height: 20px;
    background: url("./footer.jpg") -31px -4px;
    display: block;
  }
  li:nth-of-type(2)::before {
    background-position-x: -110px;
  }
  li:nth-of-type(3)::before {
    background-position-x: -190px;
  }
  li:nth-of-type(4)::before {
    background-position-x: -270px;
  }
}
</style>
