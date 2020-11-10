export default {
  namespaced: true,
  state: {
    emojiHeader: {
      left: "<",
      middle: "朋友表情|更多表情"
    }
  },
  actions: {
    get_moreExcitingExpression(state, {
      axios
    }) {
      return new Promise((resolve, reject) => {
        this.$axios.get("api/me/emoji/moreExcitingExpression").then(
          res => {
            resolve(res)
          },
          rej => {
            reject(rej)
          }
        )
      })
    },
    get_recommendedExpression(state, {
      axios
    }) {
      return new Promise((resolve, reject) => {
        this.$axios.get("api/me/emoji/recommendedExpression").then(
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