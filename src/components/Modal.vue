<script>
import successImage from '@/assets/success-icon.png';
import failureImage from '@/assets/failure-icon.png';

export default {
  name: "Modal",
  props: {
    message: { type: String, required: true },
    isAvailable: { type: Boolean, required: true },
    modelValue: { type: Boolean, default: false },
    isBookable: { type: Boolean, default: false }
  },
  emits: ['update:modelValue', 'close'],
  data() {
    return {
      isVisible: this.modelValue,
      successImage,
      failureImage,
    };
  },
  watch: {
    modelValue(newVal) {
      this.isVisible = newVal;
    }
  },
  methods: {
    closeModal() {
      this.isVisible = false;
      this.$emit('update:modelValue', false);
      this.$emit('close');
    },
    navigateToBooking() {
      this.$router.push('/BookRoomView')
    }
  }
};
</script>

<template>
  <b-modal v-model="isVisible" hide-footer>
    <h3 class="text-center mb-3">Verfügbarkeitsprüfung</h3>
    <div class="text-center">
      <img
          v-if="isAvailable !== null"
          :src="isAvailable ? successImage : failureImage"
          :alt="isAvailable ? 'Erfolg' : 'Fehler'"
          class="status-icon"
      />
    </div>
    <p class="text-center">{{ message }}</p>

    <div v-if="isBookable" class="text-center">
      <b-button @click="navigateToBooking()" variant="success" class="w-100 mt-3">
        Jetzt buchen
      </b-button>
    </div>

    <b-button @click="closeModal" variant="secondary" class="w-100 mt-3">
      Schließen
    </b-button>
  </b-modal>
</template>

<style scoped>
/* Status-Icon Styling */
.status-icon {
  width: 50px;
  height: 50px;
  margin-bottom: 15px;
}

.text-center {
  text-align: center;
}

.b-modal {
  z-index: 9999;  /* Modal über den anderen Inhalten platzieren */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);  /* Hintergrund dimmen */
}

.modal-content {
  max-width: 500px;
  margin: 20px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
</style>
