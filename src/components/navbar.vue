<template>
  <nav>
    <ul>
      <li>
        <router-link to="/" id="logo">
          <img src="../assets/burger.svg" /> Home</router-link
        >
      </li>
      <li class="deroulant">
        <router-link to="/about">menus</router-link>
        <ul class="sous">
          <li><a href="#">menus enfants</a></li>
          <li><a href="#">menus xl</a></li>
          <li><a href="#">menus xxl</a></li>
        </ul>
      </li>
      <li class="deroulant">
        <router-link to="/cartes">cartes</router-link>
        <ul class="sous">
          <li><a href="#">burgers</a></li>
          <li><a href="#">boissons</a></li>
          <li><a href="#">accompagnements</a></li>
        </ul>
      </li>
      <li class="deroulant">
        <router-link to="/contact">contact</router-link>
        <ul class="sous">
          <li><a href="#">localisation</a></li>
          <li><a href="#">numéro</a></li>
          <li><a href="#">réseau sociaux</a></li>
        </ul>
      </li>
      <li id="loginHome">
        <button v-on:click="toggleModal('in')" id="signInButton">
          S'inscrire
        </button>
        <button v-on:click="toggleModal('up')" id="signUpButton">
          Se connecter
        </button>
      </li>
    </ul>
    <Connexion
      v-bind:revele="revele"
      v-bind:toggleModal="toggleModal"
      v-bind:inscription="inscription"
      v-bind:connexion="connexion"
      v-bind:titre="titre"
    />
  </nav>
</template>
<script>
import Connexion from "@/components/connexion.vue";

export default {
  data() {
    return {
      revele: false,
      inscription: false,
      connexion: false,
      titre: "",
    };
  },
  components: {
    Connexion,
  },
  methods: {
    toggleModal: function(signState) {
      this.revele = !this.revele;
      if (signState === "up") {
        this.connexion = true;
        this.inscription = false;
        this.titre = "CONNEXION";
      }
      if (signState === "in") {
        this.inscription = true;
        this.connexion = false;
        this.titre = "INSCRIPTION";
      }
    },
  },
};
</script>

<style scoped>
nav {
  padding: 40px 0 40px 0;
  width: 100%;
}

#loginHome {
  display: flex;
  justify-content: space-evenly;
  width: 25%;
  left:10%;
}

nav ul {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

nav ul .deroulant {
  width: 10%;
  text-align: center;
  position: relative;
}
nav ul li {
  text-align: left;
  padding-left: 15px;
  position: relative;
  height: 15px;
}

nav ul::after {
  content: "";
  display: table;
  clear: both;
}
#logo {
  display: inline-flex;
  align-items: center;
  position: relative;
  top:-200%;
  left: -35%;
  font-size: 30px;
  height: 10vh;
}
img {
  height: 30vh;
}

nav a {
  display: block;
  text-decoration: none;
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

nav a:hover {
  transform: scale(1.1);
  color: #6a614c;
}

.sous {
  display: none;
  position: absolute;
  width: 110%;
  height: 150px;
  z-index: 1000;
  background-color: #6a614c8c;
  padding-left: 0%;
  border-radius: 10px;
}

nav > ul li:hover .sous {
  display: block;
}
.sous li {
  width: 100%;
  padding:10px;
  
}
.sous a {
  padding: 10px;
  border-bottom: none;
}

.deroulant > a::after {
  content: " ▼";
  font-size: 12px;
}

 button,
      button::after {
      -webkit-transition: all 0.3s;
      -moz-transition: all 0.3s;
      -o-transition: all 0.3s;
      transition: all 0.3s;
      }

   button {
     left:-50px;
      background: none;
      border: 4px solid #fff;
      border-radius: 10px;
      color: #fff;
      display: block;
      font-size: 16px;
      padding:5px 10px 20px 10px;
      font-weight: bold;
      position: relative;
      }
  
      button::before,
      button::after {
    background: white;
      content: '';
      position: absolute;
      z-index: -1;

      }
      button:hover {
      color: #806c3f;
      cursor: pointer;
      }
  button::after {
      height: 0;
      left: 50%;
      top: 50%;
      width: 0;
      }
      button:hover:after {
      height: 100%;
      left: 0;
      top: 0;
      width: 100%;
      }
</style>
