<template>
       <form>
           <p id="head">Inscription</p>
            <input type="text" id="nom" name="nom" v-model="nom" placeholder="nom">
            <input type="text" id="prenom" name="prenom" v-model="prenom" placeholder="prenom">
            <input type="text" id="mail" name="mail" v-model="mail" placeholder="email@exemple.com">
             <input type="password" id="password" name="password" v-model="password" placeholder="mot de passe">
             <input type="password" id="confPassword" name="confPassword" v-model="confPassword" placeholder="confirmation de mot de passe">
            <input type="text" id="telephone" name="telephone" v-model="telephone" placeholder="téléphone">
            <button id="btn" type="submit" @click="addClient"> S'inscrire </button>  
           <p id="foot">Déja inscrit ?<a href="login">Se connecter</a></p> 
   </form>
</template>
<script>
export default {
    data:function(){
        return{
        nom:"",
        prenom:"",
        mail:"",
        password:"",
        confPassword:"",
        telephone:""
        }
    },
      methods: {
    addClient: function() {
      this.http
        .post("",{nom:this.nom,prenom:this.prenom,mail:this.mail,password:this.password,telephone:this.telephone})
        .then((res) => {
          console.log(res.data);
          if (res.data == "ok"){
            this.nom = null;
            this.prix=null;
            this.description=null;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  }
   
}


</script>

<style scoped>
form{
    margin:100px;
    padding:30px;
    width: 50%;
    display:inline-flex;
    flex-direction: column;
    gap:30px;
    background-color: rgba(255, 255, 255, 0.472);
    border-radius:5px;
    align-items: center;
    color:white; 
    background-image: url('../assets/burger.jpg');
      background-size: cover;
      opacity: 0.75;
    
}


input {
    height: 25px;
    width: 75%;
    background-color:rgba(255, 255, 255, 0.637);
    border-radius:5px;
    box-shadow: 10px 10px 5px grey;
    font-weight: bold;
}
input::-webkit-input-placeholder {
color:black ;
}

button{
    height: 25px;
    width: 100px;
    background-color:#5f5439b9;
    border-radius:5px;
    cursor: pointer;
    font-weight: bold;
    
}
button:hover{
      transform: translate(5px,5px);
     box-shadow: 5px 5px 5px grey;
}
#head{
    font-size:30px;
    font-weight: bold;
}
#foot{
    font-size:20px;
    font-weight: bold;
}

</style>