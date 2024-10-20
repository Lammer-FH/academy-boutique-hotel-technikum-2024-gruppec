<script>
import Cards from "@/components/cards.vue";
import HotelCard from "@/components/Cards.vue";

export default {
  name: "landingView",
  components: {HotelCard, Cards}
}
</script>

<template>
  <b-container class="mt-4">
    <!-- Erste Zeile mit zwei Cards -->
    <b-row>
      <b-col md="6" lg="6">
        <HotelCard
            title="Alan Turing"
            description="Alan Turing war ein britischer Mathematiker, Logiker und Informatiker, der als einer der Väter der modernen Computerwissenschaft gilt."
            img-src="https://picsum.photos/200/150?random=1"
            link=""
            button-text="Jetzt buchen" />
      </b-col>

      <b-col md="6" lg="6">
        <HotelCard
            title="Grace Hopper"
            description="Grace Hopper war eine amerikanische Computerwissenschaftlerin und Navy-Offizierin, die als eine der Pionierinnen der Informatik gilt."
            img-src="https://picsum.photos/200/150?random=2"
            link=""
            button-text="Jetzt buchen" />
      </b-col>
    </b-row>

    <!-- Zweite Zeile mit zwei Cards -->
    <b-row>
      <b-col md="6" lg="6">
        <HotelCard
            title="Ada Lovelace"
            description="Ada Lovelace, geboren 1815 in London, war eine brillante Mathematikerin und wird oft als die erste Programmiererin der Welt bezeichnet."
            img-src="https://picsum.photos/200/150?random=3"
            link=""
            button-text="Jetzt buchen" />
      </b-col>

      <b-col md="6" lg="6">
        <HotelCard
            title="Margaret Hamilton"
            description="Margaret Hamilton war eine amerikanische Computerwissenschaftlerin, die die Software für die Apollo-Raumfahrtprogramme entwickelte."
            img-src="https://picsum.photos/200/150?random=4"
            link=""
            button-text="Jetzt buchen" />
      </b-col>
    </b-row>
  </b-container>


</template>

<style scoped>

</style>