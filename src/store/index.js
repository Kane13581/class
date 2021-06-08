import { createStore } from 'vuex'
import store from './clientsStore'
import store1 from './Services1'
import store2 from './Services2'
import store3 from './Services3'
import store4 from './Services4'
import store5 from './Services5'
import store6 from './Services6'
import store7 from './Services7'
import store8 from './Services8'
import store9 from './Services9'

export default createStore({
  state: {
    clients: store.clients,
    services1: store1.services1,
    services2: store2.services2,
    services3: store3.services3,
    services4: store4.services4,
    services5: store5.services5,
    services6: store6.services6,
    services7: store7.services7,
    services8: store8.services8,
    services9: store9.services9,
  },
  getters: {
    clients: (state) => {
      return state.clients;
    },
    services1: (state) => {
      return state.services1;
    },
    services2: (state) => {
      return state.services2;
    },
    services3: (state) => {
      return state.services3;
    },
    services4: (state) => {
      return state.services4;
    },
    services5: (state) => {
     return state.services5
    },
    services6: (state) => {
      return state.services6
    },
    services7: (state) => {
      return state.services7
    },
    services8: (state) => {
      return state.services8
    },
    services9: (state) => {
      return state.services9
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
