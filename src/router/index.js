import Vue from 'vue'
import VueRouter from 'vue-router'
import Inscription from '../views/inscription.vue'
import Contact from '../views/Contact.vue'
import Home from '../views/Home.vue'
import Connexion from '../components/connexion.vue'
import Burger from '../views/Burger.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: "/inscription",
    name: "Inscription",
    component: Inscription
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/connexion",
    name: "Connexion",
    component: Connexion
  },
  {
    path: "/burger",
    name: "Burger",
    component: Burger
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router