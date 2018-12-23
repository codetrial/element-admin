import * as service from '@/services'

export const example = {
  namespaced: true,
  state: {
    loading: true,
    exampleList: {
      page: {
        order: 'descending',
        orderBy: 'id',
        pageNo: 1,
        pageSize: 20,
        total: 0
      },
      list: []
    }
  },
  mutations: {
    loading(state, loading) {
      state.loading = loading
    },

    search(state, payload) {
      state.exampleList = payload.data
    }
  },
  actions: {
    async searchExampleList({ commit }, param) {
      commit('loading', true)

      try {
        const data = await service.getExampleList(param)

        commit({
          type: 'search',
          data
        })
      } catch (err) {
        throw err
      } finally {
        commit('loading', false)
      }
    }
  }
}

export default example
