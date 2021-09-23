<template>
  <div class="forum">
    <h1>This is a forum page</h1>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {};
  },
  name: 'Forum',
  computed: {},
  mounted() {
    const localToken = localStorage.getItem('user-token');
    if (!localToken) {
      this.$router.push('/');
    } else {
      if (!this.getUser) {
        this.login(localToken);
      }
      console.log('Forum mount');
    }
  },
  methods: {
    ...mapActions(['login']),
  },
};
</script>
