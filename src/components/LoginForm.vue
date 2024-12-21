<script>
import {useAuthStore} from "@/stores/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async onLogin() {
      const authStore = useAuthStore();
      this.isLoading = true;
      this.error = null;
      try {
        await authStore.login(this.email, this.password);
        this.$emit("login-success", this.email);
      } catch (err) {
        this.error = err.message || "Login fehlgeschlagen: Ungültige E-Mail oder Passwort."; // Fehlermeldung
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<template>
  <b-form @submit.prevent="onLogin">
    <b-form-group label="E-Mail" label-for="email">
      <b-form-input
          id="email"
          type="email"
          v-model="email"
          placeholder="E-Mail eingeben"
          required
      ></b-form-input>
    </b-form-group>
    <b-form-group label="Passwort" label-for="password">
      <b-form-input
          id="password"
          type="password"
          v-model="password"
          placeholder="Passwort eingeben"
          required
      ></b-form-input>
    </b-form-group>
    <b-button type="submit" variant="primary">Anmelden</b-button>
    <!-- Fehlermeldung -->
    <p v-if="error" class="text-danger mt-2">{{ error }}</p>
  </b-form>
</template>

<style scoped>

</style>