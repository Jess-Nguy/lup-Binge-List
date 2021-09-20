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
        <!-- Links -->
        <form class="form-inline">
          <div class="md-form my-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          </div>
        </form>
        <ul class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            id="navbarDropdownMenuLink-4"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fas fa-user"></i> Profile
          </a>
          <div class="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
            <a class="dropdown-item" href="#">My account</a>
            <a class="dropdown-item" href="#">Log out</a>
          </div>
        </ul>
      </div>
      <!-- Collapsible content -->
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
export default {
  data() {
    return {
      user: {},
    };
  },
  name: 'Nav Header',
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
  },
  mounted() {
    this.user = this.getUser;
    console.log("USER: ", this.user);
    console.log("GET USER: ", this.getUser);
  },
}
</script>