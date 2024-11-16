<script>

import { useBookRoomStore } from '@/stores/BookRoomStore';
import BookingForm from '@/components/BookingForm.vue';
import Footer from "@/components/Footer.vue";
export default {
  name: "BookRoomView",
  components: {
    BookingForm, Footer
  },
  setup() {
    const store = useBookRoomStore();
    const handleBooking = async (formData) => {
      store.setBookingDetails(formData);

      if (formData.email !== formData.confirmEmail) {
        store.error = 'Die E-Mails stimmen nicht überein.';
        return;
      }

      // Buchung absenden
      await store.bookRoom();
    };

    return { store, handleBooking };
  },
};

</script>

<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col cols="12" md="8">
        <h1 class="text-center mb-4">Zimmer buchen</h1>

        <!-- Buchungsformular -->
        <BookingForm @submitBooking="handleBooking" />

        <!-- Bestätigung -->
        <b-alert
            v-if="store.bookingId"
            variant="success"
            class="mt-4"
            dismissible
        >
          Buchung erfolgreich! Ihre Buchungs-ID lautet: <strong>{{ store.bookingId }}</strong>.
        </b-alert>

        <!-- Fehleranzeige -->
        <b-alert
            v-if="store.error"
            variant="danger"
            class="mt-4"
            dismissible
        >
          <strong>Fehler:</strong> {{ store.error }}
        </b-alert>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
body {
  padding-top: 70px;
}
h1 {
  font-size: 2rem;
  font-weight: bold;
  padding-top: 100px;
}
</style>