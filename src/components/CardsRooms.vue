<script>

export default {
  name: "CardsRooms",
  props: {
    title: { type: String, required: true },
    imgSrc: { type: String, required: true },
    imgAlt: { type: String, default: "Room Image" },
    description: { type: String, required: true },
    link: { type: String, default: "#" },
    buttonText: { type: String, default: "View Details" },
    roomNumber: { type: Number, required: true },
    beds: { type: Number, required: true },
    pricePerNight: { type: Number, required: true },
    extras: {
      type: Object,
      required: true,

    },
  },
  data() {
    return {
      // Icon-Mapping für die Extras
      iconMap: {
        bathroom: { iconClass: "bi bi-shower", label: "Badezimmer" },
        minibar: { iconClass: "bi bi-cup-straw", label: "Minibar" },
        television: { iconClass: "bi bi-tv", label: "Fernseher" },
        livingroom: { iconClass: "bi bi-door-closed", label: "Wohnzimmer" },
        aircondition: { iconClass: "bi bi-snow", label: "Klimaanlage" },
        wifi: { iconClass: "bi bi-wifi", label: "WLAN" },
        breakfast: { iconClass: "bi bi-egg-fried", label: "Frühstück" },
        handicappedAccessible: { iconClass: "bi bi-person-wheelchair", label: "Barrierefrei" },
      },
    };
  },
};
</script>

<template>
  <b-card
      tag="article"
      class="mb-2"
      style="max-width: 50rem;"
  >
    <!--:title="title"-->
    <!--:img-src="imgSrc"-->
    <!--:img-alt="imgAlt"-->
    <!--img-top-->


    <!-- Bildcontainer für gleiche Größe-->
    <div class="image-container">
      <img :src="imgSrc" :alt="imgAlt" class="room-image"/>
    </div>

    <!-- Titel unter dem Bild -->
    <h3>{{ title }}</h3>

    <b-card-text>
      <p>Zimmernummer: {{ roomNumber }}</p>
      <p>Betten: {{ beds }}</p>
      <p>Preis: {{ pricePerNight }} €</p>
      <h5>Extras:</h5>
      <div class="extras-icons">
        <i v-if="extras.bathroom" class="bi bi-shower" title="Badezimmer"></i>
        <i v-if="extras.minibar" class="bi bi-cup-straw" title="Minibar"></i>
        <i v-if="extras.television" class="bi bi-tv" title="Fernseher"></i>
        <i v-if="extras.livingroom" class="bi bi-door-closed" title="Wohnzimmer"></i>
        <i v-if="extras.aircondition" class="bi bi-snow" title="Klimaanlage"></i>
        <i v-if="extras.wifi" class="bi bi-wifi" title="WLAN"></i>
        <i v-if="extras.breakfast" class="bi bi-egg-fried" title="Frühstück"></i>
        <i v-if="extras.handicappedAccessible" class="bi bi-person-wheelchair" title="Barrierefrei"></i>
      </div>
      {{ description }}
    </b-card-text>
    <b-button :href="link" variant="primary">{{ buttonText }}</b-button>
  </b-card>
</template>


<style scoped>
.extras-icons {
  display: flex;
  gap: 15px;
  margin-top: 10px;
  font-size: 1.2rem;
  color: #5a5a5a;
}

/* Stellt sicher, dass das Bild die gesamte Breite ausfüllt */
.image-container {
  width: 100%;
  height: 400px; /* Höhe des Bildes anpassen */
  overflow: hidden; /* Überschüssige Bildteile werden abgeschnitten */
  margin-bottom: 20px; /* Abstand zum Text unten */
}


.room-image {
  width: 100%; /* Bild auf volle Breite setzen */
  height: 100%; /* Bild auf volle Höhe setzen */
  object-fit: cover; /* Bild wird skaliert und abgeschnitten, damit es immer die gesamte Fläche ausfüllt */
  object-position: center; /* Bild bleibt mittig ausgerichtet */
}



</style>