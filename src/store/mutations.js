import * as types from "./mutation-types";

export default {
  // 控制头部是否显示
  [types.SHOW_OR_HIDE_HEADER](state, isShowHeader) {
    state.isShowHeader = isShowHeader
  },
  // 控制中部是否显示
  [types.SHOW_OR_HIDE_COMMONPAGE](state, isShowCommonPage) {
    state.isShowCommonPage = isShowCommonPage
  },
  // 控制尾部是否显示
  [types.SHOW_OR_HIDE_FOOTER](state, isShowFooter) {
    state.isShowFooter = isShowFooter
  },
  // 头部配置参数
  [types.HEADER_CONFIG](state, header) {
    state.header = header
  },
  // 是否显示搜索
  [types.SHOW_OR_HIDE_SEARCH](state, isShowSearch) {
    state.isShowSearch = isShowSearch
  },
  // 是否显示搜索弹框
  [types.SHOW_OR_HIDE_SEARCH_DIALOG](state, isShowSearchDialog) {
    state.isShowSearchDialog = isShowSearchDialog
  },
  // 页面初始化配置
  [types.INIT_PAGE_CONFIG](state, initPageConfig) {
    let config = {
      isShowHeader: true,
      isShowCommonPage: true,
      isShowFooter: false,
      isShowSearch: false,
      isShowSearchDialog: false,
    }
    state.isShowHeader = config.isShowHeader
    state.isShowCommonPage = config.isShowCommonPage
    state.isShowFooter = config.isShowFooter
    state.isShowSearch = config.isShowSearch
    state.isShowSearchDialog = config.isShowSearchDialog

    initPageConfig.isShowHeader !== undefined && (state.isShowHeader = initPageConfig.isShowHeader)
    initPageConfig.isShowCommonPage !== undefined && (state.isShowCommonPage = initPageConfig.isShowCommonPage)
    initPageConfig.isShowFooter !== undefined && (state.isShowFooter = initPageConfig.isShowFooter)
    initPageConfig.header !== undefined && (state.header = initPageConfig.header)
    initPageConfig.isShowSearch !== undefined && (state.isShowSearch = initPageConfig.isShowSearch)
    initPageConfig.isShowSearchDialog !== undefined && (state.isShowSearchDialog = initPageConfig.isShowSearchDialog)
  },
  [types.SCROLL_PAGE](state, scroll) {
    state.scroll = scroll || true
  }
};