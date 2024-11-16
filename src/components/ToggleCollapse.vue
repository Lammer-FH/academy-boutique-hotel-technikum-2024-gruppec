<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  props: {
    collapseId: {
      type: String,
      required: true
    }
  }
}
</script>


<template>
  <div>
    <b-button
        variant="primary"
        :class="visible ? null : 'collapsed'"
        :aria-expanded="visible ? 'true' : 'false'"
        aria-controls="collapseId"
        @click="visible = !visible">
      Verfügbarkeit prüfen
    </b-button>
    <b-collapse id="collapseId" v-model="visible" class="mt-2">
      <b-card>I should start open!</b-card>
    </b-collapse>
  </div>
</template>

<style>

</style>