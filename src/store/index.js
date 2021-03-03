import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auteur: "Youri",
    bigcount: 0
  },
  mutations: {
    incremente(state) {
      state.bigcount++
    }
  },
  actions: {
    ajoute1(context) { // context = mot clef de vuex (ce n'est pas un argument)
      context.commit('incremente');
    }
  },
  modules: {
  }
})