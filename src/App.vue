
<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  data: function () {
    return {};
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>
<style>
body {
  background-color: #ded3bb;
  margin: 0;
  padding: 0;
  overflow-x:hidden;
}
#app {
  font-family: roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: grid;
  align-content: space-between;
  grid-template-areas:
    "nav"
    "main"
    "footer";
}
#foot {
  grid-area: footer;
}
#inscription {
  grid-area: main;
}
#connexion {
  grid-area: main;
}
nav {
  grid-area: nav;
}
</style>