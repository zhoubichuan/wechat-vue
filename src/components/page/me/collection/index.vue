<template>
  <div class="collection">
    <div class="top">
      <ul>
        <li v-for="(item,index) in collection" :key="index">
          {{item}}
        </li>
      </ul>
    </div>
    <div class="other">
      <ul>
        <li v-for="(item,index) in other" :key="index">
          <img :src="item.img" alt="">
          <p>{{item.title}}
            <span>{{item.time}}</span>
          </p>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  }
};
</script>
<style>
.collection {
  height: 100vh;
  position: absolute;
  top: 40px;
  width: 100%;
  left: 0;
  background-color: white;
  z-index: 1000;
}
</style>

