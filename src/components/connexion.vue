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
      <p v-if="connexion">Pas encore inscrit ? <a href="">clique ici.</a></p>

      <div id="inscription" v-if="inscription">
        <!-- <input
          type="password"
          id="confPassword"
          name="confPassword"
          v-model="confPassword"
          placeholder="confirmation de mot de passe"
        /> -->
    
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
        <p>Déjà inscrit ? <a href="">clique ici.</a></p>
      </div>
      <button id="signInButton" v-if="inscription" @click="inscriptionBase() ; checkForm()">
        S'inscrire
      </button>
      <button id="signUpButton" v-if="connexion " @click="connexionBase ; showIco">
        Se connecter
      </button>
       <p v-if="errors.length">
    <b>Merci de corriger le(s) erreur(s) suivante(s):</b>
    <ul>
      <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
    </ul>
  </p>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      errors: [],
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
      this.errors = [];
       if (!this.mail) {
        this.errors.push('E-mail requis.');
        document.getElementById("mail").style.borderColor="red";
      } 
         if (!this.password) {
        this.errors.push('Mot de passe requis.');
        document.getElementById("password").style.borderColor="red";
      }
      if (!this.nom) {
        this.errors.push('Nom requis.');
        document.getElementById("nom").style.borderColor="red";
      }
      if (!this.prenom) {
        this.errors.push('prenom requis.');
         document.getElementById("prenom").style.borderColor="red";
      }
         if (!this.telephone) {
        this.errors.push('telephone requis.');
        document.getElementById("telephone").style.borderColor="red";
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
        this.$store.dispatch("inscriptionBase", info);
        } else{
         console.log("il manque un champs")
    }
    },
    connexionBase: function() {
      let self = this;
      this.http
        .post("http://localhost:9000/connexion", {
          mail: this.mail,
          password: this.password,
        })
        .then(function(res) {
          console.log(res.data)
          if (res.status === 200) {
            self.$session.start();
            self.$session.set("jwt", res.data);
            //self.http.headers['authorization'] = 'Bearer ' + res.data
          }
        })
        .then(this.toggleModal)
        .then(() => this.$router.push("/").catch(()=>{}))
       // .then(()=>document.location.reload())
        .catch((err) => console.log(err));
      /*this.$store
        .dispatch("connexionBase", { mail, password })
        .then(this.toggleModal)
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));*/
    },
    showIco:function(){
        this.$store.dispatch("show");
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
  height: 440px;
  width: 500px;
  background: #f1f1f1;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: fixed;
  padding: 50px;
  top: 25%;
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
</style>
