import Vue from 'vue'
import VueRouter from 'vue-router'
import Inscription from'../views/inscription.vue'
import Contact from'../views/Contact.vue'
import Home from'../views/Home.vue'




Vue.use(VueRouter)

const routes = [
  {
  path:"/inscription",
  name:"Inscription",
  component: Inscription
},
{
  path:"/contact",
  name:"Contact",
  component: Contact
},
{
  path:"/home",
  name:"Home",
  component: Home
}
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router