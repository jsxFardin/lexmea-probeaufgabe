import productActions from './actions'
import productGetters from './getters'
import productMutations from './mutations'
import ProductState from './type';

const productModule = {
  namespaced: true,
  state: (): ProductState => ({
    loading:false,
    header: {},
    filters: [],
    products: []
  }),
  getters:   productGetters,
  actions:   productActions,
  mutations: productMutations
}
  
  export default productModule