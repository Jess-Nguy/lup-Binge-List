<template>
  <div class="dashboard">
    <h1>This is a Dashboard page</h1>
    <div v-if="user">
      <!-- doesn't work -->
      <button class="btn btn-danger" v-on:click="logoutUser">Logout</button>
    </div>
    <div v-else>
      <a class="btn btn-md btn-success" :href="getLoginURL">Login with Google</a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      user: {}
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
    getUser() {
      return this.$store.getters.getUser;
    },
  },
  mounted() {
    this.user = this.getUser;
  },
  methods: {
    ...mapActions(['login']),
    logoutUser() {
      this.login('');
      console.log("GET USER: ", this.getUser);
      this.user = this.getUser;
    },
  },
};
</script>
