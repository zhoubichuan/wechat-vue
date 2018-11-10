<template>
  <div class="header-component">
      <div class="header">
        <slot name="cancel" >
            <P class="cancel"></P>
        </slot>
        <slot name="title">
            <P class="title">我</P>
        </slot>
        <slot name="more">
            <P class="more"></P>
        </slot>
    </div>
  </div>
</template>
<script>
export default {
  methods: {}
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
