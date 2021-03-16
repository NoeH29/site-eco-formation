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
      </div>
      <button id="signInButton" v-if="inscription" @click="inscriptionBase">
        S'inscrire
      </button>
      <button id="signUpButton" v-if="connexion" @click="connexionBase">
        Se connecter
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      nom: "",
      prenom: "",
      mail: "",
      password: "",
      confPassword: "",
      telephone: "",
    };
  },
  name: "Login",
  props: ["revele", "toggleModal", "inscription", "connexion", "titre"],
  
  methods: {
    inscriptionBase: function() {
      let info = {
        mail: this.mail,
        password: this.password,
        nom: this.nom,
        prenom: this.prenom,
        telephone: this.telephone,
      };
      this.$store.dispatch("inscriptionBase", info);
    },
    connexionBase: function() {
      const mail = this.mail;
      const password = this.password;
      this.$store
        .dispatch("connexionBase", { mail, password })
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
    },
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
}
.modal {
  border-radius: 10px;
  height: 300px;
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
}
input {
  margin: 10px;
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
  height: 25px;
  width: 100px;
  background-color: #5f5439b9;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}
button:hover {
  transform: translate(5px, 5px);
  background-color: #474130;
  box-shadow: 5px 5px 5px grey;
}
</style>
