<script>
export default {
  data() {
    return {
      center: { lat: 48.2392232, lng: 16.3774207 },
    };
  },
};

</script>

<template>
  <GMapMap class="map"
      :center="center"
      :zoom="15">
  <GMapMarker :position="center" />
  </GMapMap>
</template>

<style>
.map {
  width: 300px;
  height: 200px;
}

@media (max-width: 600px) {
  .map {
    width: 100%;
    height: auto;
  }
}
</style>