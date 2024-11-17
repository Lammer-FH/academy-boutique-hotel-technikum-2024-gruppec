<script>
import { useRoomAvailabilityStore } from "@/stores/RoomAvailabilityStore";
import successIcon from "@/assets/success-icon.png";
import failureIcon from "@/assets/failure-icon.png";

export default {
  name: "Modal",
  props: {
    roomId: { type: Number, required: true },
    fromDate: { type: String, required: true },
    toDate: { type: String, required: true },
  },
  data() {
    return {
      isVisible: false, // Modal startet geschlossen
      modalTitle: "Verfügbarkeitsprüfung",
      modalMessage: "",
      isAvailable: null,
      successIcon,
      failureIcon,
    };
  },
  methods: {
    openModal() {
      this.isVisible = true; // Modal wird angezeigt
      this.modalMessage = "Überprüfe Verfügbarkeit..."; // Nachricht, während auf die Antwort gewartet wird
      this.checkAvailability(); // API-Aufruf starten
    },
    closeModal() {
      this.isVisible = false; // Modal schließen
    },
    async checkAvailability() {
      const store = useRoomAvailabilityStore();

      try {
        // API-Aufruf ausführen
        await store.checkAvailability(this.roomId, this.fromDate, this.toDate);

        // Verfügbarkeitsstatus setzen
        this.isAvailable = store.isAvailable;
        this.modalMessage = this.isAvailable
            ? "Das Zimmer ist verfügbar!"
            : "Das Zimmer ist leider nicht verfügbar.";

      } catch (error) {
        // Fehlerbehandlung, wenn der API-Aufruf fehlschlägt
        this.modalMessage = "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.";
        this.isAvailable = false; // Fehler bedeutet, dass das Zimmer nicht verfügbar ist
      }
    },
    bookRoom() {
      console.log("Zimmer buchen Button gedrückt");
    }
  }
};
</script>

<template>
  <b-modal v-model="isVisible" hide-footer>
    <h3 class="text-center mb-3">{{ modalTitle }}</h3>
    <div class="text-center">
      <!-- Success or Failure Icon -->
      <img
          v-if="isAvailable !== null"
          :src="isAvailable ? successIcon : failureIcon"
          :alt="isAvailable ? 'Success' : 'Failure'"
          class="status-icon"
      />
    </div>
    <p class="text-center">{{ modalMessage }}</p>

    <b-button v-if="isAvailable" @click="bookRoom" variant="success" class="w-100 mt-3">
      Zimmer buchen
    </b-button>

    <b-button @click="closeModal" variant="secondary" class="w-100 mt-3">
      Schließen
    </b-button>
  </b-modal>
</template>

<style scoped>
.status-icon {
  width: 50px;
  height: 50px;
  margin-bottom: 15px;
}

.text-center {
  text-align: center;
}
</style>
