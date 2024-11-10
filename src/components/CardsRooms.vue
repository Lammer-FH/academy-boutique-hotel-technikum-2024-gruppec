<script>
export default {
  name: "CardsRooms",
  props: {
    localTitle: { type: String, required: true },
    imgSrc: { type: String, required: true },
    imgAlt: { type: String, default: "Room Image" },
    description: { type: String, required: true },
    roomsNumber: { type: Number, required: true },
    beds: { type: Number, required: true },
    pricePerNight: { type: Number, required: true },
    extras: { type: Object, required: true },
  },
  data() {
    return {
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
  <b-card :title="localTitle" :img-src="imgSrc" :img-alt="imgAlt" img-top>
    <b-card-text>
      <p>Zimmernummer: {{ roomsNumber }}</p>
      <p>Betten: {{ beds }}</p>
      <p>Preis: {{ pricePerNight }} €</p>
      <h5>Extras:</h5>
      <div class="extras-icons">
        <i
            v-for="(extra, key) in extras"
            :key="key"
            :class="iconMap[key]?.iconClass"
            :title="iconMap[key]?.label"
            v-if="extra"></i>
      </div>
      <p>{{ description }}</p>
    </b-card-text>
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

/* Einheitliche Größe für alle Bilder */
b-card img {
  width: 100%; /* Breite des Bildes anpassen */
  height: 200px; /* Feste Höhe für alle Bilder */
  object-fit: cover; /* Bild füllt das Container aus */
}

</style>