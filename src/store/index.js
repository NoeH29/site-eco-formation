import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
//import router from "../router/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuShow:true,
    token:localStorage.getItem('jwt') || '',
    iconNotShow: true,
    erreur:null,
    panier: [],
    sequenceMenu: [],
    menuCount: 0,
    curentMenu: null,
    //token:localStorage.getItem('jwt') || ''
  },

  mutations: {
    deco(state){
      state.token=''
    },
    show(state){
        state.iconNotShow = false
    },
    setError(state,item){
      state.erreur = item
      
    },
    priceHide(state) {
      state.menuShow =! state.menuShow;
    },
    pushToPanier(state, item) {
      state.panier.push(item);
    },
    createMenu(state, item) {
      state.curentMenu = item;
    },
    pushToMenu(state, item) {
      state.curentMenu.push(item);
    },
    pushMenuToPanier(state) {
      state.menuCount = 0;
      state.sequenceMenu = [];
      state.panier.push({ curentMenu: state.curentMenu });
    },
    pushToSequence(state, item) {
      state.sequenceMenu = item;
    },
    incrementMenuCount(state) {
      state.menuCount++;
    },
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
   
    priceHide(context) {
      context.commit("priceHide");
    },
    pushToPanier(context, item) {
      context.commit("pushToPanier", item);
    },
    createMenu(context, item) {
      context.commit("createMenu", item);
    },
    pushToMenu(context, item) {
      context.commit("pushToMenu", item);
    },
    getMenuParams(context, infos) {
      axios.post("http://localhost:9000/menuparams", infos).then((resp) => {
        //console.log(resp.data);
        context.commit("pushToSequence", resp.data.menuparams);
      });
    },
  },
  modules: {},
});
