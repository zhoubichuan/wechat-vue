<template>
  <div class="card">
    <h3>{{data.title}}</h3>
    <ul>
      <li v-for="(item,index) in data.content"
          :key="index">
        <img :src="require(`@/assets/image/${item.ico}.svg`)"
             alt>
        <p class="title">{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['data']
};
</script>
<style lang="less" scoped>
.card {
  border-radius: 8px;
  background-color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  h3 {
    padding: 10px 5px;
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    li {
      height: 100px;
      width: 33.33%;
      border: 1px solid #f2f2f2;
      box-sizing: border-box;
      text-align: center;
      img {
        width: 40px;
        margin-top: 20px;
      }
      p {
        text-align: center;
        margin-top: 10px;
      }
    }
  }
}
</style>


