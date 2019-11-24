export default {
  namespaced: true,
  state: {
    cardBagHeader: {
      left: '<',
      middle: '卡包',
      right: {
        text: '...'
      }
    }
  },
  actions: {
    get_cardBagList(state, {
      axios
    }) {
      return new Promise((resolve, reject) => {
        axios.get('api/me/carBag/cardBagList').then(
          res => {
            resolve(res)
          },
          rej => {
            reject(rej)
          }
        )
      })
    },
  }
}