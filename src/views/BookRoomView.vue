<script>

import BookingForm from '@/components/BookingForm.vue';
import Footer from "@/components/Footer.vue";
import { ref } from 'vue';
export default {
  name: "BookRoomView",
  components: {
    BookingForm, Footer
  },
  setup() {
    const formData = ref({});

    const handleReview = (data) => {
      console.log(data)
      formData.value = data;
    };

    return { handleReview, formData };
  },
};

</script>

<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col cols="12" md="8">
        <h1 class="text-center mb-4">Zimmer buchen</h1>

        <!-- Buchungsformular -->
        <BookingForm
            @reviewData="handleReview"/>
        <!-- Review Modal -->

      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
body {
  padding-top: 70px;
}
h1 {
  font-size: 2rem;
  font-weight: bold;
  padding-top: 100px;
}
</style>