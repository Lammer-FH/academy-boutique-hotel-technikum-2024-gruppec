<script setup>
import HotelCard from "@/components/Cards.vue";
import Footer from "@/components/Footer.vue";
import ImageCarousel from "@/components/ImageCarousel.vue";

// Importiere die Bilder
import HotelAussen from "@/assets/Karussell/Hotel_aussen.png";
import HotelLobby from "@/assets/Karussell/hotel_lobby.png";
import HotelLobby2 from "@/assets/Karussell/hotel_lobby2.png";
import Zimmer7BernersLee from "@/assets/Karussell/Zimmer7_Berners-Lee.png";
import Zimmer8LinusTorvalds from "@/assets/Karussell/Zimmer8_Linus-Torvalds.png";
import Zimmer9IsaacAsimov from "@/assets/Karussell/Zimmer9_Isaac-Asimov.png";
import Zimmer7Bad from "@/assets/Karussell/Zimmer7_Bad.png";
import Zimmer8Bad from "@/assets/Karussell/Zimmer8_Bad.png";
import Zimmer9Bad from "@/assets/Karussell/Zimmer9_Bad.png";
import WellnessBereich from "@/assets/Karussell/Wellness_Bereich.png";
import WellnessBereich2 from "@/assets/Karussell/Wellness_Bereich2.png";
import WellnessBereichAussen from "@/assets/Karussell/Wellness_Bereich_Außen.png";
import WellnessBereichPool from "@/assets/Karussell/Wellness_Bereich_Pool.png";
import GamingRoom from "@/assets/Karussell/gaming_room.png";
import GamingRoom2 from "@/assets/Karussell/gaming_room2.png";

// Erstelle das Array mit den Bild-Imports
const hotelImages = [
  {src: HotelAussen, alt: "First Slide"},
  {src: HotelLobby, alt: "Second Slide"},
  {src: HotelLobby2, alt: "Third Slide"},
  {src: Zimmer7BernersLee, alt: "Fourth Slide"},
  {src: Zimmer8LinusTorvalds, alt: "Fifth Slide"},
  {src: Zimmer9IsaacAsimov, alt: "Sixth Slide"},
  {src: Zimmer7Bad, alt: "Seventh Slide"},
  {src: Zimmer8Bad, alt: "Eighth Slide"},
  {src: Zimmer9Bad, alt: "Ninth Slide"},
  {src: WellnessBereich, alt: "Tenth Slide"},
  {src: WellnessBereich2, alt: "Eleventh Slide"},
  {src: WellnessBereichAussen, alt: "Twelth Slide"},
  {src: WellnessBereichPool, alt: "Thirteenth Slide"},
  {src: GamingRoom, alt: "Fourteenth Slide"},
  {src: GamingRoom2, alt: "Sixteenth Slide"},
];

// Hotelkarten-Daten

const hotelCards = [
  {
    title: "Tim Berners-Lee",
    description:
        "Ein modernes, technologiegetriebenes Hotelzimmer, das die Vision von Tim Berners-Lee, dem Erfinder des World Wide Web, feiert. Mit klaren Linien und einer eleganten, minimalistischen Ästhetik bietet das Zimmer eine harmonische Mischung aus Komfort und Funktionalität.",
    imgSrc: Zimmer7BernersLee,
    imgAlt: "Bild von Tim Berners-Lee",
  },
  {
    title: "Linus Torvalds",
    description:
        "Ein minimalistisches, industriell inspiriertes Hotelzimmer mit subtilen Hommagen an die Open-Source-Welt, einschließlich Linux-Elementen und dem ikonischen Pinguin-Maskottchen Tux, ideal und perfekt für Technik-Enthusiasten sowie kreative Köpfe und digitale Innovatoren.",
    imgSrc: Zimmer8LinusTorvalds,
    imgAlt: "Bild von Linus Torvalds",
  },
  {
    title: "Isaac Asimov",
    description:
        "Ein futuristisches Hotelzimmer, das den Visionen von Isaac Asimov, einem der größten Science-Fiction-Autoren, huldigt. Dieses Zimmer ist der ideale Rückzugsort für Wissenschafts-Fans und kreative Denker, die in eine Welt voller Ideen und Möglichkeiten eintauchen möchten.",
    imgSrc: Zimmer9IsaacAsimov,
    imgAlt: "Bild von Isaac Asimov",
  },
];


</script>

<template>
  <!-- Karussell mit Hotelbildern -->
  <div class="carousel-wrapper">
    <image-carousel :images="hotelImages"/>
  </div>

  <!-- Überschrift und Text zwischen Karussell und Cards -->
  <div class="section-info">
    <h2>Willkommen im Bits & Bytes ****</h2>
    <h4>Wo Innovation auf Nostalgie trifft!</h4>
    <p>
      Tauchen Sie ein in das wohl nerdigste Boutique-Hotel der Welt und erleben Sie ein Refugium für Geeks, Gamer und
      Technikliebhaber. Das <strong>Bits & Bytes</strong> bietet Ihnen mehr als nur eine Übernachtung – es ist ein
      Abenteuer! Hier verbinden sich Komfort, Stil und Technik auf höchstem Niveau.
    </p>

    <h4>Unsere Welt der Pixel und Codes:</h4>
    <p>
      Mit inspirierenden Räumen, die durch Themen aus Gaming, Sci-Fi und digitaler Kultur gestaltet sind, bietet das
      Bits & Bytes ein wahres Fest für alle Sinne. Jeder Raum erzählt seine eigene Geschichte: sei es der charmante
      Retro-Gaming-Flair der 80er, futuristische Designs voller LED-Beleuchtung oder Entspannungsbereiche, die an ein
      Tech-Labor erinnern. Bei uns wird jedes Zimmer zu einer Reise in digitale Welten und nerdige Universen.
    </p>

    <h4>Warum Bits & Bytes?</h4>
    <p>
      Das Bits & Bytes ist der perfekte Rückzugsort für alle, die sich in Technik und Popkultur zu Hause fühlen. Ob Sie
      allein oder mit Freunden anreisen – hier erwartet Sie eine Gemeinschaft von Gleichgesinnten und ein
      unvergleichliches Erlebnis, das Spaß, Kreativität und Komfort verbindet.
    </p>
    <p><em>Erleben Sie das Bits & Bytes Boutique Hotel – Wo digitale Träume Wirklichkeit werden!</em></p>
  </div>

  <!-- Container für die Karten -->
  <div class="cards-container">
    <b-row>
      <b-col v-for="card in hotelCards" :key="card.title" cols="12" md="4" lg="4">
        <HotelCard
            :title="card.title"
            :description="card.description"
            :imgSrc="card.imgSrc"
            :imgAlt="card.imgAlt"
            button-text="Verfügbarkeit prüfen"
        />
      </b-col>
    </b-row>
  </div>

  <Footer/>
</template>

<style scoped>
/* Stil für den Absatz mit Überschrift und Text */
.section-info {
  max-width: 1000px;
  margin: 50px auto;
  text-align: left;
  padding: 0 20px; /* Padding für zusätzlichen Abstand */
  overflow-wrap: break-word; /* Umbrüche an zulässigen Stellen */
}

.section-info h2 {
  font-size: 2.5rem; /* Großer Text für Desktop */
  margin-bottom: 30px;
  color: #557878; /* Optionale Textfarbe */
}

.section-info h4 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #829c9c; /* Optionale Textfarbe */
}

.section-info p {
  font-size: 16px;
  color: #484a4a; /* Optionale Textfarbe */
  max-width: 900px; /* Maximale Breite für Absätze */
}

/* Styling für den Karten-Container */
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
