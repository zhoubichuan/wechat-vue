import * as types from "./mutation-types";

export const mutation = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer;
  }
};