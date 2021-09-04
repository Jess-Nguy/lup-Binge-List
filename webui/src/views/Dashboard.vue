<template>
  <div class="dashboard">
    <h1>This is a Dashboard page</h1>
    <div>
      <login-register-buttons></login-register-buttons>
    </div>
    <div>
      <button class="btn btn-danger">Logout</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Login from "@/components/Login.vue";
// v-if="(this.$route.path).slice()"
import LoginRegisterButtons from '@/components/LoginRegisterButtons.vue';
export default {
  data() {
    return {
      showLoginModal: false, // don't need anymore
    };
  },
  name: 'Home',
  components: {
    LoginRegisterButtons,
  },
};
</script>
