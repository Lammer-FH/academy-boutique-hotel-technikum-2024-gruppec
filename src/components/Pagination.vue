<!-- Pagination.vue -->
<script>
export default {
  props: {
    totalItems: {
      type: Number,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      required: true,
    },
    modelValue: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
    pageNumbers() {
      // Erstellen einer Liste der Seitenzahlen zur Anzeige
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    },
  },
  methods: {
    setPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.$emit('update:modelValue', page);// Aktualisieren des aktuellen Werts für v-model
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    nextPage() {
      if (this.modelValue < this.totalPages) {
        this.setPage(this.modelValue + 1);
      }
    },
    prevPage() {
      if (this.modelValue > 1) {
        this.setPage(this.modelValue - 1);
      }
    },
  },
};
</script>

<template>
  <div class="pagination-container">
    <button @click="prevPage" :disabled="modelValue === 1">Zurück</button>

    <button
        v-for="page in pageNumbers"
        :key="page"
        :class="{ active: modelValue === page }"
        @click="setPage(page)"
    >
      {{ page }}
    </button>

    <button @click="nextPage" :disabled="modelValue === totalPages">Weiter</button>
  </div>
</template>

<style scoped>
.pagination-container {
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 20px;
}

button {
  padding: 8px 12px;
  background-color: #f2f2f2;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  cursor: pointer;
}

button.active {
  background-color: #3498db;
  color: white;
}

button:disabled {
  background-color: #d8d8d8;
  cursor: not-allowed;
}
</style>
