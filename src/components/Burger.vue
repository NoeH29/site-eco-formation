<template>
  <div id="burger">
    <div class="cardContainer">
      <div class="card" v-for="burger in burgers" v-bind:key="burger.id_produit">
        <img :src="require('@/assets/photoBurger/' + burger.photo_produit)" />
        <h4>{{ burger.nom_produit }} :</h4>
        <p>{{ burger.description_produit }}</p>
        <p v-if="notMenu">{{ burger.prix_produit }}€</p>
        <button v-if="notMenu" v-on:click="addToPanier(burger)">
          Ajouter au Panier
        </button>
        <button v-else @click="goNextMenuItem(burger)">Ajouter au Menu</button>
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
  clip-path: inset(0 0 20% 0 round 25% 0 25% 0);
  width: 90%;
}
button {
  width: 30%;
}
</style>