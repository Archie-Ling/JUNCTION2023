const state = {
  who: 'user'
}

const mutations = {
  SET_WHO(state, newValue) {
    state.who = newValue
  }
}

// const actions = {
//   isWho({
//     commit
//   }, data) {
//     commit('isWho', data)
//   }
// }

export default {
  namespaced: true,
  state,
  mutations
  // actions
}
