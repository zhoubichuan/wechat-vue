<template>
  <CommonPopPage :op="opPage">
    <div class="collection">
      <div class="top">
        <ul>
          <li v-for="(item,index) in collection" :key="index">{{item}}</li>
        </ul>
      </div>
      <div class="other">
        <ul>
          <li v-for="(item,index) in other" :key="index">
            <img :src="item.img" alt>
            <p>
              {{item.title}}
              <span>{{item.time}}</span>
            </p>
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
      collection: [
        "图片与视屏",
        "链接",
        "文件",
        "音乐",
        "聊天记录",
        "语音",
        "笔记",
        "位置"
      ],
      other: [
        {
          img: "",
          tips: "老衲爱飘柔",
          time: "2018/11/4"
        },
        {
          img: "",
          tips: "老衲爱飘柔",
          time: "2018/11/4"
        },
        {
          img: "",
          tips: "老衲爱飘柔",
          time: "2018/11/4"
        },
        {
          img: "",
          tips: "老衲爱飘柔",
          time: "2018/11/4"
        },
        {
          img: "",
          tips: "老衲爱飘柔",
          time: "2018/11/4"
        }
      ]
    };
  },
  components: {
    CommonPopPage
  }
};
</script>
<style lang='less' scoped>
.collection {
  position: absolute;
  top: 40px;
  width: 100%;
  left: 0;
  background-color: white;
  z-index: 1000;
}
</style>

