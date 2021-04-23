<template>
  <div id="formulaireMenu">
   <h2>formulaire Menu</h2>
    <input
      type="text"
      id="nom"
      name="nom"
      v-model="nom"
      placeholder=" nom du menu"
    />
    <input
      type="text"
      id="prix"
      name="prix"
      v-model="prix"
      placeholder=" prix du menu"
    />

    <input
      type="file"
      id="photo"
      name="photo"
      v-on="nom"
    />
    <button @click="envoi2()">Envoyer</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      nom: "",
      prix: "",
     
    };
  },
  methods: {
    envoi2() {
      let img = document.getElementById("photo").files[0];
      // Création d'un formData obligatoire pour envoi de l'image
      var formData = new FormData();
      formData.append("nom", this.nom);
      formData.append("prix", this.prix);
      formData.append("img", img);
      // Envoi des données sur l'url du serveur (mettez la votre) en POST en envoyant le formData contenant notre image et notre texte

      this.http
        .post("http://localhost:9000/addMenu", formData)

        .then((resp) => {
          console.log(resp);
        })
        .catch((err) => {
          console.log(err.response);
        });
    document.location.reload();
    },
  },
};
</script>

<style scoped>
#formulaireMenu{
	font-family: roboto, arial, sans;
	width: 500px;
	padding: 30px;
	background: #FFFFFF;
	margin: 50px auto;
	box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);

}
#formulaireMenu h2{
	background: #4d4d4d9d;
	text-transform: uppercase;
	font-family: roboto, sans-serif;
	color: #000000;
	font-size: 18px;
	font-weight: 100;
	padding: 20px;
	margin: -30px -30px 30px -30px;
}
#formulaireMenu input[type="text"],
#formulaireMenu input[type="file"]
{
	box-sizing: border-box;
	outline: none;
	display: block;
	width: 100%;
	padding: 7px;
	border: none;
	border-bottom: 1px solid #ddd;
	background: transparent;
	margin-bottom: 10px;
	font: 16px Arial, Helvetica, sans-serif;
	height: 45px;
}


button{
	box-shadow: inset 0px 1px 0px 0px #9c9483;
	background-color: #a8a08f;
	border: 1px solid #9c9483;
	display: inline-block;
	cursor: pointer;
	color: #FFFFFF;
	font-family: 'Open Sans Condensed', sans-serif;
	font-size: 14px;
	padding: 8px 18px;
	text-decoration: none;
	text-transform: uppercase;
}


button:hover {
background: rgb(173,158,135);
background: linear-gradient(184deg, rgba(173,158,135,1) 0%, rgba(200,193,177,1) 0%, rgba(163,144,127,1) 89%);

}
</style>
