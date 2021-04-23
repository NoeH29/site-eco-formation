import Vue from "vue";
import VueRouter from "vue-router";
import Contact from "../views/Contact.vue";
import Home from "../views/Home.vue";
import Menus from "../views/Menus.vue";
import Connexion from "../components/connexion.vue";
import Burger from "../components/Burger.vue";
import Boisson from "../components/Boissons.vue";
import Accompagnement from "../components/Accompagnement.vue";
import Panier from "../components/Panier.vue";
import FormulaireCateg from "../components/FormulaireCateg.vue";
import FormulaireProduit from "../components/FormulaireProduit.vue";
import FormulaireMenu from "../components/FormulaireMenu.vue";
import Formulaire from "../components/Formulaire.vue";
import Profil from "../views/Profil.vue";

Vue.use(VueRouter);

const routes = [

  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/connexion",
    name: "Connexion",
    component: Connexion,
  },
  {
    path: "/burger",
    name: "Burger",
    component: Burger,
  },
  {
    path: "/menus",
    name: "Menus",
    component: Menus,
  },
  {
    path: "/boisson",
    name: "Boisson",
    component: Boisson,
  },
  {
    path: "/accompagnement",
    name: "Accompagnement",
    component: Accompagnement,
  },
  {
    path: "/panier",
    name: "Panier",
    component: Panier,
  },
  {
    path: "/formulaireCateg",
    name: "FormulaireCateg",
    component: FormulaireCateg,
  },
  {
    path: "/formulaireProduit",
    name: "FormulaireProduit",
    component: FormulaireProduit,
  },
  {
    path: "/formulaireMenu",
    name: "FormulaireMenu",
    component: FormulaireMenu,
  },
  {
    path: "/formulaire",
    name: "Formulaire",
    component: Formulaire,
  },
  {
    path: "/profil",
    name: "Profil",
    component: Profil,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
