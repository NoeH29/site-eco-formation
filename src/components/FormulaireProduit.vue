<template>
    <div id="formulaireProduit">
        <select v-model="selected">
          <option disabled value="">Categorie</option>
            <option v-for="oneCateg in categorie" :key="oneCateg.id" :value ="oneCateg.id">{{oneCateg.nom_categ}}</option>
        </select>

      <input
        type="text"
        id="nom"
        name="nom"
        v-model="nom"
        placeholder=" ex : burger"
      />
       <input
        type="text"
        id="description"
        name="description"
        v-model="description"
        placeholder=" ex : description"
      />
       <input
        type="text"
        id="prix"
        name="prix"
        v-model="prix"
        placeholder=" ex : 8"
      />
          
         <input
          type="file"
          id="photo"
          name="photo"
          v-on="nom"
          placeholder="ajouté photo ici"
        /> 
         <button @click="envoi1()">Envoyer</button>
    </div>
</template>

<script>
export default {
    data :function(){
        return {
          categorie:"",
            nom:"",
            description:"",
            prix:"",
            selected:"",
        }

    } ,
      methods: {
    envoi1(){ 
      // Récupération de l'image
      let img = document.getElementById('photo').files[0]
      console.log(img)
      // Création d'un formData obligatoire pour envoi de l'image
        var formData = new FormData()
        formData.append('nom',this.nom)
        formData.append('description',this.description)
        formData.append('prix',this.prix)
        formData.append('selected',this.selected)
        formData.append('img', img)
        // le fichier choisit et chargé en mémoire

        // Envoi des données sur l'url du serveur (mettez la votre) en POST en envoyant le formData contenant notre image et notre texte
        
        this.http.post('http://localhost:9000/addProduit', formData )

          .then((resp) => {
            console.log(resp)
          })
          .catch((err) => {
            console.log(err.response)
          })
    }
},
  mounted: function () {
    this.http
      .get("http://localhost:9000/id_product")
      .then((response) => {
        console.log(response.data.categorie);
        this.categorie = response.data.categorie;
      })
      .catch((error) => {
        console.log(error);
      });
  },
}
</script>

<style scoped>

</style>
