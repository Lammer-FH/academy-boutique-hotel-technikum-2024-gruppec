<script>
export default {
  name: "ConfirmationRoomInfo",
  props: {
    localTitle: { type: String, required: true },
    imgSrc: { type: String, required: true },
    imgAlt: { type: String, default: "Room Image" },
    description: { type: String, required: true },
    roomsNumber: { type: Number, required: true },
    beds: { type: Number, required: true },
    pricePerNight: { type: Number, required: true },
    extras: { type: Object, required: true },
    id: { type: Number, required: true },
  },
  data() {
    return {
      iconMap: {
        bathroom: { iconClass: "bi bi-badge-wc", label: "Badezimmer" },
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
