<script>
import { reactive, ref } from 'vue';
export default {
  name: "BookingForm",
  emits: ['submitBooking'],
  setup(props, { emit }) {
    const form = reactive({
      firstname: '',
      lastname: '',
      email: '',
      confirmEmail: '',
      breakfast: false,
    });

    const isLoading = ref(false);

    const submitForm = () => {
      isLoading.value = true;
      // Sende die Daten an die übergeordnete Komponente
      emit('submitBooking', { ...form });
      setTimeout(() => {
        isLoading.value = false; // Simulierte Ladezeit
      }, 1000);
    };

    return { form, submitForm, isLoading };
  },
};
</script>

<template>
  <b-container>
    <b-form @submit.prevent="submitForm">
      <b-row>
        <b-col cols="12" md="6">
          <b-form-group label="Vorname:" label-for="firstname-input" label-cols-lg="4">
            <b-form-input
                id="firstname-input"
                v-model="form.firstname"
                required
                placeholder="Vorname eingeben"
            ></b-form-input>
          </b-form-group>
        </b-col>

        <b-col cols="12" md="6">
          <b-form-group label="Nachname:" label-for="lastname-input" label-cols-lg="4">
            <b-form-input
                id="lastname-input"
                v-model="form.lastname"
                required
                placeholder="Nachname eingeben"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12" md="6">
          <b-form-group label="E-Mail:" label-for="email-input" label-cols-lg="4">
            <b-form-input
                id="email-input"
                v-model="form.email"
                type="email"
                required
                placeholder="E-Mail eingeben"
            ></b-form-input>
          </b-form-group>
        </b-col>

        <b-col cols="12" md="6">
          <b-form-group label="E-Mail bestätigen:" label-for="confirm-email-input" label-cols-lg="4">
            <b-form-input
                id="confirm-email-input"
                v-model="form.confirmEmail"
                type="email"
                required
                placeholder="E-Mail erneut eingeben"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12">
          <b-form-group label="Frühstück gewünscht:" label-for="breakfast-checkbox">
            <b-form-checkbox
                id="breakfast-checkbox"
                v-model="form.breakfast"
            >
              Frühstück hinzufügen
            </b-form-checkbox>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="text-center">
          <b-button type="submit" variant="primary" :disabled="isLoading">
            {{ isLoading ? 'Absenden...' : 'Buchung absenden' }}
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-container>
</template>

<style scoped>

.b-container {
  margin-top: 20px;
}

</style>