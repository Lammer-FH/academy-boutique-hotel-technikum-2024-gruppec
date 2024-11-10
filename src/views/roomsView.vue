<script>
import {defineComponent} from "vue";
import axios from "axios";
import CardsRooms from "@/components/CardsRooms.vue"
import Footer from "@/components/Footer.vue";
import Pagination from "@/components/Pagination.vue"; // Pagination importiert
import 'bootstrap-icons/font/bootstrap-icons.css';


import Zimmer_1_AlanTuring from "@/assets/RoomImages/Zimmer_1_AlanTuring.png";
import Zimmer_2_GraceHopper from "@/assets/RoomImages/Zimmer_2_GraceHopper.webp";
import Zimmer_3_AdaLovelace from "@/assets/RoomImages/Zimmer_2_GraceHopper.webp"; // Richtiges Bild hinterlegen (Ric)
import Zimmer_4_JohnVonNeumann from "@/assets/RoomImages/Zimmer_4_JohnVonNeumann.jpg";
import Zimmer_5_MargaretHamilton from "@/assets/RoomImages/Zimmer_5_MargaretHamilton.jpg";
import Zimmer_6_SteveWozniak from "@/assets/RoomImages/Zimmer_5_MargaretHamilton.jpg"; // Richtiges Bild hinterlegen (Marina)
import Zimmer_7_TimBernersLee from "@/assets/RoomImages/Zimmer_7_TimBernersLee.png";
import Zimmer_8_LinusTorvalds from "@/assets/RoomImages/Zimmer_8_LinusTorvalds.png";
import Zimmer_9_IsaacAsimov from "@/assets/RoomImages/Zimmer_9_IsaacAsimov.png";
import Zimmer_10_KatherineJohnson from "@/assets/RoomImages/Zimmer_10_KatherineJohnson.png";

/*
{
  src: Zimmer_10_KatherineJohnson,
  alt: "Katherine Johnson",
  roomNumber: 10,
  beds: 1,
  pricePerNight: 120,
  extras: {
    bathroom: 1,
    minibar: 0,
    television: 1,
    livingroom: 1,
    aircondition: 0,
    wifi: 1,
    breakfast: 0,
    handicappedAccessible: 1,
  },
},

];
*/


export default defineComponent({
  name: 'Rooms',
  components: { Footer, CardsRooms, Pagination },
  data() {
    return {
      roomData: [], // Die dynamischen Zimmerdaten
      localRoomInfo: [
        { id: 1, localTitle: "Alan Turing", imgSrc: Zimmer_1_AlanTuring, description: "Das Zimmer von Alan Turing bringt dich zurück zu den Anfängen der modernen Informatik. In einem stilvoll minimalistischen Ambiente erinnern kryptische Muster und Retro-Details an Turings Pionierarbeit im Codebrechen und der Maschinenentwicklung. Hier kannst du auf Spurensuche gehen – perfekt für alle, die Rätsel und Mathematik lieben!" },
        { id: 2, localTitle: "Grace Hopper", imgSrc: Zimmer_2_GraceHopper, description: "Ein Raum, der den Entdeckergeist von Grace Hopper feiert! Spielerische Elemente wie großformatige Plakate und marineblaue Akzente verweisen auf ihren Einfluss in der Programmiergeschichte und ihrer Zeit in der Navy. Ein inspirierender Raum für Pioniere, die mutig sind und Neues wagen." },
        { id: 3, localTitle: "Ada Lovelace", imgSrc: Zimmer_3_AdaLovelace, description: "Betritt eine Welt voller Eleganz und Logik: Ada Lovelaces Raum vereint klassisches Design mit mathematischer Raffinesse. Florale Details, viktorianische Muster und subtile Anspielungen auf ihre analytische Arbeit machen diesen Raum zu einem Rückzugsort für Visionäre." },
        { id: 4, localTitle: "John von Neumann", imgSrc: Zimmer_4_JohnVonNeumann, description: "Mathematische Präzision trifft hier auf stilvollen Retro-Chic! Dieses Zimmer ist eine Hommage an das Genie von Neumann, dessen Berechnungen das 20. Jahrhundert veränderten. Klare Linien, geometrische Muster und dezente Anspielungen auf seine Berechnungen schaffen eine harmonische Atmosphäre." },
        { id: 5, localTitle: "Margaret Hamilton", imgSrc: Zimmer_5_MargaretHamilton, description: "Mut und Innovation prägen Margaret Hamiltons Zimmer, das Astronautenflair mit Details der Apollo-Ära verbindet. Von retro-futuristischen Lampen bis zu Code-Zeilen an der Wand erinnert alles an Hamiltons Rolle bei der Mondlandung. Ein Raum für Mondträumer und Sternenforscher!" },
        { id: 6, localTitle: "Steve Wozniak", imgSrc: Zimmer_6_SteveWozniak, description: "Ein Raum für Technikbegeisterte: Inspiriert von Wozniaks unkonventionellem Genie, besticht das Zimmer durch Retro-Apple-Vibes und kreative Details. Bunte Elemente und verspielte Technik-Gadgets machen diesen Raum zum perfekten Spot für alle Tüftler und Bastler." },
        { id: 7, localTitle: "Tim Berners Lee", imgSrc: Zimmer_7_TimBernersLee, description: "Dieses Zimmer ist eine Hommage an die grenzenlose Welt des Internets! Klar und vernetzt gestaltet, mit sanften Blau- und Grautönen, bietet der Raum eine Atmosphäre des freien Denkens. Perfekt für jene, die Vernetzung und Informationsaustausch lieben." },
        { id: 8, localTitle: "Linus Torvalds", imgSrc: Zimmer_8_LinusTorvalds, description: "Willkommen im Herzen der Open-Source-Kultur! Das minimalistisch gestaltete Zimmer spiegelt Torvalds’ Linux-Ethos wider: Funktionalität trifft auf schlichte Eleganz. An der Wand prangt ein Code-Fragment – ein Raum, der zum Experimentieren und Erkunden inspiriert." },
        { id: 9, localTitle: "Isaac Asimov", imgSrc: Zimmer_9_IsaacAsimov, description: "In diesem Zimmer verschmilzt Wissenschaft mit Science-Fiction: Asimovs Zukunftsvisionen spiegeln sich in metallic Akzenten, futuristischen Lampen und Bücherregalen voller Klassiker wider. Ein Raum, der zum Träumen und Erkunden neuer Welten einlädt." },
        { id: 10, localTitle: "Katherine Johnson", imgSrc: Zimmer_10_KatherineJohnson, description: "Hier trifft mathematische Präzision auf kosmische Eleganz. Inspiriert von Johnsons Berechnungen für die NASA, ist das Zimmer geprägt von einem modernen Space-Design, das Mut und Entschlossenheit feiert. Perfekt für alle, die sich zu den Sternen hingezogen fühlen!" },
      ],
      currentPage: 1, // die aktuelle Seite
      itemsPerPage: 5, // maximal 5 Zimmer pro Seite
    };
  },
  async created() {
    await this.fetchRoomsData();
  },
  methods: {
    async fetchRoomsData() {
      try {
        // Abrufen der Zimmerdaten aus der API
        const response = await axios.get("https://boutique-hotel.helmuth-lammer.at/api/v1/rooms");

        // Kombinieren der API-Daten mit den lokalen Bilddaten
        this.roomData = response.data.map(room => ({
          ...room,
          // Hier werden lokale Infos zugeordnet
          title: this.localRoomInfo.find(localRoom => localRoom.id === room.id)?.localTitle || '',
          imgSrc: this.localRoomInfo.find(localRoom => localRoom.id === room.id)?.imgSrc || '',
          description: this.localRoomInfo.find(localRoom => localRoom.id === room.id)?.description || 'Kein Beschreibung verfügbar',
          extras: room.extras?.reduce((acc, extra) => {
            const [key, value] = Object.entries(extra)[0];
            acc[key] = value;
            return acc;
          }, {}),
        }));
      } catch (error) {
        console.error("Fehler beim Abrufen der Raumdaten:", error);
      }
    },

    // Methode zum Wechseln der Seiten
    updatePage(page) {
      this.currentPage = page;
    },
  },
  computed: {
    // Berechnung der angezeigten Zimmer auf der aktuellen Seite
    paginatedRooms() {
      if (!this.roomData || this.roomData.length === 0) {
        return []; // Gibt ein leeres Array zurück, wenn keine Zimmerdaten vorhanden sind
      }
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.roomData.slice(start, end); // Filtere die Zimmer für die aktuelle Seite
    },
  },
});

</script>

<template>

  <div class="room-info">
    <h3>Unsere Zimmer</h3>
    <h2>Jeder Raum ein Unikat</h2>
    <p>Jedes unserer Zimmer ist nach einer bedeutenden Persönlichkeit aus der Computergeschichte benannt und liebevoll
      gestaltet,
      um die Inspiration und Innovation dieser Pioniere widerzuspiegeln.
      Von Grace Hopper bis Alan Turing – jedes Zimmer bietet eine individuelle Atmosphäre, die sowohl Komfort als auch
      einen Hauch von Nerd-Kultur vermittelt.
      Wir laden Sie ein, Ihren inneren Nerd zu entdecken, während Sie in einem unserer thematischen Zimmer verweilen und
      die Verbindung zwischen Geschichte und Technologie hautnah erleben!
    </p>
  </div>


  <!-- Container für die Karten -->
  <div class="cards-container">
    <CardsRooms
        v-for="(room, index) in paginatedRooms"
        :key="index"
        :localTitle="room.title"
        :img-src="room.imgSrc"
        :img-alt="room.roomsName"
        :description="room.description"
        button-text="Verfügbarkeit prüfen"
        :roomsNumber="room.roomsNumber"
        :beds="room.beds"
        :pricePerNight="room.pricePerNight"
        :extras="room.extras"
    />
  </div>


  <!-- Pagination-Komponente -->
  <Pagination
      :totalItems="roomData.length"
      :itemsPerPage="itemsPerPage"
      v-model="currentPage"
  />
  <Footer/>

</template>


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

@media (max-width: 768px) {
  .cards-container {
    grid-template-columns: 1fr; /* Bei kleineren Bildschirmen nur eine Spalte */
  }
}


button {
  padding: 8px 12px;
  background-color: #f2f2f2;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  cursor: pointer;
}

button.active {
  background-color: #3498db;
  color: white;
}

button:disabled {
  background-color: #d8d8d8;
  cursor: not-allowed;
}
</style>

