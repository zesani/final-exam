require('es6-promise').polyfill()
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let vuex = {
  strict: true,
  state: {
    phoneBooks: 'Vuex'
  },
  getters: {
    phoneBooks: (state) => state.phoneBooks
  },
  mutations: {
    addPhoneBook: (state, phoneBooks) => {
      state.phoneBooks.push(phoneBooks)
    }
  },
  actions: {
    addPhoneBook ({commit}, phoneBooks) {
      commit('addPhoneBook', phoneBooks)
    }
  }
}
export let store = new Vuex.Store(vuex)
export let mockStore = vuex
