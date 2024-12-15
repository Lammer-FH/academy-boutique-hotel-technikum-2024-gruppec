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
                const token = response.data.token;
                this.token = token;
                this.userEmail = email;

                // Speichere den Token im localStorage
                localStorage.setItem("jwt", token);
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
