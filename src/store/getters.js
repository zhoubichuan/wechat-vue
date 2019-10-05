export const mode = state => state.current;
export const nameList = state => state.nameList.map((item, index) => ({
    ...item,
    id: index
}))