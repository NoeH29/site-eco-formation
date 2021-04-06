<template>
  <div id="menu">
    <div id="allCard" v-for="menu in menus" v-bind:key="menu.id">
      <div id="cardmenu">
      <img :src="require('@/assets/menus/'+ menu.photo)"> 
     <h4> {{menu.nom}} :</h4>
    <p>  {{menu.prix}}€</p>
    <button @click="goMenu">Séléctionner</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menus",
  data: function () {
    return {
      menus: null,
    };
  },
  methods:{
    goMenu:function(){
       this.$store.dispatch("priceHide");
     this.$router.push("/burger")
    }
  },
  mounted: function () {
    this.http
      .get("http://localhost:9000/menus")
      .then((response) => {
        console.log(response.data);
        this.menus = response.data.menus;
        console.log(this.menus);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
#allCard{
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
}
#cardmenu{
  height:70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
 clip-path:  inset(0% 0 0 0 round 25% 0 25% 0);
  background:whitesmoke;
  padding-bottom:2%;
  align-items: center;
}
img{
  clip-path:  inset(0% 0 0 0 round 25% 0 25% 0);

  z-index:0;
}

button{
  width: 35%;
}

</style>