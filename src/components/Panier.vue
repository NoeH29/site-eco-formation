<template>
  <div id="panier">
    <h2>Voici le panier</h2>
    <div v-for="panierItem in panierItems" v-bind:key="panierItem.id">
      <div class="panierElement" v-if="panierItem.nom_produit">
        <h4>Nom : {{ panierItem.nom_produit }}</h4>
        <p>Prix : {{ panierItem.prix_produit }}</p>
        <i class="fas fa-times"></i>
      </div>
      <div v-if="panierItem.curentMenu" class="panierElement">
        <h4>Menu : {{ panierItem.curentMenu[0].nom_menu }}</h4>
        <p>Prix: {{ panierItem.curentMenu[0].prix_menu }}</p>
        <div v-for="menuItem in panierItem.curentMenu" v-bind:key="menuItem.id">
          <h5 v-if="menuItem.nom_produit">Nom : {{ menuItem.nom_produit }}</h5>
        </div>
        <i class="fas fa-times"></i>
      </div>
    </div>
    <h4>Prix Total : {{ prixTotal }}</h4>
  </div>
</template>

<script>
export default {
  name: "Panier",
  data: function () {
    return {};
  },
  computed: {
    panierItems: function () {
      console.log(this.$store.state.panier);
      return this.$store.state.panier;
    },
    prixTotal: function () {
      var panier = this.$store.state.panier;
      var sum = 0;
      panier.forEach((panierItems) => {
        sum += panierItems.prix_produit;
        sum += panierItems.prix_menu;
      });
      return sum;
    },
  },
};
</script>

<style scoped>
#panier {
  background: whitesmoke;
  margin: 1% 10%;
  height: auto;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.panierElement {
  background: white;
  display: inline-flex;
  width: 90%;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-top: 10px;
}
i {
  transition: font-size 0.2s;
}
i:hover {
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}
</style>