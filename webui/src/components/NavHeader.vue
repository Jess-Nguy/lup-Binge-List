<template>
  <div>
    <!--Navbar-->
    <nav class="navbar navbar-expand-lg navbar-dark primary-color">
      <!-- Navbar brand -->
      <router-link to="/" class="navbar-brand">
        <img src="@/assets/img/LogoBL.png" alt="BingeList" width="100" height="40"
      /></router-link>
      <!-- Collapse button -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navHeader"
        aria-controls="navHeader"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Collapsible content -->
      <div v-if="user" class="collapse navbar-collapse" id="navHeader">
        <!-- Links -->
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/home" class="nav-link"><i class="fas fa-home"></i>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/browse" class="nav-link"><i class="fas fa-search"></i>Browse</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/stats" class="nav-link"><i class="fas fa-chart-bar"></i>Stats</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/forum" class="nav-link"><i class="fas fa-file-alt"></i>Forum</router-link>
          </li>
        </ul>
        <!-- Dropdown -->
        <ul id="profile-dropdown" class="nav-item">
          <a
            class="nav-link dropdown-toggle"
            id="navbarDropdownMenuLink-4"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fas fa-user"></i>
            <label>Profile</label>
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink-4">
            <router-link to="/account" class="dropdown-item">My account</router-link>
            <router-link to="/settings" class="dropdown-item">Settings</router-link>
          </div>
        </ul>
        <div v-if="user" id="logout-button">
          <button data-cy="test-logout-button" class="btn btn-danger" v-on:click="logoutUser">
            <i class="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>
      </div>
      <!-- Collapsible content -->
      <div v-else id="login-link">
        <a data-cy="test-login-link" class="btn btn-md btn-success" :href="getLoginURL"
          ><i class="fas fa-sign-in-alt"></i> Login with Google</a
        >
      </div>
    </nav>
    <router-view />
    <!--/.Navbar-->
  </div>
</template>
<style lang="scss" scoped>
#logout-button,
#login-link {
  float: none;
  display: block;
}

#profile-dropdown {
  float: none;
  display: block;
}
/* Centered section inside the top navigation */
.navbar-nav {
  float: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.fas {
  color: black;
}
nav li {
  float: left;
  text-align: center;
  font-size: 17px;
}
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
      // if (window.location.hostname === 'localhost') {
      //   return 'https://localhost:8000/auth/google';
      // } else {
      //   // Need to change this to call the api port version.
      //   return 'https://bingelist.herokuapp.com/auth/google';
      // }
      if (process.env.NODE_ENV === 'production') {
        return 'http://bingelist.herokuapp.com/auth/google';
      } else {
        return 'http://localhost:8000/auth/google';
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
      localStorage.clear();
      this.$router.push('/');
    },
  },
};
</script>
