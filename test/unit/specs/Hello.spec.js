import Vue from 'vue'
import Vuex from 'vuex'
import Home from '@/pages/Home'
import {mockStore} from './store'
describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor({store: Vuex.Store(mockStore)}).$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
