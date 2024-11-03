<script>
import {defineComponent} from "vue";
import HotelCard from "@/components/Cards.vue";
import Zimmer7BernersLee from "@/assets/Karussell/Zimmer7_Berners-Lee.png";
import Footer from "@/components/Footer.vue";

const roomImages = [
  {src: Zimmer7BernersLee, alt: "Zimmer7"},
];

export default defineComponent({
  name: 'Rooms',
  components: {HotelCard, Footer},
  data() {
    return {
      roomImages: roomImages,
    }
  }
})
</script>

<template>

  <div class="cards-container">
    <b-row>
      <b-col cols="12" md="4" lg="4">
        <HotelCard
        title="Tim Berners-Lee"
        description="Ein modernes, technologiegetriebenes Hotelzimmer, das die Vision von Tim Berners-Lee, dem Erfinder des World Wide Web, feiert. Mit klaren Linien und einer eleganten, minimalistischen Ästhetik bietet das Zimmer eine harmonische Mischung aus Komfort und Funktionalität."
        :imgSrc="roomImages[0].src"
        imgAlt="Bild von Tim Berners-Lee"
        button-text="Verfügbarkeit prüfen"
        />
      </b-col>
    </b-row>

  </div>

  <Footer>
  </Footer>

</template>

<style scoped>

.cards-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

/* Stil für einzelne Karten */
.cards-container .b-col {
  max-width: 300px; /* Maximale Breite für die Cards */
  margin: 10px; /* Abstand zwischen den Cards */
}

</style>