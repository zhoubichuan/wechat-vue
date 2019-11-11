import * as types from "./mutation-types";

export default {
  // 控制头部是否显示
  [types.SHOW_OR_HIDE_HEADER](state, isShowHeader) {
    state.isShowHeader = isShowHeader
  },
  // 控制尾部是否显示
  [types.SHOW_OR_HIDE_FOOTER](state, isShowFooter) {
    state.isShowFooter = isShowFooter
  },
  // 头部配置参数
  [types.HEADER_CONFIG](state, header) {
    state.header = header
  },

};