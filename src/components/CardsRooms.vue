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
      // Beispiel für extras:
      // { bathroom: 1, minibar: 1, television: 1, livingroom: 0, aircondition: 1, wifi: 1, breakfast: 1, handicappedAccessible: 1 }
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
      :title="title"
      :img-src="imgSrc"
      :img-alt="imgAlt"
      img-top
      tag="article"
      style="max-width: 50rem; image-height: 200px;"
      class="mb-2"
  >
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

</style>