import { defineStore } from 'pinia';
import axios from 'axios';

const baseUrl = 'https://boutique-hotel.helmuth-lammer.at/api/v1';

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
        setBookingDetails(details) {
            this.bookingDetails = { ...this.bookingDetails, ...details };
        },
        async bookRoom() {
            const { roomId, fromDate, toDate, firstname, lastname, birthdate, email, breakfast } = this.bookingDetails;

            //temporäre testdaten:
            const testRoomId = roomId || 10;
            const testFromDate = fromDate || new Date('2027-07-03');
            const testToDate = toDate || new Date('2027-07-04');
            this.isLoading = true;



            if (!testRoomId || !testFromDate || !testToDate || !firstname || !lastname || !birthdate || !email) {
                this.error = 'Bitte alle Felder ausfüllen.';
                return;
            }

            // URL mit Platzhaltern ersetzen bei Testdaten
            const apiUrl = `${baseUrl}/room/${testRoomId}/from/${testFromDate}/to/${testToDate}`;

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
