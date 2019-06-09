<template>
  <CommonPopPage :op="opPage">
    <div class="emoji">
      <div class="top">
        <ul>
          <li v-for="(item,index) in money" :key="index">
            <img src alt>
            <p class="title">{{item.title}}</p>
          </li>
        </ul>
      </div>
      <div class="middle">
        <h3>推荐表情</h3>
        <ul>
          <li v-for="(item,index) in tenxun" :key="index">
            <img src alt>
            <span class="title">{{item.title}}</span>
            <button>添加</button>
          </li>
        </ul>
      </div>
      <div class="bottom">
        <h3>更多精选</h3>
        <ul>
          <li v-for="(item,index) in server" :key="index">
            <img src alt>
            <span class="title">{{item.title}}</span>
            <button>添加</button>
          </li>
        </ul>
      </div>
    </div>
  </CommonPopPage>
</template>

<script>
import CommonPopPage from "@/common/CommonPopPage";
export default {
  data() {
    return {
      opPage: {
        class: "find",
        header: true,
        headContent: {
          left: "<",
          middle: "支付"
        }
      },
      money: [],
      tenxun: [
        { img: "", title: "小刘鸭第七弹" },
        { img: "", title: "一二第3弹" },
        { img: "", title: "猪年大吉" }
      ],
      server: [
        { img: "", title: "不二呆7" },
        { img: "", title: "肥二7情侣骗" },
        { img: "", title: "阿柴6" },
        { img: "", title: "小猪萌萌" },
        { img: "", title: "蠢萌小黄鸭" },
        { img: "", title: "我叫小可爱3" },
        { img: "", title: "猫咪格里斯3" },
        { img: "", title: "幸福快乐每一天" },
        { img: "", title: "动态泡芙" },
        { img: "", title: "小酱柒日常第一弹" },
        { img: "", title: "鱼蛋" }
      ]
    };
  },
  components: {
    CommonPopPage
  }
};
</script>
<style lang='less' scoped>
.emoji {
  position: absolute;
  top: 40px;
  width: 100%;
  left: 0;
  background-color: white;
  z-index: 1000;
  border-radius: 8px;
  h3 {
    padding: 10px 5px;
  }
  ul {
    li {
      background-color: white;
      border-bottom: 1px solid #f2f2f2;
      height: 30px;
      &:nth-of-type(5) {
        border-bottom: none;
        margin-bottom: 10px;
      }
      button {
        float: right;
      }
    }
  }
}
</style>

