<template>
  <div>
    <nav-header></nav-header>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  background: #e6e6e6;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import NavHeader from '@/components/NavHeader.vue';
export default {
  data() {
    return {};
  },
  name: 'Home',
  components: {
    NavHeader,
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>
