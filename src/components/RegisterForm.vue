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
      this.errorMessage = "";
      if (!this.validateForm()) return;

      const registerStore = useRegisterStore();
      registerStore.registerDetails = { ...this.registerDetails };

      try {
        this.isLoading = true;
        await registerStore.registerUser();
        alert("Registrierung erfolgreich!");
        router.push("/");
      } catch (error) {
        this.errorMessage = error || "Fehler bei der Registrierung.";
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<template>
  <div class="register-form mb-5">
    <h1 class="text-center">Registrieren</h1>
    <b-form @submit.prevent="submitForm">
      <b-form-group label="Vorname" label-for="firstname">
        <b-form-input
            id="firstname"
            v-model="registerDetails.firstname"
            type="text"
            placeholder="Vorname eingeben"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Nachname" label-for="lastname">
        <b-form-input
            id="lastname"
            v-model="registerDetails.lastname"
            type="text"
            placeholder="Nachname eingeben"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="E-Mail" label-for="email-register">
        <b-form-input
            id="email-register"
            v-model="registerDetails.email"
            type="email"
            placeholder="E-Mail eingeben"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Geburtsdatum" label-for="birthdate">
        <b-form-input
            id="birthdate"
            v-model="registerDetails.birthdate"
            type="date"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Benutzername" label-for="username">
        <b-form-input
            id="username"
            v-model="registerDetails.username"
            type="text"
            placeholder="Benutzername eingeben"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Passwort" label-for="password-register">
        <b-form-input
            id="password-register"
            v-model="registerDetails.password"
            type="password"
            placeholder="Passwort eingeben"
            required
        ></b-form-input>
      </b-form-group>

      <!-- Fehlermeldung -->
      <b-alert v-if="errorMessage" variant="danger" show>
        {{ errorMessage }}
      </b-alert>

      <!-- Submit-Button mit Loading-Zustand -->
      <b-button type="submit" variant="primary" :disabled="isLoading">
        {{ isLoading ? "Wird gesendet..." : "Registrieren" }}
      </b-button>
    </b-form>
  </div>
</template>

<style scoped>
  padding: 20px;
  background-color: #f8f9fa;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
