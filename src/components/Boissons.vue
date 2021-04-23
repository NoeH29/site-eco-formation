<template>
  <div id="boissons">
    <div class="cardContainer">
      <div class="card" v-for="boisson in boissons" v-bind:key="boisson.id">
        <img :src="require('@/assets/produit/thumbnail/' + boisson.photo_produit)" />
        <h2 class="titre">{{ boisson.nom_produit }} :</h2>
        <p class="description">{{ boisson.description_produit }}</p>
        <p class="prix" v-if="notMenu">{{ boisson.prix_produit }}€</p>
        <button class="ajouter" v-if="notMenu" @click="addToPanier(boisson)">Ajouter</button>
        <button class="ajouter" v-else @click="goNextMenuItem(boisson)">Ajouter2</button>
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
      notMenu: this.$store.state.menuShow,
    };
  },
  methods: {
    addToPanier: function (boisson) {
      console.log(boisson);
      this.$store.dispatch("pushToPanier", boisson);
    },
    goNextMenuItem: function (boisson) {
      if (this.$store.state.menuCount < this.$store.state.sequenceMenu.length) {
        console.log(boisson);
        this.$store.dispatch("pushToMenu", boisson);
        var count = this.$store.state.menuCount;
        var firstItemMenu = this.$store.state.sequenceMenu[count].nom_categ;
        this.$store.commit("incrementMenuCount");
        console.log(this.$store.state.sequenceMenu);
        this.$router.push("/" + firstItemMenu);
      } else {
        this.$store.dispatch("pushToMenu", boisson);
        this.$store.commit("pushMenuToPanier");
        this.$store.dispatch("priceHide");
        this.$router.push("/panier");
      }
    },
  },
  mounted: function () {
    this.http
      .get("http://localhost:9000/boissons")
      .then((response) => {
        // console.log(response.data);
        this.boissons = response.data.boissons;
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
