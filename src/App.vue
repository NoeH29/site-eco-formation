
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
    return {
      
    };
  },
  mounted() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      this.$store.commit("connected");
    }
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
  overflow-x: hidden;
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

nav {
  grid-area: nav;
}
.cardContainer {
  display: inline-flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
}
.card {
  height: 500px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  background: whitesmoke;
  padding-bottom: 2%;
  align-items: center;
  margin: 50px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>