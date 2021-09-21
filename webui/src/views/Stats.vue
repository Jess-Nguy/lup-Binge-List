<template>
  <div class="stats">
    <h1>This is a stats page</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  name: 'Stats',
  computed: {},
  mounted() {
    if (this.getUser == null) {
      this.$router.push('/');
    } else {
      console.log('stats mount');
    }
  },
  methods: {},
};
</script>