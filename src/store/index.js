import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
//import router from "../router/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuShow: true,
    token: localStorage.getItem("jwt") || "",
    notConnected: true,
    erreur: null,
    panier: [],
    sequenceMenu: [],
    menuCount: 0,
    curentMenu: null,
  },

  mutations: {
    deco(state) {
      state.token = "";
    },
    connected(state) {
      state.notConnected = false;
    },
    setError(state, item) {
      state.erreur = item;
    },
    priceHide(state) {
      state.menuShow = !state.menuShow;
    },
    pushToPanier(state, item) {
      let panierStorage;
      if (localStorage.getItem("panier")) {
        panierStorage = localStorage.getItem("panier");
        panierStorage = JSON.parse(panierStorage);
        console.log(item.curentMenu);
        if (!item.curentMenu) {
          const indice = panierStorage.findIndex(
            (panier) => panier.id_produit === item.id_produit
          );
          if (indice >= 0) {
            console.log("toto");
            console.log(indice);
            panierStorage[indice].quantity += 1;
            console.log(panierStorage[indice]);
          } else {
            item.quantity = 1;
            panierStorage.push(item);
          }
        } else {
          item.quantity = 1;
          panierStorage.push(item);
        }
      } else {
        panierStorage = [];
        item.quantity = 1;
        panierStorage.push(item);
      }
      const panierToStorage = JSON.stringify(panierStorage);
      localStorage.setItem("panier", panierToStorage);
    },
    createMenu(state, item) {
      // let x = 0;
      // item.push("id_MenuPanier : ");
      state.curentMenu = item;
    },
    pushToMenu(state, item) {
      state.curentMenu.push(item);
    },
    resetMenu(state) {
      state.menuCount = 0;
      state.sequenceMenu = [];
      // state.panier.push({ curentMenu: state.curentMenu });
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
        context.commit("setError", resp.data.message);
        //context.commit('auth_succes',resp.data)
      });
    },
    connexionBase(context, infos) {
      console.log(infos);
      axios.post("http://localhost:9000/connexion", infos).then((resp) => {
        console.log("connexionBase", resp.data);
        localStorage.setItem("jwt", resp.data);
        document.location.reload();
        axios.defaults.headers.common["authorization"] = resp.data;
      });
    },
    deco(context) {
      context.commit("deco");
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
    pushMenuToPanier(context, item) {
      context.commit("pushToPanier", { curentMenu: item });
      context.commit("resetMenu");
    },
  },
  modules: {},
});
