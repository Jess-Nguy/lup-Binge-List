<template>
  <div>
    <h1>ADMIN...</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions(['isAdmin']),
  },
  async mounted() {
    const admin = await this.isAdmin();
    if (!admin) {
      this.$router.push('/home');
    }
  },
};
</script>
