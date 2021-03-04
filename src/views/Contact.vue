<template>
  <div id="contact">
    <div id="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25200.80518988492!2d-4.4907713699943015!3d48.40070330108194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4816bbe1d9925b93%3A0xc6488358179c30ab!2sBrest!5e0!3m2!1sfr!2sfr!4v1614847253492!5m2!1sfr!2sfr"
        width="100%"
        height="100%"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
    <div id="liens">
      <a href="#">
        <img src="../assets/facebook.png" alt="" />
      </a>git
      <a href="#">
        <img src="../assets/instagram.png" alt="" />
      </a>
      <a href="#">
        <img src="../assets/twitter.png" alt="" />
      </a>
      <a href="#">
        <img src="../assets/mail.png" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#map {
  width: 100%;
  height: 90vh;
}
#liens {
  width: 60%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px;
}
img {
  cursor: pointer;
}
img {
  height: 10vh;
}
</style>