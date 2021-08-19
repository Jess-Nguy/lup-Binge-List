<template>
  <div>
    <!-- only show this nav header when user is logged in -->
    <nav-header-logged-in></nav-header-logged-in>
    <!-- show different nav header for a user not logged in -->
    <img src="@/assets/LogoBL.png" alt="Banner" width="500" height="200" />

    <!-- if user isn't logged in then show this. Buttons will show modals -->
    <div>
      <!-- <fa icon="twitter" type="fab" class="classname"></fa> -->
      <login-register-buttons></login-register-buttons>
    </div>
    <!-- if user is logged in then show this. -->
    <div>
      <button class="btn btn-outline-danger">Logout</button>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #00ffff;
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
import NavHeaderLoggedIn from "@/components/NavHeaderLoggedIn.vue";
import LoginRegisterButtons from "@/components/LoginRegisterButtons.vue";
export default {
  data() {
    return {
      showLoginModal: false,
    };
  },
  name: "Home",
  components: {
    NavHeaderLoggedIn,
    LoginRegisterButtons,
  },
};
</script>
