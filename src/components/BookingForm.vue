<script>
import {computed, reactive, ref} from 'vue'
import { storeToRefs } from "pinia"
import { useCheckAvailabilityStore } from "@/stores/CheckAvailabilityStore"
import { useBookRoomStore } from "@/stores/BookRoomStore"

export default {
  name: 'BookingForm',
  //computed: {
  //  checkAvailability() {
  //    return checkAvailability
  //  }
  //},
  setup(){
    console.log("setup");
    const checkAvailabilityStore = useCheckAvailabilityStore()
    console.log(useCheckAvailabilityStore())
    //console.log(checkAvailabilityStore)
    //const {availDetails} = storeToRefs(checkAvailabilityStore.availabilityDetails)
    //const {storeAvail} = storeToRefs(checkAvailabilityStore)
    //console.log(availDetails)
    //console.log(storeAvail)
    //const { toDate } = ref(checkAvailabilityStore.availabilityDetails.toDate)
    //const { fromDate } = storeToRefs(checkAvailabilityStore.availabilityDetails.fromDate)
    //const roomId = computed(() => checkAvailabilityStore.availabilityDetails.roomId)
    //console.log(fromDate)
    //console.log(toDate)
    //console.log(roomId)
  },
  data() {
    console.log("data")
    return {
      roomId: 101, // TODO: Referenz aus useCheckAvailabilityStore übernehmen.
      fromDate: '2027-07-02', // TODO: Referenz aus useCheckAvailabilityStore übernehmen.
      toDate: '2027-07-05', // TODO: Referenz aus useCheckAvailabilityStore übernehmen.
      formData: {
        firstname: '',
        lastname: '',
        email: '',
        confirmEmail: '',
        breakfast: true,
      },
    };
  },
  methods: {
    handleReview() {
      // Validierung (optional)
      if (this.formData.email !== this.formData.confirmEmail) {
        alert('Emails stimmen nicht überein!');
        return;
      }

      // Daten an den Elternteil oder einen anderen Store übergeben
      const BookRoomStore = useBookRoomStore();
      BookRoomStore.setBookingDetails({
        roomId: this.roomId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        ...this.formData,
      });

      // const isLoading = computed(() => BookRoomStore.isLoading);

      // Optional: Emit-Event für den Elternteil
      this.$emit('reviewData', this.formData);

      //return {
      //  isLoading
      //};
    },
  },
};

</script>

<template>
  <b-container>
    <b-form @submit.prevent="handleReview">
      <b-row>
        <b-col cols="12">
          <b-form-group label="Zimmer-ID:" label-for="room-id">
            <b-form-input v-model="this.roomId" disabled></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group label="Zeitraum:" label-for="date-range">
            <b-form-input v-model="this.fromDate" type="date" disabled></b-form-input>
            <b-form-input v-model="this.toDate" type="date" disabled></b-form-input>
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
          <b-button type="submit" variant="primary" :disabled="isLoading">
            {{ isLoading ? 'Laden...' : 'Buchung prüfen' }} <!-- TODO: fix reference -->
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-container>

</template>

<style scoped>

.b-container {
  margin-top: 20px;
}

</style>