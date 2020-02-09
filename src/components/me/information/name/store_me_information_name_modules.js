export default {
  namespaced: true,
  state: {
    meInformationNameHeader: {
      left:{text:'取消'} ,
      middle: '设置名字',
      right: {
        disabled:true,
        type:'button',
        text: '完成'
      }
    },
    name: "",
  },
  mutations: {
    handleHeaderRight(state, val) {
      if(!state.meInformationNameHeader.right.disabled) localStorage.name = state.name
      state.meInformationNameHeader.right.disabled=true
    },
    changeName(state,{name,disabled}){
      state.name=name
      state.meInformationNameHeader.right.disabled=disabled
    }
  }
}