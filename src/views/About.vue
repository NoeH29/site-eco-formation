
<template>
  <div class="about">
    <h1>{{ $store.state.auteur }}</h1>
    <h2>{{ $store.state.bigcount }}</h2>
    <button v-on:click="addbig()">big</button>
  </div>
</template>
<script>
export default {
  methods: {
    addbig() {
      this.$store.dispatch("ajoute1");
    },
  },
};
</script>
