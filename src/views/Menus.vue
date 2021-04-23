<template>
  <div id="menu">
    <div class="cardContainer">
      <div class="card" v-for="menu in menus" v-bind:key="menu.id">
        <img :src="require('@/assets/menus/thumbnail/' + menu.photo_menu)" />
        <h4 class="titre">{{ menu.nom_menu }} :</h4>
        <p class="prix">{{ menu.prix_menu }}€</p>
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