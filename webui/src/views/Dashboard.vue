<template>
  <div class="dashboard">
    <h1>This is a Dashboard page</h1>
    <div>
      <a class="btn btn-md btn-success" :href="getLoginURL">Login with Google</a>
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
export default {
  data() {
    return {
      showLoginModal: false, // don't need anymore
    };
  },
  name: 'Dashboard',
  computed: {
    getLoginURL() {
      if (window.location.hostname === 'localhost') {
        return 'http://localhost:8000/auth/google';
      } else {
        // Need to change this to call the api port version.
        return 'https://bingelist.herokuapp.com/auth/google';
      }
    },
  },
};
</script>
