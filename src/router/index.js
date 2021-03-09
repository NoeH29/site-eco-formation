import Vue from 'vue'
import VueRouter from 'vue-router'
import Inscription from'../views/inscription.vue'
import Contact from'../views/Contact.vue'




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
}
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router