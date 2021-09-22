<template>
  <div class="forum">
    <h1>This is a forum page</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  name: 'Forum',
  computed: {},
  mounted() {
    if (this.getUser == null) {
      this.$router.push('/');
    } else {
      console.log('Forum mount');
    }
  },
  methods: {},
};
</script>
