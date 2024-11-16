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
            birthdate: '',
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
            const { roomId, fromDate, toDate, firstname, lastname, birthdate, email, breakfast } = this.bookingDetails;

            //temporäre testdaten:
            const testRoomId = roomId || '10';
            const testFromDate = fromDate || '2027-07-01';
            const testToDate = toDate || '2027-07-02';

            if (!testRoomId || !testFromDate || !testToDate || !firstname || !lastname || !birthdate || !email) {
                this.error = 'Bitte alle Felder ausfüllen.';
                return;
            }

            // URL mit Platzhaltern ersetzen
            const apiUrl = `https://boutique-hotel.helmuth-lammer.at/api/v1/room/${testRoomId}/from/${testFromDate}/to/${testToDate}`;

            const data = {
                firstname,
                lastname,
                birthdate,
                email,
                breakfast, // Frühstück hinzufügen (true/false)
            };

            this.isLoading = true;
            this.error = null;

            try {
                const response = await axios.post(apiUrl, data, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                if (response.status === 201) {
                    this.bookingId = response.data.id;
                    this.error = null;
                } else {
                    this.error = `Fehler: ${response.status} - ${response.data.message || 'Unbekannter Fehler'}`;
                }
            } catch (error) {
                console.log('API Error:', error);
                this.error = error.response?.data?.message || 'Ein Fehler ist aufgetreten.';
            } finally {
                this.isLoading = false;
            }
        },
    },
});
