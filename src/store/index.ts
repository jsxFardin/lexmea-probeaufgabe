import { createStore } from 'vuex'

import productModule from './product';

const store = createStore({
  modules: {
    product: productModule
  }
})

export default store