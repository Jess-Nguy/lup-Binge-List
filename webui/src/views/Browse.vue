<template>
  <div class="browse">
    <h1>This is a browse page</h1>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {};
  },
  name: 'Browse',
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
      console.log('Browse mount');
    }
  },
  methods: {
    ...mapActions(['login']),
  },
};
</script>
