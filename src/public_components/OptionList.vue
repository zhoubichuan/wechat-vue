<template>
  <ul v-show="optionsList"
      class="list"
      @click="cancleShow">
    <li v-for="(item,index) in data"
        :key='index'>{{item.text}}</li>
  </ul>
</template>
<script>
export default {
  data () {
    const data = [
      { text: '拍照' },
      { text: '从手机相册选择' },
      { text: '查看上一张头像' },
      { text: '保存图片' },
      { text: '取消', cancle: true },
    ]
    return {
      data
    }
  }
}
</script>