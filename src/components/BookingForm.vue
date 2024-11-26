<script>

import { useCheckAvailabilityStore } from "@/stores/CheckAvailabilityStore"
import { useBookRoomStore } from "@/stores/BookRoomStore"
import router from "@/router";

export default {
  name: 'BookingForm',
  data: () => {
    return {
      room_ID: useCheckAvailabilityStore().availabilityDetails.roomId,
      from_Date: useCheckAvailabilityStore().availabilityDetails.fromDate,
      to_Date: useCheckAvailabilityStore().availabilityDetails.toDate,
      //roomId: 101, // TODO: Referenz aus useCheckAvailabilityStore übernehmen.
      //fromDate: '2027-07-02', // TODO: Referenz aus useCheckAvailabilityStore übernehmen.
      //toDate: '2027-07-05', // TODO: Referenz aus useCheckAvailabilityStore übernehmen.
      bookRoomStore: useBookRoomStore(),
      formData: {
        firstname: '',
        lastname: '',
        birthdate: '',
        email: '',
        confirmEmail: '',
        breakfast: true,
      }
    };
  },
  methods: {
    useCheckAvailabilityStore,
    handleReview() {
      if (this.formData.email !== this.formData.confirmEmail) {
        alert('Emails stimmen nicht überein!');
        return;
      }

      this.bookRoomStore.setBookingDetails({
        roomId: this.room_ID,
        fromDate: this.from_Date,
        toDate: this.to_Date,
        ...this.formData,
      });
      router.push('/BookingReviewView')
      // const isLoading = computed(() => BookRoomStore.isLoading);

      // Optional: Emit-Event für den Elternteil
      //this.$emit('reviewData', this.formData);

      //return {
      //  isLoading
      //};
    },
    booking() {
      useBookRoomStore().setBookingDetails({
        roomId: this.room_ID,
        fromDate: this.from_Date,
        toDate: this.to_Date,
        ...this.formData,
      });
      this.$router.push('/BookingReviewView')
    }
  },
};

</script>

<template>
  <b-container>
    <b-form @submit.prevent="handleReview">
      <b-row>
        <b-col cols="12">
          <b-form-group label="Zimmer-ID:" label-for="room-id">
            <b-form-input v-model="useCheckAvailabilityStore().availabilityDetails.roomId" enabled>{{this.room_ID}}</b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group label="Zeitraum:" label-for="date-range">
            <b-form-input v-model="this.from_Date" type="date" enabled></b-form-input>
            <b-form-input v-model="this.to_Date" type="date" enabled></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="6">
          <b-form-group label="Vorname:" label-for="firstname-input" label-cols-lg="4">
            <b-form-input
                id="firstname-input"
                v-model="formData.firstname"
                required
                placeholder="Vorname eingeben"
            ></b-form-input>
          </b-form-group>
        </b-col>

        <b-col cols="12" md="6">
          <b-form-group label="Nachname:" label-for="lastname-input" label-cols-lg="4">
            <b-form-input
                id="lastname-input"
                v-model="formData.lastname"
                required
                placeholder="Nachname eingeben"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12" md="6">
          <b-form-group label="Geburtsdatum:" label-for="birthdate-input" label-cols-lg="4">
            <b-form-input
                id="birthdate-input"
                v-model="formData.birthdate"
                type="date"
                required
            ></b-form-input>
          </b-form-group>
        </b-col>

        <b-col cols="12" md="6">
          <b-form-group label="E-Mail:" label-for="email-input" label-cols-lg="4">
            <b-form-input
                id="email-input"
                v-model="formData.email"
                type="email"
                required
                placeholder="E-Mail eingeben"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12" md="6">
          <b-form-group label="E-Mail bestätigen:" label-for="confirm-email-input" label-cols-lg="4">
            <b-form-input
                id="confirm-email-input"
                v-model="formData.confirmEmail"
                type="email"
                required
                placeholder="E-Mail erneut eingeben"
            ></b-form-input>
          </b-form-group>
        </b-col>

        <b-col cols="12">
          <b-form-group label="Frühstück gewünscht:" label-for="breakfast-checkbox">
            <b-form-checkbox
                id="breakfast-checkbox"
                v-model="formData.breakfast"
            >
              Frühstück hinzufügen
            </b-form-checkbox>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="text-center">
          <b-button @click="booking()" variant="primary">Buchung überprüfen</b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-container>

</template>

<style scoped>

</style>