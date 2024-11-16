import { defineStore } from 'pinia';
import axios from 'axios';

export const useBookRoomStore = defineStore('BookRoomStore', {
    state: () => ({
        bookingDetails: {
            roomId: null,
            fromDate: null,
            toDate: null,
            firstname: '',
            lastname: '',
            email: '',
            confirmEmail: '',
            breakfast: false,
        },
        bookingId: null, // ID der erfolgreichen Buchung
        error: null, // Speichert Fehlernachrichten
        isLoading: false, // Zeigt an, ob ein API-Aufruf läuft
    }),

    actions: {
        // Methode zum Setzen der Buchungsdetails
        setBookingDetails(details) {
            this.bookingDetails = { ...this.bookingDetails, ...details };
        },

        // Methode zum Absenden der Buchung
        async bookRoom() {
            const { roomId, fromDate, toDate, firstname, lastname, email, breakfast } = this.bookingDetails;

            // Überprüfe, ob alle benötigten Daten vorhanden sind
            if (!roomId || !fromDate || !toDate || !firstname || !lastname || !email) {
                this.error = 'Bitte alle Felder ausfüllen.';
                return;
            }

            // URL mit Platzhaltern ersetzen
            const apiUrl = `https://boutique-hotel.helmuth-lammer.at/api/v1/room/${roomId}/from/${fromDate}/to/${toDate}`;

            const data = {
                firstname,
                lastname,
                email,
                breakfast, // Frühstück hinzufügen (true/false)
            };

            this.isLoading = true;
            this.error = null;

            try {
                const response = await axios.post(apiUrl, data);
                this.bookingId = response.data.id; // Erfolgreiche Buchung
            } catch (error) {
                this.error = error.response?.data?.message || 'Ein Fehler ist aufgetreten.';
            } finally {
                this.isLoading = false;
            }
        },
    },
});
