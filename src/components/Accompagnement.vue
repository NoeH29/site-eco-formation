<template>
  <div id="accompagnements">
    <div id="allCard" v-for="accompagnement in accompagnements" v-bind:key="accompagnement.id">
      <div id="cardaccompagnement">
     <img :src="require('@/assets/acc/'+ accompagnement.photo)">
     <h4> {{accompagnement.nom}} :</h4>
     <p> {{accompagnement.description}}</p>
    <p v-if="menu">  {{accompagnement.prix}}€</p>
    <button v-if="menu">Ajouter</button>
     <button v-else @click="goBoisson">Ajouter2</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "accompagnements",
  data: function () {
    return {
      accompagnements: null,
      menu: this.$store.state.menuShow,
    };
  },
  methods:{
      goBoisson:function(){
          this.$router.push("/boissons")
      }
  },
  mounted: function () {
    this.http
      .get("http://localhost:9000/accompagnements")
      .then((response) => {
        console.log(response.data);
        this.accompagnements = response.data.accompagnements;
        console.log("this.accompagnement",this.accompagnements)
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
#cardaccompagnement{
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
