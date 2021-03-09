<template>
  <nav>
    <ul>
      <li><router-link to="/home" id="na">Home</router-link></li>
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
      <li><router-link to="/connexion">connexion</router-link></li>
      <li><router-link to="/inscription">inscription</router-link></li>
    </ul>
  </nav>
</template>
<script>
export default {};
</script>
<style scoped>
nav {
  padding: 40px 0 40px 0;
  width: 100%;
  margin: 0 auto;
  position: sticky;
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
}

nav ul::after {
  content: "";
  display: table;
  clear: both;
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
  width: 100%;
  z-index: 1000;
  background-color: #6a614c26;
  padding-left: 0%;
  border-radius: 10px;
}

nav > ul li:hover .sous {
  display: block;
}
.sous li {
  width: 100%;
}
.sous a {
  padding: 10px;
  border-bottom: none;
}

.deroulant > a::after {
  content: " ▼";
  font-size: 12px;
}
</style>
