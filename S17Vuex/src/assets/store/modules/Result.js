const state = {
  result: 0
};
const getters = {
  tenResult: state => {
    return state.result * 10;
  },
  nameResult: state => {
    return state.result + " Name Product"
  }
};
const mutations = {
  add(state) {
    return state.result++;
  },
  sub(state) {
    return state.result--;
  }
};
const actions = {
  add: ({commit}) => {
    commit("add");
  },
  asyncSub: ({commit}) => {
    setTimeout(() => {
      commit("sub")
    }, 2000);
  }
};
export default {
  state, getters, mutations, actions
}
