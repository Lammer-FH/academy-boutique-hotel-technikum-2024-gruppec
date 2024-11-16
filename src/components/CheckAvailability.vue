<script>
export default {
  name: "checkAvailability"
}
</script>

<template>
  <div>
    <div v-for="room in rooms" :key="room.id" class="room-card">
      <img :src="room.imgSrc" :alt="room.localTitle" class="room-image" />
      <h3>{{ room.localTitle }}</h3>
      <p>{{ room.description }}</p>
      <b-button
          :aria-expanded="activeRoomId === room.id ? 'true' : 'false'"
          @click="toggleCollapse(room.id)"
          variant="primary"
      >
        Verfügbarkeit prüfen
      </b-button>
      <b-collapse v-model="activeRoomId === room.id" class="mt-2">
        <div class="date-picker">
          <b-form-group label="Anreise">
            <b-form-datepicker v-model="fromDate" :min="today"></b-form-datepicker>
          </b-form-group>
          <b-form-group label="Abreise">
            <b-form-datepicker v-model="toDate" :min="fromDate"></b-form-datepicker>
          </b-form-group>
          <b-button
              @click="checkAvailability(room)"
              variant="success"
              :disabled="!canCheckAvailability"
          >
            Datum prüfen
          </b-button>
        </div>
      </b-collapse>
    </div>

    <!-- Feedback Modal -->
    <b-modal
        id="feedback-modal"
        ref="feedbackModal"
        :title="modalTitle"
        @hide="resetModal"
    >
      <p>{{ modalMessage }}</p>
    </b-modal>
  </div>
</template>

<style scoped>

</style>