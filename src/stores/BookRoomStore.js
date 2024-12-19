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
            room: { // Default-Werte für die Zimmerdetails
                title: '',
                image: '',
                description: '',
                rooms: 0,
                beds: 0,
                price: 0,
                extras: []
            }
        },
        bookingId: '', // ID der erfolgreichen Buchung
        error: '', // Speichert Fehlernachrichten
        isLoading: false, // Zeigt an, ob ein API-Aufruf läuft
    }),

    actions: {
        setBookingDetails(details) {
            this.bookingDetails = { ...this.bookingDetails, ...details }
            console.log(this.bookingDetails);
        },

        setBookingId(id) {
            this.bookingId = id;
        },

        async fetchRoomDetails() {
            if (!this.bookingDetails.roomId) {
                console.error("Keine Zimmer-ID vorhanden!");
                return;
            }
            try {
                this.isLoading = true;
                const response = await axios.get(`${baseUrl}/rooms/${this.bookingDetails.roomId}`);
                this.bookingDetails.room = {
                    title: response.data.title || '',
                    image: response.data.image || '',
                    description: response.data.description || '',
                    rooms: response.data.rooms || 0,
                    beds: response.data.beds || 0,
                    price: response.data.price || 0,
                    extras: response.data.extras || []
                };
            } catch (error) {
                console.error("Fehler beim Abrufen der Zimmerdetails:", error);
                this.error = "Fehler beim Laden der Zimmerdetails. Bitte versuchen Sie es später erneut.";
            } finally {
                this.isLoading = false;
            }
        },

        async bookRoom() {
            this.error = "";

            // Validierung der Eingabefelder
            for (let field in this.bookingDetails) {
                const formData = this.bookingDetails[field];
                if (formData === '' || formData === null) {
                    this.error += `Bitte ${field} ausfüllen. <br>`;
                }
            }

            if (this.error !== "") return;

            // API URL für Buchung
            const apiUrl = `${baseUrl}/room/${this.bookingDetails.roomId}/from/${this.bookingDetails.fromDate}/to/${this.bookingDetails.toDate}`;
            const data = {
                firstname: this.bookingDetails.firstname,
                lastname: this.bookingDetails.lastname,
                birthdate: this.bookingDetails.birthdate,
                email: this.bookingDetails.email,
                breakfast: this.bookingDetails.breakfast
            };

            try {
                this.isLoading = true;
                const response = await axios.post(apiUrl, data, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                if (response.status === 201) {
                    this.setBookingId(response.data.id);
                    this.error = null;
                } else {
                    this.error = `Fehler: ${response.status} - ${response.data.message || 'Beim Abrufen der Informationen ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.'}`;
                }
            } catch (error) {
                console.error('API Error:', error);
                this.error = error.response?.data?.message || 'Beim Abrufen der Informationen ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.';
            } finally {
                this.isLoading = false;
            }
        },
    },
});