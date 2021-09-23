<template>
  <div class="dashboard">
    <h1>This is a Dashboard page</h1>
    <h1>BANNER</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {};
  },
  name: 'Dashboard',
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
  },
  mounted() {
    const localToken = localStorage.getItem('user-token');
    if (!localToken) {
      this.$router.push('/');
    } else {
      if (!this.getUser) {
        this.login(localToken);
      }
      console.log('Dashboard mount');
    }
  },
  methods: {
    ...mapActions(['login']),
  },
};
</script>
