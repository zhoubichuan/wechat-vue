<template>
  <CommonPage :op="opPage">
    <Search @click="popShow"/>
    <ClassList/>
    <NameList/>
    <router-view></router-view>
  </CommonPage>
</template>
<script>
import CommonPage from "@/common/CommonPage";
import Search from "@/common/Search";
import ClassList from "@/common/address/ClassList";
import NameList from "@/common/address/NameList";
export default {
  data() {
    return {
      opPage: {
        class: "address",
        header: true,
        footer: true,
        headContent: {
          middle: "通讯录",
          right: "+"
        }
      }
    };
  },
  components: {
    CommonPage,
    Search,
    ClassList,
    NameList
  },
  methods: {
    popShow() {
      this.opPage.popshow = true;
    }
  }
};
</script>

<style lang="less">
.address {
  background-color: #efeff4;
  margin-top: 20px;
  height: calc(100vh - 50px);
}
</style>