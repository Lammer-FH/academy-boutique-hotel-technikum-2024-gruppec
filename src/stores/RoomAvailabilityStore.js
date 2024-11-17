import { defineStore } from 'pinia';
import axios from 'axios';

export const useRoomAvailabilityStore = defineStore('RoomAvailabilityStore', {
    state: () => ({
        roomId: null,
        fromDate: null,
        toDate: null,
        isAvailable: false,
        isLoading: false,
        error: null,
    }),

    actions: {
        // Methode zum Setzen der Verfügbarkeitsdaten
        setAvailabilityDetails({ roomId, fromDate, toDate }) {
            this.roomId = roomId;
            this.fromDate = fromDate;
            this.toDate = toDate;
        },

        // Verfügbarkeitsprüfung via API
        async checkAvailability() {
            // Überprüfen, ob alle nötigen Parameter vorhanden sind
            if (!this.roomId || !this.fromDate || !this.toDate) {
                this.error = 'Bitte alle Felder ausfüllen.';
                return;
            }

            // URL mit Platzhaltern ersetzen
            const apiUrl = `https://boutique-hotel.helmuth-lammer.at/api/v1/room/${this.roomId}/from/${this.fromDate}/to/${this.toDate}`;

            // Setzen von Ladezustand auf true
            this.isLoading = true;
            this.error = null; // Fehler zurücksetzen

            try {
                const response = await axios.get(apiUrl);

                if (response.data.state === 200) {
                    this.isAvailable = true;
                } else {
                    this.isAvailable = false;
                }
            } catch (error) {
                // Fehlerbehandlung, falls die Anfrage fehlschlägt
                console.error('API Fehler:', error.response || error.message);
                this.error = error.response?.data?.message || 'Ein Fehler ist aufgetreten.'; // Fehlernachricht setzen
                this.isAvailable = false;  // Verfügbarkeit auf false setzen
            } finally {
                // Unabhängig vom Ergebnis wird dieser Block ausgeführt
                console.log('Verfügbarkeitsprüfung abgeschlossen.');
                this.isLoading = false;
            }
        }
    }
});
