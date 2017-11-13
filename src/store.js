import Vue from 'vue'
import Vuex from 'vuex'

import { getSite } from './api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    gid: 1000,
    site: {
      name: 'awesome site',
      config: {},
      children: []
    },
    currentPage: {},
    widgets: [{
      name: '一段文字',
      icon: '',
      placeholder: {
        type: 'paragraph',
        content: {
          title: '标题',
          subTitle: '小标题',
          detail: '内容。。。'
        },
        config: {}
      }
    }]
  },

  mutations: {
    assignState (state, obj) {
      Object.assign(state, obj)
    },
    sortWidget (state, { array, oldIndex, newIndex }) {
      let target = array[oldIndex]
      array.splice(oldIndex, 1)
      array.splice(newIndex, 0, target)

    },
    addWidget ({ widgets, gid }, { section, widgetType, newIndex }) {
      const widget = widgets.find(widget => widget.placeholder.type === widgetType)
      if (widget) {
        const editType = 'edit-' + widget.placeholder.type
        store.commit('incrementGid')
        section.splice(newIndex, 0, { ...widget.placeholder, editType, id: gid })
      }
    },
    incrementGid (state) {
      ++state.gid
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
