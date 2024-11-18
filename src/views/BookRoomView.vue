<script>

import { useBookRoomStore } from '@/stores/BookRoomStore';
import BookingForm from '@/components/BookingForm.vue';
import Footer from "@/components/Footer.vue";
import BookingConfirmation from "@/components/BookingConfirmation.vue";
import BookingReview from "@/components/BookingReview.vue";
import { ref } from 'vue';
export default {
  name: "BookRoomView",
  components: {
    BookingForm, Footer, BookingConfirmation, BookingReview
  },
  setup() {
    const store = useBookRoomStore();

    const roomId = store.bookingDetails.roomId || 10; // Standardwert für roomId
    const fromDate = store.bookingDetails.fromDate || '2027-07-02';
    const toDate = store.bookingDetails.toDate || '2027-07-04';

    const isSuccessModalVisible = ref(false);
    const isReviewModalVisible = ref(false);
    const formData = ref({});

    const handleReview = (data) => {
      formData.value = data;
      isReviewModalVisible.value = true;
    };

    const finalizeBooking = async () => {
      store.setBookingDetails(formData.value);
      await store.bookRoom();

      if (store.bookingId) {
        isReviewModalVisible.value = false; // Schließt das Review-Modal
        isSuccessModalVisible.value = true; // Öffnet das Erfolgsmodal
      }
    };

    /*
    const handleBooking = async (formData) => {
      console.log(formData);
      store.setBookingDetails(formData);
      if (formData.email !== formData.confirmEmail) {
        store.error = 'Die E-Mails stimmen nicht überein.';
        return;
      }
      // Buchung absenden
      await store.bookRoom();
      if (store.bookingId) {
        isSuccessModalVisible.value = true;
      }
    };

     */

    return { store, roomId, fromDate, toDate, handleReview, isSuccessModalVisible, isReviewModalVisible, formData, finalizeBooking };
  },
};

</script>

<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col cols="12" md="8">
        <h1 class="text-center mb-4">Zimmer buchen</h1>

        <!-- Buchungsformular -->
        <BookingForm
            :roomId= roomId
            :fromDate="fromDate"
            :toDate="toDate"
            @reviewData="handleReview"/>
        <!-- Review Modal -->
        <BookingReview
            :visible="isReviewModalVisible"
            :formData="formData"
            :roomDetails="store.bookingDetails"
            @confirm="finalizeBooking"
            @cancel="isReviewModalVisible = false"
        />

        <!-- Erfolgsmodal -->
        <BookingConfirmation
            :visible="isSuccessModalVisible"
            :bookingId="store.bookingId"
            @update:visible="isSuccessModalVisible = $event"
        />

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