<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
});

</script>

<template>
  <div class="carousel-container">
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
          v-for="(image, index) in images"
          :key="index"
          type="button"
          :data-bs-target="'#carouselExampleIndicators'"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          :aria-current="index === 0"
          :aria-label="'Slide ' + (index + 1)"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
          v-for="(image, index) in images"
          :key="index"
          class="carousel-item"
          :class="{ active: index === 0 }"
      >
        <img :src="image.src" class="d-block w-100 carousel-image" :alt="image.alt">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </div>
</template>

<style scoped>

.carousel-container {
  height: auto;           /* Passt die Höhe automatisch an */
  max-width: 1100px;      /* Maximalbreite für große Bildschirme */
  margin: 20px auto;
  overflow: hidden;
}

.carousel-image {
  height: 550px; /* höhe des Karussels, nach Wunsch anpassen */
  object-fit: fill;
  width: 100%;
}

@media (max-width: 768px) { /* Anpassungen für Tablets und kleinere Bildschirme */
  .carousel-container {
    height: 300px;        /* Festgelegte Höhe für die mobile Ansicht */
  }
}

@media (max-width: 576px) { /* Anpassungen für sehr kleine Bildschirme (Smartphones) */
  .carousel-image {
    height: 250px;        /* Noch kleinere Höhe für Smartphones */
  }
}

</style>

