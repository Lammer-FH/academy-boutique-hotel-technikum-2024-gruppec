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
    const isModalVisible = ref(false);
    const isAvailableLocal = ref(false);
    const modalMessage = ref("");
    const isBookable = ref(false);

    const minDate = computed(() => {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    });

    const isLoading = computed(() => store.isLoading);

    const checkRoomAvailability = async () => {
      if (!fromDate.value || !toDate.value) {
        alert("Bitte Start- und Enddatum eingeben.");
        return;
      }

      const startDate = new Date(fromDate.value);
      const endDate = new Date(toDate.value);

      // Überprüfe, ob das Enddatum vor dem Startdatum liegt
      if (startDate > endDate) {
        alert("Das Enddatum darf nicht vor dem Startdatum liegen.");
        return;
      }

      // Überprüfe, ob das Startdatum gleich dem Enddatum ist
      if (startDate.getTime() === endDate.getTime()) {
        alert("Das Start- und Enddatum dürfen nicht gleich sein.");
        return;
      }

      store.setAvailabilityDetails({
        roomId: props.roomId,
        fromDate: fromDate.value,
        toDate: toDate.value,
      });

      try {
        await store.checkAvailability();

        // Verfügbarkeit prüfen und Modal entsprechend einstellen
        isAvailableLocal.value = store.isAvailable ?? false;
        modalMessage.value = isAvailableLocal.value
            ? "Das Zimmer ist verfügbar! Möchten Sie jetzt buchen?"
            : "Das Zimmer ist leider nicht verfügbar.";

        isBookable.value = isAvailableLocal.value;

        // Modal immer öffnen, unabhängig vom Ergebnis
        isModalVisible.value = true;
      } catch (error) {
        console.error("Fehler bei der Verfügbarkeitsprüfung:", error);
        modalMessage.value = "Es ist ein Fehler aufgetreten.";
        isAvailableLocal.value = false;
        isBookable.value = false;
        isModalVisible.value = true;
      }
    };

    const handleModalClose = () => {
      isModalVisible.value = false;
    };

    return {
      fromDate,
      toDate,
      isLoading,
      checkRoomAvailability,
      isModalVisible,
      modalMessage,
      isAvailableLocal,
      isBookable,
      handleModalClose,
      minDate
    };
  },
};
</script>

<template>
  <div class="check-availability">
    <label for="from-date">Anreisedatum:</label>
    <!-- Setze das heutige Datum als minimalen Wert für das Anreisedatum -->
    <input type="date" id="from-date" v-model="fromDate" class="form-control" :min="minDate" />

    <label for="to-date">Abreisedatum:</label>
    <!-- Setze das heutige Datum als minimalen Wert für das Abreisedatum -->
    <input type="date" id="to-date" v-model="toDate" class="form-control" :min="minDate" />

    <button :disabled="isLoading" @click="checkRoomAvailability" class="btn btn-primary">
      {{ isLoading ? "Prüfen..." : "Verfügbarkeit prüfen" }}
    </button>

    <!-- Modal-Komponente -->
    <Modal
        v-model="isModalVisible"
        :message="modalMessage"
        :is-available="isAvailableLocal"
        :is-bookable="isBookable"
        @close="handleModalClose"
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
