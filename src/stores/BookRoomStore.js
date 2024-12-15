import { defineStore } from 'pinia';
import axios from 'axios';
import { useAuthStore } from "@/stores/auth"; //u7

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
        bookingId: '', // ID der erfolgreichen Buchung
        error: '', // Speichert Fehlernachrichten
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

            this.error = ""

            for(let field in this.bookingDetails) {
                const formData = this.bookingDetails[field]
                if(formData === '' || formData === null) {
                    this.error += "Bitte "+field+ "ausfüllen <br>"
                }
            }
            if(this.error !== "") return ;

            // URL mit Platzhaltern ersetzen bei Testdaten
            const apiUrl = `${baseUrl}/room/${this.bookingDetails.roomId}/from/${this.bookingDetails.fromDate}/to/${this.bookingDetails.toDate}`;
            console.log("apiURL: ")
            console.log(apiUrl)

            const data = {
                firstname: this.bookingDetails.firstname,
                lastname: this.bookingDetails.lastname,
                birthdate: this.bookingDetails.birthdate,
                email: this.bookingDetails.email,
                breakfast: this.bookingDetails.breakfast
            };

            //Login während Buchung - speicherung der Buchungsdaten je User - dynamischer Header
            const headers = { "Content-Type": "application/json" };
            const authStore = useAuthStore();
            if (authStore.isLoggedIn) {
                headers.Authorization = `Bearer ${authStore.token}`;
                console.log("JWT im Header:", headers.Authorization);
            }
            console.log("Headers:", headers); // Debugging Header

            try {
                const response = await axios.post(apiUrl, data, { headers: headers });
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
