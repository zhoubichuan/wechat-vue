<template>
  <CommonPage :op="opPage">
    <div class="setting-and-tips">
      <ul>
        <li>
          <label for="备注名">备注名</label>
          <input type="text" value="123412341" />
        </li>
        <li>
          <label for="标签">标签</label>
          <input type="text" value="123412341" />
        </li>
        <li>
          <label for="电话号码">电话号码</label>
          <input type="text" value="123412341" />
        </li>
        <li>
          <label for="描述">描述</label>
          <input type="text" value="123412341" />
        </li>
      </ul>
    </div>
  </CommonPage>
</template>

<script>
import CommonPage from "@/public_components/CommonPage";
import Search from "@/public_components/Search";
export default {
  data() {
    return {
      settingAndTipsData: [
        { time: "1月", img: ["", "", ""] },
        { time: "2月", img: ["", "", ""] },
        { time: "3月", img: ["", "", ""] },
        { time: "4月", img: ["", "", ""] },
        { time: "5月", img: ["", "", ""] },
        { time: "6月", img: ["", "", ""] },
        { time: "7月", img: ["", "", ""] }
      ],
      opPage: {
        class: "find",
        header: true,
        headContent: {
          left: "取消",
          middle: "设置备注和标签",
          right: "完成"
        }
      }
    };
  },
  components: {
    CommonPage,
    Search
  }
};
</script>
<style lang='less' scoped>
.setting-and-tips {
  top: 40px;
  width: 100%;
  left: 0;
  background-color: #efeff4;
  z-index: 1000;
  margin-top: 55px;
  ul {
    li {
      label {
        display: block;
        margin-top: 15px;
        margin-left: 20px;
      }
      input {
        width: 100%;
        height: 30px;
        color: black;
        border: none;
        text-indent: 20px;
      }
    }
  }
}
</style>

