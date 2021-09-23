<template>
  <div>
    <!--Navbar-->
    <nav class="navbar navbar-expand-lg navbar-dark primary-color">
      <!-- Navbar brand -->
      <router-link to="/" class="navbar-brand">BingeList</router-link>
      <!-- Collapse button -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#basicExampleNav"
        aria-controls="basicExampleNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Collapsible content -->
      <div v-if="user" class="collapse navbar-collapse" id="basicExampleNav">
        <!-- Links -->
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/home" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/browse" class="nav-link">Browse</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/stats" class="nav-link">Stats</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/forum" class="nav-link">Forum</router-link>
          </li>
        </ul>
        <!-- Search -->
        <form class="form-inline">
          <div class="md-form my-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          </div>
          <button class="btn btn-outline-white btn-md my-2 my-sm-0 ml-3" type="submit">Search</button>
        </form>
        <!-- Dropdown -->
        <ul class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            id="navbarDropdownMenuLink-4"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fas fa-user"></i> Profile
          </a>
          <div class="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
            <a class="dropdown-item" href="#">My account</a>
            <a class="dropdown-item" href="#">Setting</a>
          </div>
        </ul>
      </div>
      <!-- Collapsible content -->
      <div v-if="user">
        <button data-cy="logout-button" class="btn btn-danger" v-on:click="logoutUser"><i class="fas fa-sign-out-alt"></i> Logout</button>
      </div>
      <div v-else>
        <a data-cy="login-link" class="btn btn-md btn-success" :href="getLoginURL"><i class="fas fa-sign-in-alt"></i> Login with Google</a>
      </div>
    </nav>
    <router-view />
    <!--/.Navbar-->
  </div>
</template>
<style lang="scss">
nav li:hover,
nav li.router-link-active,
nav li.router-link-exact-active {
  background-color: rgb(0, 94, 255);
  cursor: pointer;
}
</style>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      user: {},
      isUser: false,
    };
  },
  name: 'Nav Header',
  computed: {
    getLoginURL() {
      if (window.location.hostname === 'localhost') {
        return 'http://localhost:8000/auth/google';
      } else {
        // Need to change this to call the api port version.
        return 'https://bingelist.herokuapp.com/auth/google';
      }
    },
    getUser() {
      return this.$store.getters.getUser;
    },
  },
  mounted() {
    this.user = this.getUser;
    this.$store.subscribe((setUser, user) => {
      console.log(setUser.type);
      console.log(setUser.payload);
      console.log('USER: ', user);
      this.user = user;
    });
  },
  methods: {
    ...mapActions(['login']),
    logoutUser() {
      this.login('');
      this.user = this.getUser;
      this.$router.push('/');
    },
  },
};
</script>
