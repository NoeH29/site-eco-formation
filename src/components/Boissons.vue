<template>
  <div id="boissons">
    <div v-for="boisson in boissons" v-bind:key="boisson.id">
      {{ boisson.nom }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Boissons",
  data: function () {
    return {
      boissons: null,
    };
  },
  mounted: function () {
    this.http
      .get("http://localhost:9000/boissons")
      .then((response) => {
        console.log(response.data);
        this.boissons = response.data.boissons;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
</style>