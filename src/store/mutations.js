import * as types from "./mutation-types";

export default {
  [types.HEADER_CONFIG](state,header){
    state.header=header
  }
};