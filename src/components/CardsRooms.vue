<script>

export default {
  name: "CardsRooms",
  props: {
    title: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    imgAlt: {
      type: String,
      default: "Room Image",
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: "#",
    },
    buttonText: {
      type: String,
      default: "View Details",
    },
    roomNumber: {
      type: Number,
      required: true,
    },
    beds: {
      type: Number,
      required: true,
    },
    pricePerNight: {
      type: Number,
      required: true,
    },
    extras: {
      type: Object,
      required: true,
    },
  },
};

</script>

<template>
  <b-card
    :title="title"
    :img-src="imgSrc"
    :img-alt="imgAlt"
    img-top
    tag="article"
    style="max-width: 50rem;"
    class="mb-2"
    >
    <b-card-text>
      <p>Zimmernummer: {{ roomNumber }}</p>
      <p>Betten: {{ beds }}</p>
      <p>Preis: {{ pricePerNight }} €</p>
      <h5>Extras:</h5> <!--hier müssen dann noch diese Icons importiert werden!-->
      {{ description }}
    </b-card-text>
    <b-button :href="link" variant="primary">{{ buttonText }}</b-button>
  </b-card>

</template>

<style scoped>


</style>