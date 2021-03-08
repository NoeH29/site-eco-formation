import Vue from 'vue'
import VueRouter from 'vue-router'
import Inscription from'../views/inscription.vue'




Vue.use(VueRouter)

const routes = [
  {
  path:"/inscription",
  name:"Inscription",
  component: Inscription
}
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router