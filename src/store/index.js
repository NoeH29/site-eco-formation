import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuShow:true,
    token:localStorage.getItem('jwt') || '',
    iconNotShow: true,
    erreur:null
   
  
  },
  mutations: {
    priceHide(state){
      state.menuShow = false
    },
    deco(state){
      state.token=''
    },
    show(state){
        state.iconNotShow = false
    },
    setError(state,item){
      state.erreur = item
      
    }
  },
  actions: {
    inscriptionBase(context, infos) {
      axios.post("http://localhost:9000/inscription", infos).then((resp) => {
        console.log(resp.data);
        context.commit("setError",resp.data.message)
        //context.commit('auth_succes',resp.data)
      });
    },
    connexionBase(context, infos) {
      axios.post("http://localhost:9000/connexion", infos).then((resp) => {
        console.log("connexionBase",resp.data);
        localStorage.setItem("jwt", resp.data);
        context.commit("show")
       axios.defaults.headers.common["authorization"] = resp.data;

      });
     
    },
     deco(context){
        context.commit("deco")
      },
    
    priceHide(context){
      context.commit("priceHide")
    },
    
   
  },
  modules: {
  }
})