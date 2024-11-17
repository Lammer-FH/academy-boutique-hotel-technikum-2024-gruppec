<template>
  <div class="check-availability-container">
    <!-- Eingabefeld für Anreisedatum -->
    <div class="date-input">
      <label for="from-date">Anreisedatum:</label>
      <input type="date" v-model="fromDate" id="from-date" />
    </div>

    <!-- Eingabefeld für Abreisedatum -->
    <div class="date-input">
      <label for="to-date">Abreisedatum:</label>
      <input type="date" v-model="toDate" id="to-date" />
    </div>

    <!-- Button zur Verfügbarkeitsprüfung -->
    <button @click="checkAvailability" :disabled="!fromDate || !toDate">Datum prüfen</button>
  </div>
</template>

<script>
export default {
  name: 'CheckAvailability',
  data() {
    return {
      fromDate: '',  // Anreisedatum
      toDate: ''     // Abreisedatum
    };
  },
  methods: {
    checkAvailability() {
      if (this.fromDate && this.toDate) {
        console.log(`Verfügbarkeit prüfen von ${this.fromDate} bis ${this.toDate}`);
        alert(`Verfügbarkeit von ${this.fromDate} bis ${this.toDate} wird geprüft.`);
      } else {
        alert('Bitte wählen Sie ein Anreise- und Abreisedatum aus!');
      }
    }
  }
};
</script>

<style scoped>
.check-availability-container {
  display: flex;
  align-items: flex-end;  /* Ausrichtung der Elemente am unteren Rand */
  gap: 20px;              /* Abstand zwischen den Eingabefeldern und dem Button */
  padding: 20px;
  background: #ffffff;
  border-radius: 9px;

}

.date-input {
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Vertikale Ausrichtung des Labels und Eingabefelds am unteren Rand */
}

input[type="date"] {
  height: 40px;  /* Höhe der Eingabefelder */
}

button {
  padding: 10px 15px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  height: 40px;  /* Gleiche Höhe wie die Eingabefelder */
  display: inline-block;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
