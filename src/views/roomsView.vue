<script>
import {defineComponent} from "vue";
import CardsRooms from "@/components/CardsRooms.vue"
import Footer from "@/components/Footer.vue";

import Zimmer_1_AlanTuring from "@/assets/RoomImages/Zimmer_1_AlanTuring.png";
import Zimmer_2_GraceHopper from "@/assets/RoomImages/Zimmer_2_GraceHopper.webp";
import Zimmer_3_AdaLovelace from "@/assets/RoomImages/Zimmer_2_GraceHopper.webp"; // Richtiges Bild hinterlegen
import Zimmer_4_JohnVonNeumann from "@/assets/RoomImages/Zimmer_4_JohnVonNeumann.jpg";
import Zimmer_5_MargaretHamilton from "@/assets/RoomImages/Zimmer_5_MargaretHamilton.jpg";
import Zimmer_6_SteveWozniak from "@/assets/RoomImages/Zimmer_5_MargaretHamilton.jpg"; // Richtiges Bild hinterlegen
import Zimmer_7_TimBernersLee from "@/assets/RoomImages/Zimmer_7_TimBernersLee.png";
import Zimmer_8_LinusTorvalds from "@/assets/RoomImages/Zimmer_8_LinusTorvalds.png";
import Zimmer_9_IsaacAsimov from "@/assets/RoomImages/Zimmer_9_IsaacAsimov.png";
import Zimmer_10_KatherineJohnson from "@/assets/RoomImages/Zimmer_10_KatherineJohnson.png";

const roomImages = [
  {src: Zimmer_1_AlanTuring, alt: "Alan Turing"},
  {src: Zimmer_2_GraceHopper, alt: "Grace Hopper"},
  {src: Zimmer_3_AdaLovelace, alt: "Ada Lovelace"},
  {src: Zimmer_4_JohnVonNeumann, alt: "John von Neumann"},
  {src: Zimmer_5_MargaretHamilton, alt: "Margaret Hamilton"},
  {src: Zimmer_6_SteveWozniak, alt: "Steve Wozniak"},
  {src: Zimmer_7_TimBernersLee, alt: "Tim Berners Lee"},
  {src: Zimmer_8_LinusTorvalds, alt: "Linus Torvalds"},
  {src: Zimmer_9_IsaacAsimov, alt: "Isaac Asimov"},
  {src: Zimmer_10_KatherineJohnson, alt: "Katherine Johnson"},

];

export default defineComponent({
  name: 'Rooms',
  components: {Footer, /*roomImages,*/ CardsRooms},
  data() {
    return {
      roomImages: roomImages,
    }
  }
})
</script>

<template>

  <div class="room-info">
    <h3>Unsere Zimmer</h3>
    <h2>Jeder Raum ein Unikat</h2>
    <p>Jedes unserer Zimmer ist nach einer bedeutenden Persönlichkeit aus der Computergeschichte benannt und liebevoll gestaltet,
      um die Inspiration und Innovation dieser Pioniere widerzuspiegeln.
      Von Grace Hopper bis Alan Turing – jedes Zimmer bietet eine individuelle Atmosphäre, die sowohl Komfort als auch einen Hauch von Nerd-Kultur vermittelt.
      Wir laden Sie ein, Ihren inneren Nerd zu entdecken, während Sie in einem unserer thematischen Zimmer verweilen und
      die Verbindung zwischen Geschichte und Technologie hautnah erleben!
    </p>
  </div>


  <!-- Container für die Karten -->
  <div class="cards-container">
    <!-- Dynamisches Rendering der Karten mit v-for -->
    <CardsRooms
        v-for="(room, index) in roomImages"
        :key="index"
        :title="room.alt"
        description="Ein modernes, technologiegetriebenes Hotelzimmer, das die Vision der jeweiligen Persönlichkeit feiert."
        :img-src="room.src"
        :img-alt="room.alt"
        button-text="Verfügbarkeit prüfen"
    />
  </div>

  <Footer />
</template>


<!--<div class="cards-container">
  <b-row>
    <CardsRooms
        title="Grace Hopper"
        description="Ein modernes, technologiegetriebenes Hotelzimmer, das die Vision von Grace Hopper, einer der bedeutendsten Computerwissenschaftlerinnen des 20. Jahrhunderts, feiert. Inspiriert von ihrem bahnbrechenden Beitrag zur Programmierung und dem Konzept der Programmiersprachen kombiniert das Zimmer innovative Technologien mit einem zeitgemäßen Design. Klare Linien und ein stilvolles, funktionales Interieur schaffen eine einladende Atmosphäre, die Kreativität und Produktivität fördert. Mit intelligenten Lösungen und modernsten Annehmlichkeiten bietet das Zimmer eine perfekte Symbiose aus Komfort und technologischem Fortschritt."
        :img-src="roomImages[1].src"
        img-alt="Bild von Zimmer Grace Hopper"
        button-text="Verfügbarkeit prüfen">
    </CardsRooms>


  </b-row>
</div>

  <Footer>
  </Footer>
</template>-->

<style scoped>
.room-info {
  max-width: 1000px;
  margin: 50px auto;
  text-align: left;
  overflow-wrap: break-word;
}

.room-info h2,
.room-info h3 {
  text-align: center;
  margin-bottom: 30px;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2-Spalten-Layout */
  gap: 16px; /* Abstand zwischen den Karten */
  max-width: 1200px;
  margin: 0 auto;
}

.room-card {
  background-color: #f3f3f3;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}
</style>

<!--.room-info {
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

</style>-->