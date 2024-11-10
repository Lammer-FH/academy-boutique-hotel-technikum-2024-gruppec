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
const roomImages = [
  {
    src: Zimmer_1_AlanTuring,
    alt: "Alan Turing",
    roomNumber: 1,
    beds: 2,
    pricePerNight: 120,
    extras: {
      bathroom: 1,
      minibar: 1,
      television: 1,
      livingroom: 0,
      aircondition: 1,
      wifi: 1,
      breakfast: 1,
      handicappedAccessible: 1
    }
  },
  {
    src: Zimmer_2_GraceHopper,
    alt: "Grace Hopper",
    roomNumber: 2,
    beds: 1,
    pricePerNight: 100,
    extras: {
      bathroom: 1,
      minibar: 1,
      television: 1,
      livingroom: 1,
      aircondition: 1,
      wifi: 1,
      breakfast: 1,
      handicappedAccessible: 0
    }
  },
  {
    src: Zimmer_3_AdaLovelace,
    alt: "Ada Lovelace",
    roomNumber: 3,
    beds: 1,
    pricePerNight: 110,
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

  {
    src: Zimmer_4_JohnVonNeumann,
    alt: "John von Neumann",
    roomNumber: 4,
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

  {
    src: Zimmer_5_MargaretHamilton,
    alt: "Margaret Hamilton",
    roomNumber: 5,
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

{
  src: Zimmer_6_SteveWozniak,
  alt: "Steve Wozniak",
  roomNumber: 6,
  beds: 1,
  pricePerNight: 130,
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

{
  src: Zimmer_7_TimBernersLee,
  alt: "Tim Berners Lee",
  roomNumber: 7,
  beds: 1,
  pricePerNight: 140,
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

{
  src: Zimmer_8_LinusTorvalds,
  alt: "Linus Torvalds",
  roomNumber: 8,
  beds: 1,
  pricePerNight: 100,
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

{
  src: Zimmer_9_IsaacAsimov,
  alt: "Isaac Asimov",
  roomNumber: 9,
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
        { id: 1, title: "Alan Turing", imgSrc: Zimmer_1_AlanTuring },
        { id: 2, title: "Grace Hopper", imgSrc: Zimmer_2_GraceHopper },
        { id: 3, title: "Ada Lovelace", imgSrc: Zimmer_3_AdaLovelace },
        { id: 4, title: "John von Neumann", imgSrc: Zimmer_4_JohnVonNeumann },
        { id: 5, title: "Margaret Hamilton", imgSrc: Zimmer_5_MargaretHamilton },
        { id: 6, title: "Steve Wozniak", imgSrc: Zimmer_6_SteveWozniak },
        { id: 7, title: "Tim Berners Lee", imgSrc: Zimmer_7_TimBernersLee },
        { id: 8, title: "Linus Torvalds", imgSrc: Zimmer_8_LinusTorvalds },
        { id: 9, title: "Isaac Asimov", imgSrc: Zimmer_9_IsaacAsimov },
        { id: 10, title: "Katherine Johnson", imgSrc: Zimmer_10_KatherineJohnson },
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
          // Hier wird die lokale Bildquelle zugeordnet
          imgSrc: this.localRoomInfo.find(localRoom => localRoom.id === room.id)?.imgSrc || '',
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
        :title="room.title"
        :img-src="room.imgSrc"
        :img-alt="room.title"
        :description="room.description"
        button-text="Verfügbarkeit prüfen"
        :roomNumber="room.roomNumber"
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

