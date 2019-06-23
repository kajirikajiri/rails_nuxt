import api from '../plugins/axios'
export const state = () => ({
  value: 'myvalue'
})

export const getters = {
  getterValue: state => {
    return state.value
  }
}

export const mutations = {
  updateValue: (state, payload) => {
    state.value = payload
  }
}

export const actions = {
  async updateActionValue({ commit }) {
    const result = await api.get('/examples')
    commit('updateValue', result)
  }
}
