<script>
import { ref, computed } from 'vue';
import { useCheckAvailabilityStore } from "@/stores/CheckAvailabilityStore";
import Modal from "@/components/Modal.vue";

export default {
  name: "CheckAvailability",
  components: { Modal },
  props: {
    roomId: { type: Number, required: true }
  },
  setup(props) {
    const store = useCheckAvailabilityStore();
    const fromDate = ref("");
    const toDate = ref("");
    const isModalVisible = ref(false); // Zustand des Modals
    const isAvailableLocal = ref(false); // Lokale Kopie für Verfügbarkeit
    const modalMessage = ref(""); // Nachricht für Modal
    const isBookable = ref(false); // Zustand für Buchungsbutton

    const isLoading = computed(() => store.isLoading);

    const checkRoomAvailability = async () => {
      // Sicherstellen, dass Start- und Enddatum eingegeben sind
      if (!fromDate.value || !toDate.value) {
        alert("Bitte Start- und Enddatum eingeben.");
        return;
      }

      // Stelle sicher, dass das Enddatum nicht vor dem Startdatum liegt
      const startDate = new Date(fromDate.value);
      const endDate = new Date(toDate.value);

      if (startDate > endDate) {
        alert("Das Enddatum darf nicht vor dem Startdatum liegen.");
        return;
      }

      // Verfügbarkeitsprüfung
      store.setAvailabilityDetails({
        roomId: props.roomId,  // Die Zimmer-ID kommt direkt als Prop
        fromDate: fromDate.value,
        toDate: toDate.value,
      });

      try {
        await store.checkAvailability(); // Verfügbarkeitsprüfung durchführen

        const isAvailable = store.isAvailable ?? false;  // Sicherstellen, dass immer ein Boolean vorliegt
        isAvailableLocal.value = isAvailable;

        // Setze die Modal-Nachricht basierend auf der Verfügbarkeit
        modalMessage.value = isAvailable
            ? "Das Zimmer ist verfügbar! Möchten Sie jetzt buchen?"
            : "Das Zimmer ist leider nicht verfügbar.";

        // Setze den Zustand für den Buchungsbutton
        isBookable.value = isAvailable;

        // Modal anzeigen
        isModalVisible.value = true;
      } catch (error) {
        console.error("Fehler bei der Verfügbarkeitsprüfung:", error);
        modalMessage.value = "Es ist ein Fehler bei der Verfügbarkeitsprüfung aufgetreten.";
        isAvailableLocal.value = false;
        isBookable.value = false;
        isModalVisible.value = true;
      }
    };

    return {
      fromDate,
      toDate,
      isLoading,
      checkRoomAvailability,
      isModalVisible,
      modalMessage,
      isAvailableLocal,
      isBookable
    };
  },
};
</script>

<template>
  <div class="check-availability">
    <label for="from-date">Anreisedatum:</label>
    <input type="date" id="from-date" v-model="fromDate" class="form-control"/>

    <label for="to-date">Abreisedatum:</label>
    <input type="date" id="to-date" v-model="toDate" class="form-control"/>

    <button :disabled="isLoading" @click="checkRoomAvailability" class="btn btn-primary">
      {{ isLoading ? "Prüfen..." : "Verfügbarkeit prüfen" }}
    </button>

    <!-- Modal-Komponente -->
    <Modal
        v-model="isModalVisible"
        :message="modalMessage"
        :is-available="isAvailableLocal"
        :is-bookable="isBookable"
    />
  </div>
</template>

<style scoped>
.check-availability {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-control {
  padding: 10px;
  margin: 5px 0;
}

button {
  padding: 10px 15px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
