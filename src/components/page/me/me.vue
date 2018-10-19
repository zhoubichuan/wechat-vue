<template>
  <div class="me">
    <div class="top">
      <div class="left">
        <img src="http://www.cdhdky.com/images/ttt.jpg" alt="">
        <div>
          <p>会跑的鸡腿</p>
          <p>微信号：zbc159x</p>
        </div>
      </div>
      <div class="right">
        <img src="" alt="">
        <img src="" alt="">
      </div>
    </div>
    <div class="application">
      <ul>
        <li><img src="http://www.cdhdky.com/images/ttt.jpg" alt=""><p>钱包</p><img src="" alt=""></li>
        <li><img src="http://www.cdhdky.com/images/ttt.jpg" alt=""><p>收藏</p><img src="" alt=""></li>
        <li><img src="http://www.cdhdky.com/images/ttt.jpg" alt=""><p>相册</p><img src="" alt=""></li>
        <li><img src="http://www.cdhdky.com/images/ttt.jpg" alt=""><p>卡包</p><img src="" alt=""></li>
        <li><img src="http://www.cdhdky.com/images/ttt.jpg" alt=""><p>表情</p><img src="" alt=""></li>
        <li><img src="http://www.cdhdky.com/images/ttt.jpg" alt=""><p>设置</p><img src="" alt=""></li>
      </ul>
    </div>
  </div>
</template>
<style lang="less">
.me {
  .top {
    margin-top: 10px;
    background-color: white;
    .left {
      display: flex;
      flex-direction: row;
      img {
        width: 40px;
        height: 40px;
      }
      div {
        margin-left: 10px;
      }
    }
    .right {
    }
  }
  .application {
    ul {
      margin-top: 20px;
      li:first-child {
        margin-bottom: 20px;
        border-bottom: none;
      }
      li {
        display: flex;
        flex-direction: row;
        padding: 5px 0;
        background-color: white;
        border-bottom: 1px solid gray;
        img {
          width: 30px;
          height: 30px;
        }
        p {
          margin-left: 10px;
        }
      }
      li:last-child {
        margin-top: 20px;
        border-bottom: none;
      }
    }
  }
}
</style>

