<template>
  <div id="connexion" v-if="revele">
    <div class="overlay" v-on:click="toggleModal"></div>
    <div class="modal">
      <i class="fas fa-times" v-on:click="toggleModal"></i>
      <h3>{{ titre }}</h3>

      <input
        type="text"
        id="mail"
        name="mail"
        v-model="mail"
        placeholder="email@exemple.com"
      />

      <input
        type="password"
        id="password"
        name="password"
        v-model="password"
        placeholder="Mot de passe"
      />
      <p v-if="connexion">Pas encore inscrit ?<button class="smallBtn" @click="changeModal('in')" >clique ici.</button></p>

      <div id="inscription" v-if="inscription">
         <input
          type="password"
          id="confPassword"
          name="confPassword"
          v-model="confPassword"
          placeholder="confirmation de mot de passe"
        /> 
    
        <input
          type="text"
          id="nom"
          name="nom"
          v-model="nom"
          placeholder="nom"
        />

        <input
          type="text"
          id="prenom"
          name="prenom"
          v-model="prenom"
          placeholder="prenom"
        />
        <input
          type="text"
          id="telephone"
          name="telephone"
          v-model="telephone"
          placeholder="téléphone"
        />
        <p>Déjà inscrit ? <button class="smallBtn" @click="changeModal('up')">clique ici.</button></p>
      </div>
      <button id="signInButton" v-if="inscription" @click="inscriptionBase() ; checkForm()">
        S'inscrire
      </button>
      <button id="signUpButton" v-if="connexion " @click="connexionBase() ;checkFormCon()">
        Se connecter
      </button>
       <p v-if="errors" class="listError">champ(s) manquant(s)
    
  </p>
  <p  v-if="this.$store.state.erreur" class="mailError">{{this.$store.state.erreur}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      errors: false,
      nom: "",
      prenom: "",
      mail: "",
      password: "",
      confPassword: "",
      pseudo: "",
      telephone: "",
    };
  },
  name: "Login",
  props: ["revele", "toggleModal", "inscription", "connexion", "titre"],

  methods: {
     checkForm: function () {
      if (this.mail && this.password && this.nom && this.prenom && this.telephone) {
        return true;
      }
     
       if (!this.mail) {
      this.errors =true
        document.getElementById("mail").style.borderColor="red";
      } 
         if (!this.password) {
       this.errors =true
        document.getElementById("password").style.borderColor="red";
      }
      if (!this.nom) {
        this.errors =true
        document.getElementById("nom").style.borderColor="red";
      }
      if (!this.prenom) {
       this.errors =true
         document.getElementById("prenom").style.borderColor="red";
      }
         if (!this.telephone) {
       this.errors =true
        document.getElementById("telephone").style.borderColor="red";
      }

    },
    checkFormCon:function(){
       if (this.mail && this.password) {
        return true;
      }
       this.errors = [];
       if (!this.mail) {
        this.errors =true
        document.getElementById("mail").style.borderColor="red";
      } 
         if (!this.password) {
        this.errors =true
        document.getElementById("password").style.borderColor="red";
      }
    },
    inscriptionBase: function() {
      let info = {
        mail: this.mail,
        password: this.password,
        nom: this.nom,
        prenom: this.prenom,
        telephone: this.telephone,
      };
      
      if(this.mail != '' && this.password != '' && this.nom != '' && this.prenom != '' && this.telephone != ''){ 
        if(this.password != this.confPassword){
          console.log("erreur ")
        } else{
          this.$store.dispatch("inscriptionBase", info)
           .then(this.toggleModal)
       .then(() => this.goConnect)
        .catch((err) => console.log(err));

        }
        } else{
         console.log("il manque un champs")
    }
      this.$store.dispatch("inscriptionBase", info);
    },
    connexionBase: function() {
       if(this.mail != '' && this.password != '' ){
         const mail = this.mail;
         const password = this.password;
      this.$store.dispatch("connexionBase",{mail,password}) 
        .then(this.toggleModal)
       .then(() => this.$router.push("/").catch(()=>{}))
        .catch((err) => console.log(err));
     }
    },
       connexionAdmin: function() {
       if(this.mail != '' && this.password != '' ){
         const mail = this.mail;
         const password = this.password;
      this.$store.dispatch("connexionAdmin",{mail,password}) 
        .then(this.toggleModal)
       .then(() => this.$router.push("/").catch(()=>{}))
        .catch((err) => console.log(err));
     }
    },
    changeModal:function(signState){  
         if (signState === 'up') {
        this.connexion = true;
        this.inscription = false;
        
      }
      if (signState === 'in') {
        this.inscription = true;
        this.connexion = false;
       
      }
    }
  },
};
</script>

<style scoped>
.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
#connexion {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal {
  border-radius: 10px;
  height: auto;
  width: 500px;
  background: #f1f1f1;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: fixed;
  padding: 50px;
  top: 10%;
  display: flex;
  flex-direction: column;
}

#inscription {
  display: flex;
  flex-direction: column;
  z-index: 1000;
}
input {
  margin: 5px;
  padding: 10px;
}
i {
  position: absolute;
  font-size: 20px;
  left: 92%;
  top: 8%;
}
i:hover {
  text-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  font-size: 25px;
  cursor: pointer;
}

button {
  height: 35px;
  width: 100px;
  background-color: #5f5439b9;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  color: white;
}
button:hover {
  transform: translate(5px, 5px);
  background-color: #474130;
  box-shadow: 5px 5px 5px grey;
}
.mailError{
  color : red;
  font-weight: bold;
}
.listError{
font-weight: bold;
list-style: none;
}
.smallBtn{
  height: 20px;
  width: auto;
  background : rgba(255, 0, 0, 0);
   border:none;
  cursor: pointer;
  font-weight: unset;
 
  color:black;
}
.smallBtn:hover{
 transform: none;
 background : rgba(255, 0, 0, 0);
 box-shadow:none;
font-weight: bold;

}
</style>
