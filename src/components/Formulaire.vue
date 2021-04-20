<template>
    <div id="formulaireCateg">

      <input
        type="text"
        id="nom"
        name="nom"
        v-model="nom"
        placeholder="nom de la catégorie ex : burger"
      />
    
         <input
          type="file"
          id="photo"
          name="photo"
          v-on="nom"
          placeholder="ajouté photo ici"
        /> 
         <button @click="envoi()">Envoyer</button>
    </div>
</template>

<script>
export default {
    data :function(){
        return {
            nom:""
        }

    } ,
      methods: {
    envoi(){ 
        //const nom = this.nom;
      // Récupération de l'image
      let img = document.getElementById('photo').files[0]
      // Création d'un formData obligatoire pour envoi de l'image
        var formData = new FormData()
        formData.append('nom',this.nom)
        formData.append('img', img)
        // Envoi des données sur l'url du serveur (mettez la votre) en POST en envoyant le formData contenant notre image et notre texte
        
        this.http.post('http://localhost:9000/addCateg', formData )

          .then((resp) => {
            console.log(resp)
          })
          .catch((err) => {
            console.log(err.response)
          })
    }
}
}
</script>

<style scoped>

</style>
