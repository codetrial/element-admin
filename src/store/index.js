import Vue from 'vue'
import Vuex from 'vuex'

import * as service from '@/services'

import example from './modules/example'

Vue.use(Vuex)

function initialState() {
  return {
    user: {
      id: 0,
      name: '',
      roles: []
    }
  }
}

export default new Vuex.Store({
  state: initialState(),
  mutations: {
    get(state, payload) {
      state.user = payload.data || {}
    }
  },
  actions: {
    async getUser({ commit }, username) {
      const data = await service.getUser(username)

      commit({
        type: 'get',
        data
      })
    },

    resetUser({ commit }) {
      const { user } = initialState()
      commit({
        type: 'get',
        data: user
      })
    }
  },

  modules: {
    example
  }
})
