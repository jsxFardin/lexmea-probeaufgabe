import axios from 'axios';

const productActions = {
    fetchProducts({ commit }) {
      
      commit('SET_LOADING', true);

      let url = 'https://gist.githubusercontent.com/benfranke/c33280a8df5f4f9db2e63ad45cab26a4/raw/f3ad6c00ff520c2667305103d5705bcbb57a7778/products.json';
      axios.get(url)
        .then(response => {
          const { data } = response;
          commit('SET_PRODUCTS', data.products);
          commit('SET_HEADER', data.header);
          commit('SET_FILTERS', data.filters);
          commit('SET_LOADING', false);
        })
        .catch(error => {
          // commit('setError', error);
          commit('SET_LOADING', false);
        });
    }
  }
  
  export default productActions;