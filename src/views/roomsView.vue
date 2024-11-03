<script>
import {defineComponent} from "vue";
import CardsRooms from "@/components/CardsRooms.vue"
import Footer from "@/components/Footer.vue";

import Zimmer_2_GraceHopper from "@/assets/RoomImages/Zimmer_2_GraceHopper.webp";

const roomImages = [
  {src: Zimmer_2_GraceHopper, alt: "Zimmer2"},
];

export default defineComponent({
  name: 'Rooms',
  components: {Footer, roomImages, CardsRooms},
  data() {
    return {
      roomImages: roomImages,
    }
  }
})
</script>

<template>

  <div class="room-info">
    <h3>Unserer Zimmer</h3>
    <h2>Jeder Raum ein Unikat</h2>
    <p>Jedes unserer Zimmer ist nach einer bedeutenden Persönlichkeit aus der Computergeschichte benannt und liebevoll gestaltet,
      um die Inspiration und Innovation dieser Pioniere widerzuspiegeln.
      Von Grace Hopper bis Alan Turing – jedes Zimmer bietet eine individuelle Atmosphäre, die sowohl Komfort als auch einen Hauch von Nerd-Kultur vermittelt.
      Wir laden Sie ein, Ihren inneren Nerd zu entdecken, während Sie in einem unserer thematischen Zimmer verweilen und
      die Verbindung zwischen Geschichte und Technologie hautnah erleben!
    </p>
  </div>

<div class="cards-container">
  <b-row>
    <CardsRooms
        title="Grace Hopper"
        description="Ein modernes, technologiegetriebenes Hotelzimmer, das die Vision von Grace Hopper, einer der bedeutendsten Computerwissenschaftlerinnen des 20. Jahrhunderts, feiert. Inspiriert von ihrem bahnbrechenden Beitrag zur Programmierung und dem Konzept der Programmiersprachen kombiniert das Zimmer innovative Technologien mit einem zeitgemäßen Design. Klare Linien und ein stilvolles, funktionales Interieur schaffen eine einladende Atmosphäre, die Kreativität und Produktivität fördert. Mit intelligenten Lösungen und modernsten Annehmlichkeiten bietet das Zimmer eine perfekte Symbiose aus Komfort und technologischem Fortschritt."
        :img-src="roomImages[0].src"
        img-alt="Bild von Zimmer Grace Hopper"
        button-text="Verfügbarkeit prüfen">
    </CardsRooms>

  </b-row>
</div>

  <Footer>
  </Footer>
</template>

<style scoped>

.room-info {
  max-width: 1000px;
  margin: 50px auto;
  text-align: left;
  overflow-wrap: break-word;
}

.room-info h2, .room-info h3 {
  text-align: center;
  margin-bottom: 30px;
}

.cards-container {
  display: flex;
  justify-content: center;


}

</style>