<script>
import { BAccordion, BAccordionItem } from 'bootstrap-vue-3';
import CheckAvailability from "@/components/CheckAvailability.vue";

export default {
  name: 'Accordion',
  components: {
    CheckAvailability,
    BAccordion,
    BAccordionItem
  },
  props: {
    description: { type: String, required: true },
    roomId: {type: Number, required: true}
  }
};
</script>

<template>
  <b-accordion>
    <!-- Zimmerbeschreibung Accordion -->
    <b-accordion-item title="Zimmerbeschreibung">
      <p>{{ description }}</p>
    </b-accordion-item>

    <!-- Verfügbarkeit Accordion -->
    <b-accordion-item title="Buchung">
      <p>Überprüfen Sie hier die Verfügbarkeit dieses Zimmers</p>
      <CheckAvailability :room-id="roomId" />
    </b-accordion-item>
  </b-accordion>
</template>

<style scoped>


</style>
