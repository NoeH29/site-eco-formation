<template>
  <div id="burger">
    <div v-for="burger in burgers" v-bind:key="burger.id">
      
      {{burger}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Burger",
  data: function () {
    return {
      burgers: [],
    };
  },
  mounted: function () {
    this.http
      .get("http://localhost:9000/burgers")
      .then((response) => {
        console.log(response.data);
        this.burgers = response.data;
        console.log(this.burgers);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
</style>