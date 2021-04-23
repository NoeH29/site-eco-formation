<template>
  <div id="profil">
    <h1>Profil Utilisateur</h1>

    <!-- <img :src="require('@/assets/photoBurger/Boss_Burger.png')" alt="Burger" /> -->
    <br /><br /><br />
    <p class="titrenom">Nom :</p>
    <div class="nom">
      <p>{{ nom }}</p>
    </div>
    <p class="titreprenom">Prénom :</p>
    <div class="prenom">
      <p>{{ prenom }}</p>
    </div>
    <p class="titretel">Téléphone :</p>
    <div class="telephone">
      <p>{{ telephone }}</p>
    </div>
    <p class="titremail">Email :</p>
    <div class="email">
      <p>{{ mail }}</p>
    </div>
    <p class="titremdp">Mot de passe :</p>
    <div class="mdp">
      <p>{{ mdp }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profil",
  data: function () {
    return {
      mail: null,
      prenom: null,
      nom: null,
      telephone: null,
      mdp: null,
    };
  },
  mounted() {
    console.log(this.$store.state.token);
    let base64Url = this.$store.state.token.split(".")[1];
    let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    let jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    let infoProfil = JSON.parse(jsonPayload);
    console.log(infoProfil);
    this.mail = infoProfil.mail;
    this.nom = infoProfil.nom;
    this.prenom = infoProfil.prenom;
    this.telephone = infoProfil.telephone;
    this.mdp = infoProfil.mdp;
  },
};
</script>

<style scoped>
h1 {
  margin-right: 40px;
  margin-left: 40px;
  color: white;
  border-style: dotted;
  border-width: thick;
}
.nom,
.telephone,
.prenom,
.email,
.mdp {
  margin: 60px;
  padding: 20px;
  border-style: groove;
  background: white;
  margin-right: 350px;
  margin-left: 350px;
}
.p {
  color: white;
  font-size: 25px;
}
.img {
  margin-bottom: 20px;
}
.titrenom,
.titremail,
.titremdp,
.titreprenom,
.titretel {
  border-style: inset;
  color: white;
  font-size: 25px;
  margin-right: 600px;
  margin-left: 600px;
}
</style>