<template>
  <div class="footer-component">
      <ul class="footer">
          <li>
            <router-link to="/">
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
    &:nth-of-type(1) {
      a {
        &:before {
          margin: 0 auto;
          content: "";
          width: 35px;
          height: 20px;
          background: url("../page/address/address.png") -30px -533px;
          display: block;
          margin-left: 29px;
        }
      }
      .router-link-active {
        &:before {
          background: url("./footer.jpg") -31px -4px;
        }
      }
    }
    &:nth-of-type(2) {
      a {
        &:before {
          margin: 0 auto;
          content: "";
          width: 20px;
          height: 20px;
          background: url("./footer.jpg")-110px -4px;
          display: block;
        }
      }
      .router-link-active {
        &:before {
          background: url("../page/address/address.png") -108px -533px;
        }
      }
    }
    &:nth-of-type(3) {
      a {
        &:before {
          margin: 0 auto;
          content: "";
          width: 20px;
          height: 20px;
          background: url("./footer.jpg") -190px -4px;
          display: block;
        }
      }
      .router-link-active {
        &:before {
          background: url("../page/find/find.png") -189px -533px;
        }
      }
    }
    &:nth-of-type(4) {
      a {
        &:before {
          margin: 0 auto;
          content: "";
          width: 20px;
          height: 20px;
          background: url("./footer.jpg") -270px -4px;
          display: block;
        }
      }
      .router-link-active {
        &:before {
          background: url("../page/me/me.png") -270px -533px;
        }
      }
    }
    .router-link-active {
      span {
        color: rgba(31, 173, 21, 1);
      }
    }
  }
}
</style>
