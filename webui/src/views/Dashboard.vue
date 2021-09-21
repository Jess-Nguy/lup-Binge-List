<template>
  <div class="dashboard">
    <h1>This is a Dashboard page</h1>
    <h1>BANNER</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  name: 'Dashboard',
  computed: {},
  mounted() {
    if (this.getUser == null) {
      this.$router.push('/');
    } else {
      console.log('dashboard mount');
    }
  },
  methods: {},
};
</script>
