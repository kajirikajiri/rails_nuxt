import api from '../plugins/axios'
export const state = () => ({
  colors: null,
})

export const getters = {
}

export const mutations = {
  update_colors_mutation: (state, payload) => {
    state.colors = payload
  }
}

export const actions = {
  async update_colors_action({ commit }) {
    const result = await api.get('/examples')
    commit('update_colors_mutation', result)
  },
  async sign_up(context,{email,password}){
    let result
    try {
      result = await api.post('/signup',{email,password,})
    }catch(e){
      error_output_log(e)
    }finally{
      return finally_process(result)
    }
  },
  async set_color_action(context,{name,colour}){
    await api.post('/colour',{name,colour})
  },
  async delete_color_action(context,{id}){
    let result = null
    try{
      result = await api.delete(`/examples/${id}`)
    }catch(e){
      error_output_log(e)
    }finally{
      return finally_process(result)
    }
  },
  async sign_in(context,{email,password}){
    let result
    try{
      result = await api.post('/login',{email,password})
    }catch(e){
      error_output_log(e)
    }finally{
      return finally_process(result)
    }
  }
}

const finally_process = (result) => {
  console.log(result)
  if(result){
    return result.status === 200 ? true : false
  }else{
    return false
  }
}

const error_output_log = (e) => {
  console.log('error',e)
}