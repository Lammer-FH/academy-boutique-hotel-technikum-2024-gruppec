<script>
import { useRegisterStore } from "@/stores/RegisterStore";
import router from "@/router";

export default {
  name: "RegisterForm",
  data() {
    return {
      registerDetails: {
        firstname: "",
        lastname: "",
        email: "",
        birthdate: "",
        username: "",
        password: "",
      },
      isLoading: false, // Loading-Indikator
      errorMessage: "", // Fehlermeldung für das UI
    };
  },
  methods: {
    validateForm() {
      // Validierung der Eingaben
      if (!this.registerDetails.email.includes("@")) {
        this.errorMessage = "Ungültige E-Mail-Adresse!";
        return false;
      }
      if (this.registerDetails.password.length < 6) {
        this.errorMessage = "Passwort muss mindestens 6 Zeichen lang sein.";
        return false;
      }
      if (new Date(this.registerDetails.birthdate) > new Date()) {
        this.errorMessage = "Geburtsdatum darf nicht in der Zukunft liegen.";
        return false;
      }
      return true;
    },

    async submitForm() {
      this.errorMessage = ""; // Reset Fehler
      if (!this.validateForm()) return; // Formularvalidierung

      const registerStore = useRegisterStore();
      registerStore.registerDetails = { ...this.registerDetails };

      try {
        this.isLoading = true;
        await registerStore.registerUser();
        alert("Registrierung erfolgreich!");
        router.push("/"); // Weiterleitung
      } catch (error) {
        this.errorMessage = error || "Fehler bei der Registrierung. Bitte versuchen Sie es erneut.";
      } finally {
        this.isLoading = false; // Ladezustand beenden
      }
    },
  },
};
</script>

<template>
  <div class="register-form">
    <h1>Registrieren</h1>
    <form @submit.prevent="submitForm">
      <label for="firstname">Vorname:</label>
      <input v-model="registerDetails.firstname" type="text" id="firstname" required />

      <label for="lastname">Nachname:</label>
      <input v-model="registerDetails.lastname" type="text" id="lastname" required />

      <label for="email">E-Mail:</label>
      <input v-model="registerDetails.email" type="email" id="email" required />

      <label for="birthdate">Geburtsdatum:</label>
      <input v-model="registerDetails.birthdate" type="date" id="birthdate" required />

      <label for="username">Benutzername:</label>
      <input v-model="registerDetails.username" type="text" id="username" required />

      <label for="password">Passwort:</label>
      <input v-model="registerDetails.password" type="password" id="password" required />

      <!-- Fehlermeldung anzeigen -->
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

      <!-- Loading-Zustand anzeigen -->
      <button type="submit" :disabled="isLoading">
        {{ isLoading ? "Wird gesendet..." : "Registrieren" }}
      </button>
    </form>
  </div>
</template>

<style scoped>
.register-form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #f9f9f9;
}

h1 {
  text-align: center;
}

form label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

form input {
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

button:disabled {
  background-color: #a5d6a7;
  cursor: not-allowed;
}

.error-message {
  color: red;
  margin-bottom: 15px;
  text-align: center;
}
</style>
