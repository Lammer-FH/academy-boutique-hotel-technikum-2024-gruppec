<script>
import { reactive, ref } from 'vue';
export default {
  name: 'BookingForm',
  props: {
    roomId: {
      type: Number,
      required: true
    },
    fromDate: {
      type: Date,
      required: true
    },
    toDate: {
      type: Date,
      required: true
    }
  },
  data() {
    return {
      formData: {
        roomId: this.roomId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        firstname: '',
        lastname: '',
        email: '',
        confirmEmail: '',
        breakfast: false
      }
    };
  },
  methods: {
    handleReview() {
      // Formulardaten an den Elternteil übergeben
      this.$emit('reviewData', this.formData);
    }
  }
};
</script>

<template>
  <b-container>
    <b-form @submit.prevent="handleReview">
      <b-row>
        <b-col cols="12">
          <b-form-group label="Zimmer-ID:" label-for="room-id">
            <b-form-input v-model="formData.roomId" disabled></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group label="Zeitraum:" label-for="date-range">
            <b-form-input v-model="formData.fromDate" type="date" disabled></b-form-input>
            <b-form-input v-model="formData.toDate" type="date" disabled></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="6">
          <b-form-group label="Vorname:" label-for="firstname-input" label-cols-lg="4">
            <b-form-input
                id="firstname-input"
                v-model="formData.firstname"
                required
                placeholder="Vorname eingeben"
            ></b-form-input>
          </b-form-group>
        </b-col>

        <b-col cols="12" md="6">
          <b-form-group label="Nachname:" label-for="lastname-input" label-cols-lg="4">
            <b-form-input
                id="lastname-input"
                v-model="formData.lastname"
                required
                placeholder="Nachname eingeben"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12" md="6">
          <b-form-group label="Geburtsdatum:" label-for="birthdate-input" label-cols-lg="4">
            <b-form-input
                id="birthdate-input"
                v-model="formData.birthdate"
                type="date"
                required
            ></b-form-input>
          </b-form-group>
        </b-col>

        <b-col cols="12" md="6">
          <b-form-group label="E-Mail:" label-for="email-input" label-cols-lg="4">
            <b-form-input
                id="email-input"
                v-model="formData.email"
                type="email"
                required
                placeholder="E-Mail eingeben"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12" md="6">
          <b-form-group label="E-Mail bestätigen:" label-for="confirm-email-input" label-cols-lg="4">
            <b-form-input
                id="confirm-email-input"
                v-model="formData.confirmEmail"
                type="email"
                required
                placeholder="E-Mail erneut eingeben"
            ></b-form-input>
          </b-form-group>
        </b-col>

        <b-col cols="12">
          <b-form-group label="Frühstück gewünscht:" label-for="breakfast-checkbox">
            <b-form-checkbox
                id="breakfast-checkbox"
                v-model="formData.breakfast"
            >
              Frühstück hinzufügen
            </b-form-checkbox>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="text-center">
          <b-button type="submit" variant="primary" :disabled="isLoading">
            {{ isLoading ? 'Laden...' : 'Buchung prüfen' }}
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