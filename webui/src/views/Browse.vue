<template>
  <div class="browse">
    <h1>This is a browse page</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  name: 'Browse',
  computed: {},
  mounted() {
    if (this.getUser == null) {
      this.$router.push('/');
    } else {
      console.log('Browse mount');
    }
  },
  methods: {},
};
</script>