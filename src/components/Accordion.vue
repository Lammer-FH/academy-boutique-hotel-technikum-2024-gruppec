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
    description: {type: String, required: true},
    roomId: {type: Number, required: true}  // Prop 'roomId' angepasst
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
      <!-- Umwandlung von roomId in eine Zahl, bevor es an CheckAvailability übergeben wird -->
      <CheckAvailability :roomId="Number(roomId)" />
    </b-accordion-item>
  </b-accordion>
</template>


<style scoped>
</style>
