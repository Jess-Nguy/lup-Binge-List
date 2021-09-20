<template>
  <div>
    <h1>Logging in...</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions(['login']),
  },
  mounted() {
    const { token } = this.$route.params;
    if (token) {
      localStorage.setItem('user-token', token);
      this.login(token);
      this.$router.push('/home');
    } else {
      this.$router.push('/');
    }
  },
};
</script>
