<template>
  <div id="contact">
    <div id="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2649.432035504434!2d-4.488085534152338!3d48.390645791479784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4816b958bc4e2ab7%3A0x162867cc8225cf20!2sPlace%20de%20la%20Libert%C3%A9%2C%2029200%20Brest!5e0!3m2!1sfr!2sfr!4v1615374965779!5m2!1sfr!2sfr"
        width="100%"
        height="100%"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
    <div id="info">
      <div id="adresse">
        <h5>Adresse :</h5>
        <p>1 Place de la Liberté, 29200 Brest</p>
      </div>
      <div id="telephone">
        <h5>Telephone :</h5>
        <p>02 99 96 95 94</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#map {
  width: 100%;
  height: 70vh;
}
#info {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 20vh;
  font-size: 20px;
}
</style>