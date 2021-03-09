<template>
  <div class="home"></div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped  >
#page {
  display: grid;
  width:100%;
  height: 875px;
  grid-template-areas: "head head head"
                       "nav nav nav"
                       "main main main"
                       "foot foot foot";


}

#page > header {
  grid-area: head;
  background-color: #9e2c2c;
}

#page > nav {
  grid-area: nav;
  background-color: #3937ac;
}

#page > main {
  grid-area: main;
  background-color: #53bd45;
}

#page > footer {
  height: 100%;
  grid-area: foot;
  background-color: #c8d86c;
  display:flex;
  flex-direction: column;
  justify-content: end;
}
</style>