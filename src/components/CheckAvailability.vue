<script>
import { useCheckAvailabilityStore } from "@/stores/CheckAvailabilityStore";

export default {
  name: "CheckAvailability",
  props: {
    roomId: {type: Number, required: true},
  },
  data() {
    return {
      fromDate: "",
      toDate: "",
    };
  },
  computed: {
    // Zugriff auf Store-Status
    resultMessage() {
      const store = useCheckAvailabilityStore();
      if (store.error) {
        return store.error;
      }
      if (store.isAvailable === true) {
        return "Das Zimmer ist im angegebenen Zeitraum verfügbar.";
      } else if (store.isAvailable === false) {
        return "Das Zimmer ist im angegebenen Zeitraum nicht verfügbar.";
      }
      return null;
    },
    isLoading() {
      return useCheckAvailabilityStore().isLoading;
    },
  },
  methods: {
    async checkRoomAvailability() {
      if (!this.fromDate || !this.toDate) {
        alert("Bitte Start- und Enddatum eingeben.");
        return;
      }

      const store = useCheckAvailabilityStore();
      store.setAvailabilityDetails({
        roomId: this.roomId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      });
      await store.checkAvailability();
    },
  },
};
</script>

<template>
  <div class="check-availability">
    <label for="from-date">Anreisedatum: </label>
    <input type="date" id="from-date" v-model="fromDate" />

    <label for="to-date">Abreisedatum: </label>
    <input type="date" id="to-date" v-model="toDate" />

    <button :disabled="isLoading" @click="checkRoomAvailability">
      {{ isLoading ? "Prüfen..." : "Verfügbarkeit prüfen" }}
    </button>

    <!-- Verfügbarkeit anzeigen -->
    <div v-if="resultMessage" class="availability-result">
      <p>{{ resultMessage }}</p>
    </div>
  </div>
</template>



<style scoped>
.check-availability {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

button {
  padding: 8px 12px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.availability-result {
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
}
</style>
