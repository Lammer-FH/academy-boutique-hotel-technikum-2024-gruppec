import { defineStore } from 'pinia';
import axios from 'axios';

const baseUrl = 'https://boutique-hotel.helmuth-lammer.at/api/v1';

export const useCheckAvailabilityStore = defineStore('CheckAvailabilityStore', {
    state: () => ({
        availabilityDetails: {
            roomId: 1,
            fromDate: "null",
            toDate: "null",
        },
        isAvailable: false, // Immer als boolean (false)
        error: null, // Fehlernachrichten
        isLoading: false, // Zeigt an, ob ein API-Aufruf läuft
    }),

    actions: {
        setAvailabilityDetails(details) {
            // Sicherstellen, dass roomId eine Zahl ist, falls sie als String übergeben wird
            if (typeof details.roomId === 'string') {
                details.roomId = parseInt(details.roomId, 10);
            }

            // Details richtig setzen, auch wenn bereits etwas vorhanden ist
            this.availabilityDetails = { ...this.availabilityDetails, ...details };
            console.log("set availability")
            console.log(this.availabilityDetails)
        },

        async checkAvailability() {
            const { roomId, fromDate, toDate } = this.availabilityDetails;

            // Validierung
            if (!roomId || !fromDate || !toDate) {
                this.error = `Fehler: Es fehlen folgende Daten:
        ${!roomId ? 'Zimmer-ID ' : ''}
        ${!fromDate ? 'Startdatum ' : ''}
        ${!toDate ? 'Enddatum' : ''}`;
                return;
            }

            console.log("Verfügbarkeitsprüfung für:", roomId, fromDate, toDate);

            // URL korrekt zusammensetzen
            const apiUrl = `${baseUrl}/room/${roomId}/from/${fromDate}/to/${toDate}`;
            console.log("API URL:", apiUrl);

            this.isLoading = true;
            this.error = null;

            try {
                const response = await axios.get(apiUrl);

                // Überprüfen der Antwort auf "available"
                if (response.data.available === true) {
                    this.isAvailable = true;
                } else {
                    this.isAvailable = false;
                }
                this.error = null;
            } catch (error) {
                console.error('API Error:', error);
                this.error = error.response?.data?.message || 'Ein Fehler ist aufgetreten.';
                this.isAvailable = false;
            } finally {
                this.isLoading = false;
            }
        }

    },
});
