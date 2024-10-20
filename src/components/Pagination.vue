<script>
export default {
  name: "Pagination"
}
</script>

<template>
  <div class="overflow-auto">
    <!-- Use text in props -->
    <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        first-text="First"
        prev-text="Prev"
        next-text="Next"
        last-text="Last"
    ></b-pagination>
  </div>
</template>

<style scoped>

</style>