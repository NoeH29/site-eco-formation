<template>
  <div id="accompagnements">
    <div class="cardContainer">
      <div
        class="card"
        v-for="accompagnement in accompagnements"
        v-bind:key="accompagnement.id"
      >
        <img :src="require('@/assets/acc/' + accompagnement.photo_produit)" />
        <h4>{{ accompagnement.nom_produit }} :</h4>
        <p>{{ accompagnement.description_produit }}</p>
        <p v-if="notMenu">{{ accompagnement.prix_produit }}€</p>
        <button v-if="notMenu" @click="addToPanier(accompagnement)">
          Ajouter
        </button>
        <button v-else @click="goNextMenuItem(accompagnement)">Ajouter2</button>
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
      notMenu: this.$store.state.menuShow,
    };
  },
  methods: {
    goNextMenuItem: function (accompagnement) {
      if (this.$store.state.menuCount < this.$store.state.sequenceMenu.length) {
        this.$store.dispatch("pushToMenu", accompagnement);
        var count = this.$store.state.menuCount;
        var firstItemMenu = this.$store.state.sequenceMenu[count].nom_categ;
        this.$store.commit("incrementMenuCount");
        console.log(this.$store.state.sequenceMenu);
        this.$router.push("/" + firstItemMenu);
      } else {
        this.$store.dispatch("pushToMenu", accompagnement);
        this.$store.commit("pushMenuToPanier");
        this.$store.dispatch("priceHide");
        this.$router.push("/panier");
      }
    },
    addToPanier: function (accompagnement) {
      console.log(accompagnement);
      this.$store.dispatch("pushToPanier", accompagnement);
    },
  },
  mounted: function () {
    this.http
      .get("http://localhost:9000/accompagnements")
      .then((response) => {
        console.log(response.data);
        this.accompagnements = response.data.accompagnements;
        console.log("this.accompagnement", this.accompagnements);
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
