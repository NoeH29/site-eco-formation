import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import Inscription from'../views/inscription.vue'


=======
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
>>>>>>> 676264069c4ca92955ebcd49ad64af48014dfa93


Vue.use(VueRouter)

const routes = [
  {
<<<<<<< HEAD
  path:"/inscription",
  name:"Inscription",
  component: Inscription
}
 
=======
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
>>>>>>> 676264069c4ca92955ebcd49ad64af48014dfa93
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router