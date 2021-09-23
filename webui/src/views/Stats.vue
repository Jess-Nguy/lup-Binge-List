<template>
  <div class="stats">
    <h1>This is a stats page</h1>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {};
  },
  name: 'Stats',
  computed: {},
  mounted() {
    const localToken = localStorage.getItem('user-token');
    if (!localToken) {
      this.$router.push('/');
    } else {
      if (!this.getUser) {
        this.login(localToken);
      }
      console.log('Status mount');
    }
  },
  methods: {
    ...mapActions(['login']),
  },
};
</script>
