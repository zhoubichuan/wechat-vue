import * as types from "./mutation-types";

export default {
  [types.SET_SINGER](state, singer) {
    state.singer = singer;
  },
  change_header_data(state,changeData){
    let data
    if(changeData.includes('find')){
      data={
          middle: "发现"
      }
    }else if(changeData.includes('message')){
      data= {
        style: "color:black ;background-color: white;",
        left: "",
        middle: "微信(18)",
        right: {
          ico: "more"
        }
      }
    }else if(changeData.includes('address')){
      data={
          middle: "通讯录",
          right: {
            ico: "add-friend"
        }
      }
    }else{
      data={
        right: {
          ico: "camera"
      }
    }
    }
    state.headerData=data
  }
};