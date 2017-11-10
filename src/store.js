import Vue from 'vue'
import Vuex from 'vuex'

import { getSite } from './api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    site: {
      name: 'awesome site',
      config: {},
      children: []
    },
    currentPage: {}
  },

  mutations: {
    assignState (state, obj) {
      Object.assign(state, obj)
    }
  },

  actions: {
    async getSite ({ commit }, id) {
      const site = await getSite(id)
      commit('assignState', { site })
      commit('assignState', { currentPage: site.children[0] })
    }
  }
})

export default store
