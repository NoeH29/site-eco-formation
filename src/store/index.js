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
    inscriptionBase(content, infos) {
      axios.post("", infos).then((resp) => {
        console.log(resp.data);
        //context.commit('auth_succes',resp.data)
      });
    },
    connexionBase(context, infos) {
      axios.post("", infos).then((resp) => {
        console.log(resp.data);
        //localStorage.setItem("jwt", resp.data);
       // axios.defaults.headers.common["Authorization"] = resp.data;
        //context.commit("auth_succes", resp.data);
      });
    },

  },
  modules: {
  }
})