<template>
  <div class="home">
    <section id="page">
      <header>

      </header>

      <nav>

      </nav>

      <main>

      </main>

      <footer>
        <h1>Youri , Noé , Ludo , Kevin</h1>
        <Footer/>
      </footer>

    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";


export default {
  name: "Home",
  components: {
    Footer
,
  },
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