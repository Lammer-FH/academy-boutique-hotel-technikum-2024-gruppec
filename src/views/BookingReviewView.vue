<script>
import {useBookRoomStore} from "@/stores/BookRoomStore";
import BookRoomView from "@/views/BookRoomView.vue";
import Footer from "@/components/Footer.vue";
import router from "@/router";
import ConfirmationView from "@/views/ConfirmationView.vue";

export default {
  name: "BookingReviewView",
  components: {
    BookRoomView, Footer, ConfirmationView
  },

  data: () => {
    return {
      items: [
        {
          room_ID: useBookRoomStore().bookingDetails.roomId,
          from_Date: useBookRoomStore().bookingDetails.fromDate,
          to_Date: useBookRoomStore().bookingDetails.toDate,
          first_name: useBookRoomStore().bookingDetails.firstname,
          last_name: useBookRoomStore().bookingDetails.lastname,
          Geburtsdatum: useBookRoomStore().bookingDetails.birthdate,
          mail: useBookRoomStore().bookingDetails.email,
          breakfast: useBookRoomStore().bookingDetails.breakfast
        }
      ]
    };
  },
  methods: {
    useBookRoomStore,
    sendBooking() {
      console.log("send Booking")
      useBookRoomStore().bookRoom()
      if (useBookRoomStore().error === null){
        router.push('/ConfirmationView')
      } else {
        console.log(useBookRoomStore().error)
      }
    }
  }
}
</script>

<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <div>
          <b-table stacked :items="items"></b-table>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <div>
        <router-link to="/BookRoomView" tag="button">Zurück</router-link>
        <!--<b-button href=“/BookRoomView“ variant="danger">Zurück</b-button>-->
        <b-button variant="success" @click="sendBooking">Buchung abschließen</b-button>  <!--TODO: Verlinkung hinzufügen-->
      </div>
      <div>
        <b-alert show variant="warning">{{useBookRoomStore().error}}</b-alert>
      </div>
    </b-row>
  </b-container>


</template>

<style scoped>

</style>