<script>
import RegisterForm from "@/components/RegisterForm.vue";

export default {
  name: "RegisterView",
  components: {
    RegisterForm,
  },
};
</script>

<template>
  <b-container class="register-container text-start mt-5 pt-5 mx-auto px-5">
  <div>
    <RegisterForm />
  </div>
  </b-container>
</template>

<style scoped>

</style>
