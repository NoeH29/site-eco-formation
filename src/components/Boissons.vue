<template>
  <div id="boissons">
    <div id="allCard" v-for="boisson in boissons" v-bind:key="boisson.id">
      <div id="cardBoisson">
     <img :src="require('@/assets/boissons/'+ boisson.photo)"> 
     <h4> {{boisson.nom}} :</h4>
     <p> {{boisson.description}}</p>
    <p v-if="menu">  {{boisson.prix}}€</p>
    <button>Ajouter</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Boissons",
  data: function () {
    return {
      boissons: null,
       menu: this.$store.state.menuShow,
    };
  },
  
  mounted: function () {
    this.http
      .get("http://localhost:9000/boissons")
      .then((response) => {
        console.log(response.data);
        this.boissons = response.data.boissons;
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
#cardBoisson{
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
 

}
button{
  width: 25%;
}

</style>
