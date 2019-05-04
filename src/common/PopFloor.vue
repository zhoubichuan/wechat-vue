<template>
  <div class="PopFloor">
      <ul>
          <li v-for="(item,index) in op" :key="index"><span :class="item.ico"></span><span>{{item.title}}</span></li>
      </ul>
  </div>
</template>
<script>
export default {
  props:{
      op:{
          type:Array,
          default:function(){
              return ([
                  {ico:'',title:'发起群聊'},
                  {ico:'',title:'添加朋友'},
                  {ico:'',title:'扫一扫'},
                  {ico:'',title:'收付款'},
              ])
          }
      }
  }
}
</script>
<style lang="less" scoped>
.PopFloor{
    position: absolute;
    background:black;
    color: white;
    border-radius: 5px;
    right: 0;
    ul{
        li{
            padding:8px 15px;
            span{
                &:nth-of-type(2){
                    margin-left: 3px;
                }
            }
        }
    }
}
</style>


