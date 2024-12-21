import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        token: localStorage.getItem("jwt") || null,
        userEmail: null,
    }),
    getters: {
        isLoggedIn: (state) => !!state.token,
    },
    actions: {
        async login(email, password) {
            try {
                const response = await axios.post(
                    "https://boutique-hotel.helmuth-lammer.at/api/v1/login",
                    {
                        clientId: email,
                        secret: password,
                    }
                );

                console.log("API Response:", response.data);

                // Die API gibt direkt den Token als String zurück
                const token = response.data;
                console.log("Extracted Token:", token);

                if (!token) {
                    console.error("Token ist null oder undefined!");
                    return;
                }

                // Speichere den Token im Store und localStorage
                this.token = token;
                this.userEmail = email;
                localStorage.setItem("jwt", token);

                console.log("Token in localStorage nach Speicherung:", localStorage.getItem("jwt"));

            } catch (error) {
                console.error("Login fehlgeschlagen:", error);
                throw new Error("Login fehlgeschlagen. Bitte überprüfen Sie Ihre Eingaben.");
            }
        },

        logout() {
            this.token = null;
            this.userEmail = null;
            localStorage.removeItem("jwt");
        },
    },
});
