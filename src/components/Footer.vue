<template>

  <div class="footer">
    <h1>{{ msg }}</h1>
    <div id="liens">
      <a href="#">
        <img src="../assets/facebook.png" alt="" />
      </a>
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
export default {
  name: 'footer',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.footer {
  background-color: bisque;
  align-content: flex-end;

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
