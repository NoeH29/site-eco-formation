<template>
  <div id="burger">
    <div class="cardContainer">
      <div class="card" v-for="burger in burgers" v-bind:key="burger.id">
       <img :src="require('@/assets/produit/thumbnail/' + burger.photo_produit)" /> 
        <h2 class="titre">{{ burger.nom_produit }} :</h2>
        <p class="prix" v-if="notMenu">{{ burger.prix_produit }} €</p>
        <p class="description">{{ burger.description_produit }}</p>
        <button class="ajouter" v-if="notMenu" v-on:click="addToPanier(burger)">Ajouter au Panier</button>
        <button class="ajouter" v-else @click="goNextMenuItem(burger)">Ajouter au Menu</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Burger",
  data: function () {
    return {
      burgers: null,
      notMenu: this.$store.state.menuShow,
    };
  },
  methods: {
    goNextMenuItem: function (burger) {
      if (this.$store.state.menuCount < this.$store.state.sequenceMenu.length) {
        // console.log(burger);
        this.$store.dispatch("pushToMenu", burger);
        let count = this.$store.state.menuCount;
        let firstItemMenu = this.$store.state.sequenceMenu[count].nom_categ;
        this.$store.commit("incrementMenuCount");
        //console.log(this.$store.state.sequenceMenu);
        this.$router.push("/" + firstItemMenu);
      } else {
        this.$store.dispatch("pushToMenu", burger);
        this.$store.dispatch("pushMenuToPanier", this.$store.state.curentMenu);
        this.$store.dispatch("priceHide");
        this.$router.push("/panier");
      }
    },
    addToPanier: function (burger) {
      //console.log(burger);
      this.$store.dispatch("pushToPanier", burger);
    },
  },
  mounted: function () {
    this.http
      .get("http://localhost:9000/burgers")
      .then((response) => {
        //console.log(response.data.burger);
        this.burgers = response.data.burger;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
img {
  clip-path: circle(50% at 50% 50%);
  
  margin:auto 0 auto -50px;
  grid-area: photo;
  
}
button{
	box-shadow: inset 0px 1px 0px 0px #9c9483;
	background-color: #a8a08f;
	border: 1px solid #9c9483;
  border-radius: 5px;
	display: inline-block;
	cursor: pointer;
	color: #FFFFFF;
	font-family: 'Open Sans Condensed', sans-serif;
	font-size: 14px;
	text-decoration: none;
	text-transform: uppercase;
  width: 100px;
  grid-area: button; 
  justify-self: center;
  height:40px;
}


button:hover {
background: rgb(173,158,135);
background: linear-gradient(184deg, rgba(173,158,135,1) 0%, rgba(200,193,177,1) 0%, rgba(163,144,127,1) 89%);

}
.titre {
   grid-area: titre;
    }
.prix { 
  font-size:40px;
   color: brown;
  font-weight: bold;
  grid-area: prix;
  margin:0;
  justify-self: center;
   }
.description {
   grid-area: description;
    }

</style>