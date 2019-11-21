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
    get_cardBagList({
      commit
    }, {
      axios,
      ...data
    }) {
      return new Promise((resolve, reject) => {
        axios.get('api/me/pay/cardBagList').then(
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