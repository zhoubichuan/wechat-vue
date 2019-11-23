export const mode = state => state.current;
export const goBack = () => {
  window.history.go(-1);
}