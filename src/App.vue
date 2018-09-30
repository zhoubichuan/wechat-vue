<template>
  <div id="app">
    <header class="header">
        <span class="cancle" >取消</span>
        <h1 class="title">发红包</h1>
        <span class="more">...</span>
    </header>
    <router-view/>
    <footer class="footer">
        <p>未领取的红包，将于24小时后发起退款</p>
   </footer>
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>
