
<template>
<<<<<<< HEAD
<div id="app">
<Navbar/>
  <router-view />
</div>
=======
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>

    <router-view />
  </div>
>>>>>>> 676264069c4ca92955ebcd49ad64af48014dfa93
</template>
<script>
import Navbar from '@/components/navbar.vue'
export default {
  data: function () {
    return {};
  },
  components : {
    Navbar
  }
};
</script>
<style>
body{
  background-color:#DED3BB;
  
}
#app {
  font-family: roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}


</style>