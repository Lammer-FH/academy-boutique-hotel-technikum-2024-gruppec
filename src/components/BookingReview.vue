<script>
export default {
  name: "BookingReview",
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    formData: {
      type: Object,
      required: true,
    },
    roomDetails: {
      type: Object,
      required: true,
    }
  },
  emits: ['confirm', 'cancel'],
};
</script>

<template>
  <b-modal :visible="visible" @hide="$emit('cancel')" title="Buchung prüfen" size="lg">
    <p><strong>Zimmer:</strong> {{ roomDetails.roomId }}</p>
    <p><strong>Zeitraum:</strong> {{ roomDetails.fromDate }} bis {{ roomDetails.toDate }}</p>
    <p><strong>Vorname:</strong> {{ formData.firstname }}</p>
    <p><strong>Nachname:</strong> {{ formData.lastname }}</p>
    <p><strong>Geburtsdatum:</strong> {{ formData.birthdate }}</p>
    <p><strong>E-Mail:</strong> {{ formData.email }}</p>
    <p><strong>Frühstück:</strong> {{ formData.breakfast ? 'Ja' : 'Nein' }}</p>

    <b-button variant="success" @click="$emit('confirm')">Buchung abschließen</b-button>
    <b-button variant="secondary" @click="$emit('cancel')">Abbrechen</b-button>
  </b-modal>

</template>

<style scoped>

</style>