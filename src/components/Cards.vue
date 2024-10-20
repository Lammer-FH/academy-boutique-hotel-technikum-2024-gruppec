<script>
export default {
  name: "Cards"

}
</script>

<template>
  <b-container class="mt-4">
    <b-row>
      <b-col md="6" lg="6">
        <b-card
            title="Card 1 Title"
            img-src="https://picsum.photos/200/150"
            img-alt="Image 1"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
          <b-card-text>
            This is the content of the first card. It includes a quick example text to build on the card title.
          </b-card-text>
          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </b-col>

      <b-col md="6" lg="6">
        <b-card
            title="Card 2 Title"
            img-src="https://picsum.photos/200/150"
            img-alt="Image 2"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
          <b-card-text>
            This is the content of the second card. It also has some text to describe the card content.
          </b-card-text>
          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>




<style scoped>

</style>