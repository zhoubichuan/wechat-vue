export default {
  namespaced: true,
  state: {
    moneyBagHeader: {
      left: '<',
      middle: '支付',
      right: {
        text: '...'
      }
    }
  },
  getters: {},
  mutations: {},
  actions: {
    get_tencentPayService({
      commit
    }, {
      axios,
      ...data
    }) {
      return new Promise((resolve, reject) => {
        this.$axios.get('api/me/pay/tencentPayService').then(
          res => {
            resolve(res)
          },
          rej => {
            reject(rej)
          }
        )
      })
    },
    get_thirdPartyPayService({
      commit
    }, {
      axios,
      ...data
    }) {
      return new Promise((resolve, reject) => {
        this.$axios.get('api/me/pay/thirdPartyPayService').then(
          res => {
            resolve(res)
          },
          rej => {
            reject(rej)
          }
        )
      })
    }
  }
}