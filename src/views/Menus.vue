<template>
  <div id="menu">
    <div class="cardContainer">
      <div class="card" v-for="menu in menus" v-bind:key="menu.id">
        <img :src="require('@/assets/menus/' + menu.photo_menu)" />
        <h4>{{ menu.nom_menu }} :</h4>
        <p>{{ menu.prix_menu }}€</p>
        <button @click="goMenu(menu)">Séléctionner</button>
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
  methods: {
    goMenu: function (menu) {
      let id = menu.id;
      this.$store.dispatch("priceHide");
      this.$store.dispatch("getMenuParams", { id });
      this.$store.dispatch("createMenu", [menu]);
    },
  },
  watch: {
    "$store.state.sequenceMenu": function () {
      let nextItemMenu = this.$store.state.sequenceMenu[0].nom_categ;
      this.$store.commit("incrementMenuCount");
      //console.log(this.$store.state.sequenceMenu);
      this.$router.push("/" + nextItemMenu);
    },
  },
  mounted: function () {
    this.http
      .get("http://localhost:9000/menus")
      .then((response) => {
        // console.log(response.data);
        this.menus = response.data.menus;
        //  console.log(this.menus);
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
  z-index: 0;
  width: 100%;
}

button {
  width: 35%;
}
</style>