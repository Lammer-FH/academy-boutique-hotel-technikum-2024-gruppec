import { defineStore } from 'pinia';
import axios from 'axios';

const baseUrl = 'https://boutique-hotel.helmuth-lammer.at/api/v1';

export const useRegisterStore = defineStore('RegisterStore', {
    state: () => ({
        registerDetails: {
            firstname: '',
            lastname: '',
            email: '',
            birthdate: '',
            username: '',
            password: '',
        },
    }),

    actions: {
        async registerUser() {
            const apiUrl = `${baseUrl}/register`;

            try {
                const response = await axios.post(apiUrl, this.registerDetails, {
                    headers: { 'Content-Type': 'application/json' },
                });

                console.log('User registered successfully:', response.data);
                return response.data; // Erfolg zurückgeben
            } catch (error) {
                console.error('Error during registration:', error.response?.data || error.message);
                throw error.response?.data?.message || 'Unbekannter Fehler'; // Fehlermeldung an UI senden
            }
        },
    },
});
