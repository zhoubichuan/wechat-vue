<template>
  <div>
    <vheader>
      <p slot="title">通讯录</p>
      <p slot="more">人像</p>
    </vheader>
    <div class="address-component">
      <div class="address">
        <div class="search">
          <input type="text"/>
        </div>
        <div class="">
          <ul>
            <li>
              <img src="" alt="">
              <p>新的朋友</p>
            </li>
            <li>
              <img src="" alt="">
              <p>群聊</p>
            </li>
            <li>
              <img src="" alt="">
              <p>标签</p>
            </li>
            <li>
              <img src="" alt="">
              <p>公众号</p>
            </li>
          </ul>
        </div>
        <div class="peopel">
          <ul>
            <li><img src="" alt=""><p class="name">aaaa</p></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vheader from "@/components/base-page/v-header.vue";
export default {
  data() {
    return {};
  },
  components: {
    vheader
  }
};
</script>

