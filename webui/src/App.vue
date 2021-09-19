<template>
  <div>
    <!-- only show this nav header when user is logged in -->
    <nav-header-logged-in></nav-header-logged-in>
    <!-- TO DO: show different nav header for a user not logged in -->
    <img src="@/assets/LogoBL.png" alt="Banner" width="500" height="200" />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background: #423346;
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
// @ is an alias to /src
// import Login from "@/components/Login.vue";
// v-if="(this.$route.path).slice()"
import NavHeaderLoggedIn from '@/components/NavHeaderLoggedIn.vue';
export default {
  data() {
    return {
      showLoginModal: false, // don't need anymore
    };
  },
  name: 'Home',
  components: {
    NavHeaderLoggedIn,
  },
};
</script>
