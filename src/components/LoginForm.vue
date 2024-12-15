<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    onLogin() {
      console.log("E-Mail:", this.email);
      console.log("Passwort:", this.password);
      // Später: API-Aufruf hier einfügen
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
  </b-form>
</template>

<style scoped>

</style>