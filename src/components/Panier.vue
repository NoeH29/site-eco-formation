<template>
  <div id="panier">
    {{ mail }}
    <h2>Voici le panier</h2>
    <div
      id="panierContainer"
      v-for="panierItem in panierStorage"
      v-bind:key="panierItem.id_produit"
    >
      <div class="panierElement" v-if="panierItem.nom_produit">
        <h4>Nom : {{ panierItem.nom_produit }}</h4>
        <p>Prix : {{ panierItem.prix_produit }}</p>
        <div class="inlineFlex">
          <p>Quantité :</p>
          <i
            class="fas fa-minus-circle"
            @click="changeQuantity(panierItem.id_produit, 'less')"
          ></i>
          <p>{{ panierItem.quantity }}</p>
          <i
            class="fas fa-plus-circle"
            @click="changeQuantity(panierItem.id_produit, 'more')"
          ></i>
        </div>
        <i
          class="fas fa-times"
          @click="deletePanierItem('produit', panierItem.id_produit)"
        ></i>
      </div>
      <div v-if="panierItem.curentMenu" class="panierElement">
        <h4>Menu : {{ panierItem.curentMenu[0].nom_menu }}</h4>
        <p>Prix : {{ panierItem.curentMenu[0].prix_menu }}</p>
        <div v-for="menuItem in panierItem.curentMenu" v-bind:key="menuItem.id">
          <div class="inlineFlex" v-if="menuItem.nom_produit">
            <h5>{{ menuItem.nom_categ }} :</h5>
            <p>
              {{ menuItem.nom_produit }}
            </p>
          </div>
        </div>
        <i
          class="fas fa-times"
          @click="
            deletePanierItem(
              'menu',
              panierItem.curentMenu[0].id,
              panierItem.curentMenu
            )
          "
        ></i>
      </div>
    </div>
    <button @click="validerPanier">Valider Ma Commande</button>
    <h4>Prix Total : {{ prixTotal }} €</h4>
  </div>
</template>

<script>
export default {
  name: "Panier",
  data: function () {
    return {
      panierStorage: JSON.parse(localStorage.getItem("panier")),
      mail: null,
    };
  },
  methods: {
    deletePanierItem(type, id, produit) {
      if (type === "menu") {
        console.log(produit);
        const indice = this.panierStorage.findIndex(
          (panier) => panier.curentMenu === produit
        );
        console.log("menu" + indice);
        this.panierStorage.splice(indice, 1);
      } else if (type === "produit") {
        let indice = this.panierStorage.findIndex(
          (panier) => panier.id_produit === id
        );
        console.log("produit" + indice);
        this.panierStorage.splice(indice, 1);
      }
      const panierToStorage = JSON.stringify(this.panierStorage);
      localStorage.setItem("panier", panierToStorage);
    },
    changeQuantity(id, change) {
      const indice = this.panierStorage.findIndex(
        (panier) => panier.id_produit === id
      );
      if (change === "less") {
        if (this.panierStorage[indice].quantity > 1) {
          this.panierStorage[indice].quantity -= 1;
        } else {
          this.deletePanierItem("produit", id);
        }
      } else if (change === "more") {
        this.panierStorage[indice].quantity += 1;
      }
      const panierToStorage = JSON.stringify(this.panierStorage);
      localStorage.setItem("panier", panierToStorage);
    },
    validerPanier() {
      /*let info = {
        mail: this.mail,
        password: this.password,
        nom: this.nom,
        prenom: this.prenom,
        telephone: this.telephone,
      };*/

      console.log(this.panierStorage);
    },
  },
  mounted() {
    var base64Url = this.$store.state.token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    let data = JSON.parse(jsonPayload);
    console.log(data);
    this.mail = data.mail;
  },
  computed: {
    /*getToken: function () {
      var base64Url = this.$store.state.token.split(".")[1];
      var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      var jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
      let data = JSON.parse(jsonPayload);
      console.log(data);
      this.mail = data.mail;
      return null;
    },*/
    prixTotal: function () {
      const panier = this.panierStorage;
      let sum = 0;
      if (panier) {
        panier.forEach((panierItems) => {
          if (panierItems.curentMenu) {
            const prixMenu = panierItems.curentMenu[0].prix_menu;
            // console.log(prixMenu);
            sum += prixMenu;
          } else {
            sum += panierItems.prix_produit * panierItems.quantity;
          }
          // console.log(sum);
        });
      }
      // pour que le total ait toujours que 2 chiffres après la virgule
      const precision = precision || 2;
      const tmp = Math.pow(10, precision);
      return Math.round(sum * tmp) / tmp;
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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
#panierContainer {
  width: 90%;
}
button {
  width: 15%;
  margin-top: 4%;
  padding: 10px;
  background-color: whitesmoke;
  font-weight: bold;
  font-size: 13px;
  border-radius: 10px;
  border: #e0b558 3px solid;
  color: #e0b558;
  transition: background-color 0.3s ease-in-out;
}
button:hover {
  background-color: #e0b558;
  color: white;
  cursor: pointer;
}
.panierElement {
  background: white;
  display: inline-flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-top: 10px;
}
.fa-times {
  transition: font-size 0.2s;
}
.fa-times:hover {
  font-size: 20px;
}
i:hover {
  font-weight: bold;
  cursor: pointer;
}
.inlineFlex {
  width: 30%;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>