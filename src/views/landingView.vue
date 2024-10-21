<script>
import Cards from "@/components/cards.vue";
import HotelCard from "@/components/Cards.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "landingView",
  components: {HotelCard, Cards, Footer}
}
</script>

<template>
  <!-- Titelbild -->
  <div class="title-image">
    <img src="@/assets/Titelbild_LandingPage.png"
         alt="Titelbild"
         class="full-width-image"
    />
  </div>


  <!-- Abstand unter dem Titelbild -->
  <div class="spacer"></div>

  <b-container class="mt-4">
    <!-- Erste Zeile mit zwei Cards -->
    <b-row>
      <b-col cols="12" md="6" lg="6">
        <HotelCard
            title="Alan Turing"
            description="Alan Turing war ein britischer Mathematiker, Logiker und Informatiker, der als einer der Väter der modernen Computerwissenschaft gilt."
            img-src="https://picsum.photos/200/150?random=1"
            link=""
            button-text="Jetzt buchen" />
      </b-col>

      <b-col cols="12" md="6" lg="6">
        <HotelCard
            title="Grace Hopper"
            description="Grace Hopper war eine amerikanische Computerwissenschaftlerin und Navy-Offizierin, die als eine der Pionierinnen der Informatik gilt."
            img-src="https://picsum.photos/200/150?random=2"
            link=""
            button-text="Jetzt buchen" />
      </b-col>
    </b-row>

    <!-- Zweite Zeile mit zwei Cards -->
    <b-row>
      <b-col cols="12" md="6" lg="6">
        <HotelCard
            title="Ada Lovelace"
            description="Ada Lovelace, geboren 1815 in London, war eine brillante Mathematikerin und wird oft als die erste Programmiererin der Welt bezeichnet."
            img-src="https://picsum.photos/200/150?random=3"
            link=""
            button-text="Jetzt buchen" />
      </b-col>

      <b-col cols="12" md="6" lg="6">
        <HotelCard
            title="Margaret Hamilton"
            description="Margaret Hamilton war eine amerikanische Computerwissenschaftlerin, die die Software für die Apollo-Raumfahrtprogramme entwickelte."
            img-src="https://picsum.photos/200/150?random=4"
            link=""
            button-text="Jetzt buchen" />
      </b-col>
    </b-row>

    <!-- Dritte Zeile mit zwei Cards -->
    <b-row>
      <b-col cols="12" md="6" lg="6">
        <HotelCard
            title="John von Neumann"
            description="John von Neumann war ein ungarisch-amerikanischer Mathematiker, der 1903 in Budapest geboren wurde und als einer der bedeutendsten Köpfe der modernen Computerwissenschaft gilt."
            img-src="https://picsum.photos/200/150?random=5"
            link=""
            button-text="Jetzt buchen" />
      </b-col>

      <b-col cols="12" md="6" lg="6">
        <HotelCard
            title="Steve Wozniak"
            description="Steve Wozniak, geboren 1950 in Kalifornien, ist ein amerikanischer Computerentwickler und Mitbegründer von Apple Inc."
            img-src="https://picsum.photos/200/150?random=6"
            link=""
            button-text="Jetzt buchen" />
      </b-col>
    </b-row>

    <!-- Vierte Zeile mit zwei Cards -->
    <b-row>
      <b-col cols="12" md="6" lg="6">
        <HotelCard
            title="Tim Berners-Lee"
            description="Tim Berners-Lee wurde 1955 in London geboren und ist ein britischer Informatiker, der als Erfinder des World Wide Web gilt."
            img-src="https://picsum.photos/200/150?random=7"
            link=""
            button-text="Jetzt buchen" />
      </b-col>

      <b-col cols="12" md="6" lg="6">
        <HotelCard
            title="Linus Torvalds"
            description="Linus Torvalds wurde 1969 in Helsinki, Finnland, geboren und ist ein bedeutender Softwareentwickler, der vor allem als Schöpfer des Linux-Betriebssystems bekannt ist."
            img-src="https://picsum.photos/200/150?random=8"
            link=""
            button-text="Jetzt buchen" />
      </b-col>
    </b-row>

    <!-- Fünfte Zeile mit zwei Cards -->
    <b-row>
      <b-col cols="12" md="6" lg="6">
        <HotelCard
            title="Isaac Asimov"
            description="Er war ein berühmter Science-Fiction-Autor und Wissenschaftsvermittler, der mehr als 500 Bücher schrieb, darunter die berühmte „Foundation“-Reihe und die „Robot“-Geschichten."
            img-src="https://picsum.photos/200/150?random=9"
            link=""
            button-text="Jetzt buchen" />
      </b-col>

      <b-col cols="12" md="6" lg="6">
        <HotelCard
            title="Katherine Johnson"
            description="Katherine Johnson wurde 1918 in West Virginia geboren und war eine herausragende Mathematikerin, die entscheidende Beiträge zur Raumfahrttechnik der NASA leistete."
            img-src="https://picsum.photos/200/150?random=10"
            link=""
            button-text="Jetzt buchen" />
      </b-col>
    </b-row>
  </b-container>

  <!-- Map über dem Footer -->
  <div class="map-image">
  <h2 class="map-title">Unser Standort</h2>
    <img src="@/assets/Map.png" alt="Map" class="map-image" />
  </div>

  <Footer>
  </Footer>

</template>

<style scoped>
.title-image {
  width: 100vw; /* Volle Breite des Viewports */
  text-align: center;
  position: relative; /*absolute, damit das Foto am oberen Ende bleibt*/
  left: 50%; /* Positioniert das Foto in die Mitte */
  right: 50%;
  margin-left: -50vw; /* Verschiebt das Foto nach links */
  margin-right: -50vw; /* Verschiebt das Foto nach rechts */
}

.full-width-image {
  width: 100vw; /* Stellt sicher, dass das Bild über die gesamte Breite des Viewports geht */
  height: 16vw; /* Höhe passt sich an, um das Seitenverhältnis beizubehalten */
  object-fit: cover; /* Füllt die Box aus und schneidet ggf. überflüssige Teile ab */
}

.map-image {
  text-align: center; /* Zentriert das Bild */
  margin: 20px 0; /* Abstand über und unter dem Bild */
}

.map-image {
  width: 100%; /* Bild nimmt die volle Breite ein */
  height: auto; /* Höhe wird automatisch angepasst */
}


.map-title {
  font-size: 24px; /* Schriftgröße für den Titel */
  font-weight: bold; /* Fettschrift */
  margin: 80px 0 10px; /* Abstand oben (40px) und unten (10px) */
}


  /* Media Queries für kleinere Bildschirme */
@media (max-width: 768px) {
  .full-width-image {
    height: 30vw; /* Höhe des Bildes für Tablets */
  }

  .spacer {
    height: 30vw; /* Mehr Abstand unter dem Titelbild für Tablets */
  }
}

@media (max-width: 576px) {
  .full-width-image {
    height: 40vw; /* Höhe des Bildes für Handys */
  }

  .spacer {
    height: 12vw; /* Abstand unter dem Titelbild für Handys */
  }
}
</style>