<template>
  <div id="burger">
    <div id="allCard" v-for="burger in burgers" v-bind:key="burger.id">
      <div id="cardBurger">
        <img :src="require('@/assets/photoBurger/' + burger.photo_produit)" />
        <h4>{{ burger.nom_produit }} :</h4>
        <p>{{ burger.description }}</p>
        <p v-if="menu">{{ burger.prix_produit }}€</p>
        <button v-if="menu">Ajouter</button>
        <button v-else @click="goAccompagnement">Ajouter2</button>
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
      menu: this.$store.state.menuShow,
    };
  },
  methods: {
    goAccompagnement: function () {
      this.$router.push("/accompagnements");
    },
  },
  mounted: function () {
    this.http
      .get("http://localhost:9000/burgers")
      .then((response) => {
        // console.log("response.data",response.data);
        this.burgers = response.data.burger;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
#allCard {
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
}
#cardBurger {
  height: 300px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  clip-path: inset(0% 0 0 0 round 25% 0 25% 0);
  background: whitesmoke;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  padding-bottom: 2%;
  align-items: center;
}
img {
  clip-path: inset(0% 0 0 0 round 25% 0 25% 0);
  height: 30%;
}
button {
  width: 30%;
}
</style>