import { createStore } from 'vuex'
import store from './clientsStore'
import serviceM from './Services1'

export default createStore({
  state: {
    clients: store.clients,
    servicesM: serviceM.services1,
  },
  getters: {
    clients: (state) => {
      return state.clients;
    },
    servicesM: (state) => {
      return state.servicesM
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
