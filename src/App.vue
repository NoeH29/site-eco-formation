
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
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  
}
.card {
  height: auto;
  width: 500px;
  border-radius: 10px;
  background: whitesmoke;
  padding-bottom: 2%;
  margin: 50px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: grid;
      grid-template-columns: 1fr 1.1fr 0.3fr 1fr;
  grid-template-rows: 0.5fr 0.5fr 1.5fr 0.5fr;
  gap: 0px 0px;
    grid-template-areas:
    "photo titre titre titre"
    "photo prix prix prix"
    "photo description description description"
    "photo button button button";

}


</style>