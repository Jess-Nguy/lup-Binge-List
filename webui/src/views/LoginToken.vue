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
      localStorage.setItem('userToken', token);
      this.login(token);
      //  Next version code
      // this.$router.push('/home');
      this.$router.push('/browse');
    } else {
      this.$router.push('/');
    }
  },
};
</script>
