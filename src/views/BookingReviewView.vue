<script>
import {useBookRoomStore} from "@/stores/BookRoomStore";
import BookRoomView from "@/views/BookRoomView.vue";
import Footer from "@/components/Footer.vue";
import router from "@/router";
import ConfirmationView from "@/views/ConfirmationView.vue";
import {useCheckAvailabilityStore} from "@/stores/CheckAvailabilityStore";

export default {
  name: "BookingReviewView",
  setup() {
    const bookRoomStore = useBookRoomStore();

    return {
      bookRoomStore,
      bookingDetails: {
        "Zimmer-ID": bookRoomStore.bookingDetails.roomId,
        "Zeitraum (von)": bookRoomStore.bookingDetails.fromDate,
        "Zeitraum (bis)": bookRoomStore.bookingDetails.toDate,
        "Vorname": bookRoomStore.bookingDetails.firstname,
        "Nachname": bookRoomStore.bookingDetails.lastname,
        "Geburtsdatum": bookRoomStore.bookingDetails.birthdate,
        "E-Mail": bookRoomStore.bookingDetails.email,
        "Frühstück": bookRoomStore.bookingDetails.breakfast ? "Ja" : "Nein",
      },
    };
  },
  methods: {
    sendBooking() {
      this.bookRoomStore.bookRoom();
      if (!this.bookRoomStore.error) {
        router.push("/ConfirmationView");
      } else {
        console.error(this.bookRoomStore.error);
      }
    },
  },
};
</script>
<template>
  <b-container class="mt-5">
    <!-- Überschrift -->
    <b-row class="justify-content-center">
      <b-col cols="12" class="text-center">
        <h2>Buchung überprüfen</h2>
      </b-col>
    </b-row>

    <!-- Buchungsdetails -->
    <b-row class="justify-content-center mt-4">
      <b-col cols="12" md="8">
        <ul class="list-group">
          <li class="list-group-item" v-for="(value, key) in bookingDetails" :key="key">
            <strong>{{ key }}:</strong> {{ value }}
          </li>
        </ul>
      </b-col>
    </b-row>

    <!-- Buttons -->
    <b-row class="justify-content-center mt-4">
      <b-col cols="12" md="6" class="text-center">
        <router-link to="/BookRoomView" tag="button" class="btn btn-danger">Zurück</router-link>
        <b-button variant="success" @click="sendBooking">Buchung abschließen</b-button>
      </b-col>
    </b-row>

    <!-- Fehleranzeige -->
    <b-row class="justify-content-center mt-3">
      <b-col cols="12" md="6">
        <b-alert show variant="warning">{{ bookRoomStore.error }}</b-alert>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.mt-5 {
  margin-top: 5rem; /* Abstand von der Navbar */
}

.text-center {
  text-align: center; /* Zentrierung */
}

.list-group-item {
  padding: 15px;
  font-size: 16px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
}

h2 {
  margin-bottom: 20px;
}
</style>
