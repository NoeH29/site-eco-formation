
<template>
<div id="app">
<Navbar/>
  <router-view />
</div>
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
  height:100vh;

}


</style>