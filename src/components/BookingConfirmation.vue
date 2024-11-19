<script>
export default {
  name: "BookingConfirmation",
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    bookingId: {
      type: String,
      required: true,
    },
  },
  emits: ['update:visible'],
  methods: {
    closeModal() {
      this.$emit('update:visible', false);
    }
  }
};
</script>

<template>

  <b-modal :visible="visible" @hide="closeModal" title="Buchung erfolgreich!" size="lg">
    <p>Ihre Buchung war erfolgreich! Ihre Buchungs-ID ist: <strong>{{ bookingId }}</strong></p>
    <b-button variant="primary" href="/anfahrt" target="_blank">Zur Anfahrt</b-button>
    <b-button variant="secondary" @click="closeModal">Schließen</b-button>
  </b-modal>


</template>

<style scoped>

</style>