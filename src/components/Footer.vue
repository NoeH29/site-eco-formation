<template>
  <div id="foot">
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
  name: "foot",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
#foot {
  background-color: bisque;
  height: 10vh;
}

#liens {
  width: 60%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;

}
img {
  cursor: pointer;
}
img {
  height: 5vh;
}
</style>
