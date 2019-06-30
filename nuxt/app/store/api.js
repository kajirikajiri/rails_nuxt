import api from '../plugins/axios'
export const state = () => ({
  value: 'myvalue',
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
  },
  async sign_up(context,{email,password}){
    let result
    try {
      result = await api.post('/signup',{
        email: email,
        password: password,
      })
    }catch(e){
      console.log('error',e)
    }finally{
      console.log(result)
      if(result){
        return result.status === 200 ? true : false
      }else{
        return false
      }
    }
  },
  async colour(context,{name,colour}){
    await api.post('/colour',{
      name: name,
      colour: colour
    })
  },
  async sign_in(context,{email,password}){
    let result
    try{
      result = await api.post('/login',{
        email: email,
        password: password
      })
    }catch(e){
      console.log('error',e)
    }finally{
      if(result){
        return result.status === 200 ? true : false
      }else{
        return false
      }
    }
  }
}
