<script>
import {useBookRoomStore} from "@/stores/BookRoomStore";
import Footer from "@/components/Footer.vue";

export default {
  name: "ConfirmationView",
  components: {
    Footer
  },
  data: () => {
    return {
      booking_Id: useBookRoomStore().bookingId,
      from_Date: useBookRoomStore().bookingDetails.fromDate,
      to_Date: useBookRoomStore().bookingDetails.toDate,
      first_name: useBookRoomStore().bookingDetails.firstname,
      last_name: useBookRoomStore().bookingDetails.lastname,
    };
  }
}
</script>

<template>

  <b-container>
    <b-row>
      <b-col>
        <h1>Dankeschön {{this.first_name}} {{this.last_name}} für Ihre Buchung!</h1>
        <h2>Die Buchungsnummer lautet: {{this.booking_Id}}</h2>
        <p>Wir freuen uns auf Ihren Besuch im Zeitraum von {{this.from_Date}} bis {{this.to_Date}} in unserem Nerd-Hotel <3!</p>
        <b-button>Anfahrtsbeschreibung</b-button>
      </b-col>
    </b-row>
  </b-container>


</template>

<style scoped>

</style>