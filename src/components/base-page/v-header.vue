<template>
  <div class="header-component">
      <div class="header">
        <div  @click="goBack">
          <slot name="cancel"  >
              <p class="cancel"></p>
          </slot>
        </div>
        <slot name="title">
            <p class="title"></p>
        </slot>
        <slot name="more">
            <p class="more"></p>
        </slot>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goBack() {
      this.$parent.go();
    }
  }
};
</script>

<style lang="less">
.header-component {
  .header {
    position: fixed;
    width: 100%;
    color: white;
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    line-height: 40px;
    padding: 0 15px;
    box-sizing: border-box;
    top: 0;
  }
}
.header-component:before {
  content: "";
  height: 40px;
}
</style>
