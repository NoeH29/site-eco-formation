import Vue from 'vue'
import VueRouter from 'vue-router'
import Inscription from '../views/inscription.vue'
import Contact from '../views/Contact.vue'
import Home from '../views/Home.vue'
import Menus from '../views/Menus.vue'
import Connexion from '../components/connexion.vue'
import Burger from '../components/Burger.vue'
import Boissons from '../components/Boissons.vue'




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
    path: "/",
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
  },
  {
    path: "/menus",
    name: "Menus",
    component: Menus
  },
  {
    path: "/boissons",
    name: "Boissons",
    component: Boissons
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router