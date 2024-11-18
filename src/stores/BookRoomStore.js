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
            this.bookingDetails = { ...this.bookingDetails, ...details }
            //console.log(this.bookingDetails)
        },
        setBookingId(id){
          this.bookingId = id
        },
        async bookRoom() {
            const { roomId, fromDate, toDate, firstname, lastname, birthdate, email, breakfast } = this.bookingDetails

            console.log("book room")
            this.isLoading = true;

            if (!roomId || !fromDate || !toDate || !firstname || !lastname || !birthdate || !email) {
                this.error = 'Bitte alle Felder ausfüllen.';
                return;
            }

            // URL mit Platzhaltern ersetzen bei Testdaten
            const apiUrl = `${baseUrl}/room/${roomId}/from/${fromDate}/to/${toDate}`;
            console.log("apiURL: ")
            console.log(apiUrl)

            const data = {
                firstname,
                lastname,
                birthdate,
                email,
                breakfast
            };

            try {
                const response = await axios.post(apiUrl, data, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                if (response.status === 201) {
                    this.setBookingId(response.data.id)
                    //this.bookingId = response.data.id
                    this.error = null
                    console.log("Booking Id:")
                    console.log(this.bookingId)
                } else {
                    this.error = `Fehler: ${response.status} - ${response.data.message || 'Beim Abrufen der Informationen ist ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.'}`
                }
            } catch (error) {
                console.log('API Error:', error)
                this.error = error.response?.data?.message || 'Beim Abrufen der Informationen ist ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.'
            } finally {
                this.isLoading = false
            }
        },
    },
});
