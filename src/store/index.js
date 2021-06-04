import { createStore } from 'vuex'
import store from './countryStore'

export default createStore({
  state: {
    clients: store.clients
  },
  getters: {
    clients: (state) => {
      return state.clients;
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
