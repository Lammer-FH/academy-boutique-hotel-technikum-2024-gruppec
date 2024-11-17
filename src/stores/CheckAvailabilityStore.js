import { defineStore } from 'pinia';
import axios from 'axios';

export const useCheckAvailabilityStore = defineStore('CheckAvailabilityStore', {
    state: () => ({
        availabilityDetails: {
            roomId: null,
            fromDate: null,
            toDate: null,
        },
        isAvailable: null, // Speichert, ob das Zimmer verfügbar ist (true/false)
        error: null,       // Speichert Fehlernachrichten
        isLoading: false,  // Zeigt an, ob ein API-Aufruf läuft
    }),

    actions: {
        setAvailabilityDetails(details) {
            this.availabilityDetails = { ...this.availabilityDetails, ...details };
        },

        async checkAvailability() {
            const { roomId, fromDate, toDate } = this.availabilityDetails;

            // Validierung
            if (!roomId || !fromDate || !toDate) {
                this.error = 'Bitte Zimmer-ID, Start- und Enddatum angeben.';
                this.isAvailable = null;
                return;
            }

            const apiUrl = `https://boutique-hotel.helmuthlammer.at/api/v1/room/${roomId}/from/${fromDate}/to/${toDate}`;

            this.isLoading = true;
            this.error = null;

            try {
                const response = await axios.get(apiUrl);

                if (response.data.state === 200) {
                    this.isAvailable = true;
                } else {
                    this.isAvailable = false;
                }
                this.error = null;
            } catch (error) {
                console.error('API Error:', error);
                this.error = error.response?.data?.message || 'Ein Fehler ist aufgetreten.';
                this.isAvailable = null;
            } finally {
                this.isLoading = false;
            }
        },
    },
});
