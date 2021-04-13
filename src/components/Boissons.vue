<template>
  <div id="boissons">
    <div class="cardContainer">
      <div class="card" v-for="boisson in boissons" v-bind:key="boisson.id">
        <img :src="require('@/assets/boissons/' + boisson.photo_produit)" />
        <h4>{{ boisson.nom_produit }} :</h4>
        <p>{{ boisson.description_produit }}</p>
        <p v-if="notMenu">{{ boisson.prix_produit }}€</p>
        <button v-if="notMenu" @click="addToPanier(boisson)">Ajouter</button>
        <button v-else @click="goNextMenuItem(boisson)">Ajouter2</button>
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
  clip-path: inset(0% 0 0 0 round 25% 0 25% 0);
  width: 90%;
}
button {
  width: 30%;
}
</style>
