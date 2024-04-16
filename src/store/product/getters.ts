const productGetters = {
    getProduts(state) { return state.products },
    getHeader(state) { return state.header },
    getFilters(state) { return state.filters },
    getProductById: (state) => (id) => {
        return state.products.find(product => product.id == id);
    },
}
  
export default productGetters