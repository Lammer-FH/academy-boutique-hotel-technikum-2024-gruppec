<script>
import { useBookRoomStore } from "@/stores/BookRoomStore";
import Footer from "@/components/Footer.vue";
import Contact from "@/components/Contact.vue";
import Directions from "@/components/Directions.vue";
import Map from "@/components/Map.vue";
import ConfirmationRoomInfo from "@/components/ConfirmationRoomInfo.vue";
import { onMounted, computed } from "vue";

export default {
  name: "ConfirmationView",
  components: {
    ConfirmationRoomInfo,
    Directions,
    Contact,
    Footer,
    Map,
  },

  methods: {
    printPage() {
      window.print(); // Öffnet den Druckdialog
    },
  },

  setup() {
    const store = useBookRoomStore();

    // Zimmerdetails laden, wenn die Komponente gemountet wird
    onMounted(() => {
      if (!store.bookingDetails.room) {
        store.fetchRoomDetails(); // Stellt sicher, dass die Zimmerdetails geladen werden
      }
    });

    return {
      bookedRoom: computed(() => store.bookingDetails.room),
      booking_Id: computed(() => store.bookingId),
      from_Date: computed(() => store.bookingDetails.fromDate),
      to_Date: computed(() => store.bookingDetails.toDate),
      first_name: computed(() => store.bookingDetails.firstname),
      last_name: computed(() => store.bookingDetails.lastname),
      birth_date: computed(() => store.bookingDetails.birthdate),
      email: computed(() => store.bookingDetails.email),
      breakfast: computed(() => store.bookingDetails.breakfast),
    };
  },
};


</script>

<template>
  <b-container class="impressum-container text-start mt-5 pt-5 mx-auto px-5">
    <b-row>
      <b-col>
        <div>
          <h1>Dankeschön {{ first_name }} {{ last_name }} für Ihre Buchung!</h1>
          <h2>Die Buchungsnummer lautet: {{ booking_Id }}</h2>
          <p>
            Wir freuen uns auf Ihren Besuch im Zeitraum von
            <strong>{{ from_Date }}</strong> bis
            <strong>{{ to_Date }}</strong> in unserem Nerd-Hotel <3!
          </p>
        </div>

        <!-- Hotelzimmerdetails -->
        <div v-if="bookedRoom && bookedRoom.title">
          <h4>{{ bookedRoom.title }}</h4>
          <img :src="bookedRoom.image" :alt="bookedRoom.title" class="img-fluid mb-3"/>
          <p><strong>Beschreibung:</strong> {{ bookedRoom.description }}</p>
          <p><strong>Zimmeranzahl:</strong> {{ bookedRoom.rooms }}</p>
          <p><strong>Betten:</strong> {{ bookedRoom.beds }}</p>
          <p><strong>Preis pro Nacht:</strong> {{ bookedRoom.price }} €</p>
          <p><strong>Extras:</strong> {{ bookedRoom.extras.join(", ") }}</p>
        </div>
        <div v-else>
          <p>Zimmerdetails werden geladen...</p>
        </div>

        <!-- Gastinformationen -->
        <div>
          <h4><strong>Ihre Angaben:</strong></h4>
          <p>Vorname: {{ first_name }}</p>
          <p>Nachname: {{ last_name }}</p>
          <p>Geburtsdatum: {{ birth_date }}</p>
          <p>E-Mail: <a :href="`mailto:${email}`">{{ email }}</a></p>
          <p>Frühstück inkludiert: {{ breakfast ? "Ja" : "Nein" }}</p>
        </div>

        <!-- Kontakt und Anfahrt -->
        <Directions/>
        <Contact/>

        <!-- Karte -->
        <div>
          <Map/>
        </div>
        <br/>

        <!-- Buttons -->
        <b-button @click="printPage" variant="primary">Bestätigung drucken</b-button>
        <b-button variant="secondary">Zurück zur Startseite</b-button>
      </b-col>
    </b-row>
  </b-container>
  <Footer/>
</template>

<style scoped>
</style>
