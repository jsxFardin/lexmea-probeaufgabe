const productMutations = {
  SET_PRODUCTS(state, payload) {
    state.products = payload;
  },
  SET_HEADER(state, payload) {
    state.header = payload;
  },
  SET_FILTERS(state, payload) {
    state.filters = payload;
  },
  SET_LOADING(state, payload) {
    state.loading = payload;
  }
}
export default productMutations