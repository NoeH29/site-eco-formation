<template>
  <div id="home">
    <h6>{{session}}</h6>
    <vueper-slides
      fade
      :touchable="false"
      :parallax="parallax"
      autoplay
      :pause-on-hover="pauseOnHover"
      fixedHeight="700px"
    >
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image"
      />
    </vueper-slides>

    <h1>CUISINE MAISON !</h1>
    <p>
      Le restaurant vous accueille avec ses 42 places assises pour savourer
      <span> une cuisine locale </span> composée de produits du terroir (viande
      local, fromage de chèvre, produits de saison..) frais et de qualité.
    </p>
    <p>
      Tout est <span> cuisiné maison </span> et vous pourrez déguster un burger
      du jour différent chaque jour.
    </p>
    <p>
      <span> Le Sah quel plaisir ! </span> est ouvert du lundi au samedi et nous
      disposons d’un parking privé.
    </p>
    <p>
      Retrouver nous aussi en <span> click and collect !</span> Vous pouvez nous
      joindre <a href="/contact">ici !</a>
    </p>
  </div>
</template>
<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "Home",
  data() {
    return {
      pauseOnHover: true,
      autoPlaying: true,
      parallax: 1,
      slides: [
        {
          image: require("@/assets/photoBurger/burger1.jpg"),
        },
        {
          image: require("@/assets/photoBurger/burger2.jpg"),
        },
        {
          image: require("@/assets/photoBurger/burger3.jpg"),
        },
        {
          image: require("@/assets/photoBurger/burger4.jpg"),
        },
        {
          image: require("@/assets/photoBurger/burger5.jpg"),
        },
      ],
      session:this.$store.state.token,
    };
  },
  components: {
    VueperSlides,
    VueperSlide,
  },
  /*computed :{
    gettoken :function(){
    var base64Url = this.$store.state.token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
}*/
  
};
</script>
<style scoped>
p {
  font-size: 20px;
}

span {
  font-weight: bold;
  font-size: 22px;
  color: brown;
}
#slide {
  height: 20%;
}
a {
  font-weight: bold;
  font-size: 22px;
  text-decoration: none;
  color: beige;
}
</style>
