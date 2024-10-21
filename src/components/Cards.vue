<script>
export default {
  name: "HotelCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    imgAlt: {
      type: String,
      default: "Room Image",
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: "#",
    },
    buttonText: {
      type: String,
      default: "View Details",
    },
  },
  //test weil Beispielzimmer nicht richtig angezeigt wird:
  /*computed: {
    resolvedImgSrc() {
      return require(`@/assets/${this.imgSrc}`);
    }
  }

   */
};
</script>

<template>
  <b-card
      :title="title"
      :img-src="imgSrc"
      :img-alt="imgAlt"
      img-top
      tag="article"
      style="max-width: 30rem;"
      class="mb-2"
  >
    <b-card-text>
      {{ description }}
    </b-card-text>
    <b-button :href="link" variant="primary">{{ buttonText }}</b-button>
  </b-card>
</template>



<style scoped>

</style>