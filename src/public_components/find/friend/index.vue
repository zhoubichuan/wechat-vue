<template>
  <CommonPage :op="opPage">
    <div class="friend">
      <ul class="friend-message-content">
        <li class="friend-message" v-for="(item,index) in message" :key="index">
          <img class="photo" src="img/p1.e9d98afd.svg"/>
          <div class="message-content">
            <p class="friend-name">{{item.name}}</p>
            <p class="friend-content">{{item.content}}</p>
            <img v-for="(image,index) in item.img" :key="index" :src="image" alt="">
          </div>
        </li>
      </ul>
    </div>
  </CommonPage>
</template>

<script>
import CommonPage from "@/public_components/CommonPage";
export default {
  data() {
    return {
      message: [
        { name: "张飞", content: "这把国刀，他“100亿也不卖”",img:["https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3162765812,3935177966&fm=173&app=49&f=JPEG?w=218&h=146&s=A705B0440218187000392FBB03008086","https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3162765812,3935177966&fm=173&app=49&f=JPEG?w=218&h=146&s=A705B0440218187000392FBB03008086"] },
        { name: "关羽", content: "中国股市，那些20年的老股民，现在都怎么样了？谁来为散户买单？",img:["https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3162765812,3935177966&fm=173&app=49&f=JPEG?w=218&h=146&s=A705B0440218187000392FBB03008086","https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3162765812,3935177966&fm=173&app=49&f=JPEG?w=218&h=146&s=A705B0440218187000392FBB03008086"]},
        { name: "刘备", content: "误认为是“虾”，花180块，买了5斤回家，煮完一吃“惊喜满满”" ,img:["https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3162765812,3935177966&fm=173&app=49&f=JPEG?w=218&h=146&s=A705B0440218187000392FBB03008086","https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3162765812,3935177966&fm=173&app=49&f=JPEG?w=218&h=146&s=A705B0440218187000392FBB03008086"]},
        { name: "曹操", content: "宝马车内一对男女疑似做不雅举止，惊呆路人……官方通报↘" ,img:["https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3162765812,3935177966&fm=173&app=49&f=JPEG?w=218&h=146&s=A705B0440218187000392FBB03008086","https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3162765812,3935177966&fm=173&app=49&f=JPEG?w=218&h=146&s=A705B0440218187000392FBB03008086"]},
        { name: "刘表", content:"这场超强台风打破“次元壁”，日本人为何感谢中国海军？"},
        { name: "诸葛亮", content:"刘翔前妻葛天近照瘦成纸片人，穿人字拖逛菜市超接地气",img:["https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3162765812,3935177966&fm=173&app=49&f=JPEG?w=218&h=146&s=A705B0440218187000392FBB03008086","https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3162765812,3935177966&fm=173&app=49&f=JPEG?w=218&h=146&s=A705B0440218187000392FBB03008086"]},
        { name: "曹真", content: "团伙雇学生散“黄色卡片”色诱，警方捣两处涉黄窝点，抓多名男女" }
      ],
      opPage: {
        class: "find",
        header: true,
        headContent: {
          left: "<",
          middle: "",
          right:'相机'
        }
      }
    };
  },
  components: {
    CommonPage
  }
};
</script>
<style lang='less' scoped>
.friend {
  position: absolute;
  top: 80px;
  width: 100%;
  left: 0;
  background-color: white;
  z-index: 1000;
  .friend-message-content{
    padding: 0 10px;
    .friend-message{
      margin-top: 10px;
      display:flex;
      flex-direction:row;
      .photo{
        width:30px;
        padding-right: 10px;
      }
      .message-content{
        padding: 0 10px;
        .friend-name{
          font-weight: bold;
          font-size: 14px;
        }
        img{
          width: 33.65%;
          padding-right: 10px;
        }
      }
    }
  }
}
</style>

