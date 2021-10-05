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
    console.log('REACHED!');
    const { token } = this.$route.params;
    if (token) {
      localStorage.setItem('userToken', token);
      this.login(token);
      this.$router.push('/home');
    } else {
      this.$router.push('/');
    }
  },
};
</script>
