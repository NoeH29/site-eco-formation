import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  
  },
  mutations: {
  
    },
  actions: {
    connexion(content, infos) {
      axios.post("", infos).then((resp) => {
        console.log(resp.data);
        //context.commit('auth_succes',resp.data)
      });
    },
  
  },
  modules: {
  }
})