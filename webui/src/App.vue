<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid" id="nav">
      <a class="navbar-brand" href="#">BingeList</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
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
      </div>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div >
        <button class="btn btn-outline-success">Login</button>
        <button class="btn btn-outline-primary">Register</button>
      </div>
      <div>
        <button class="btn btn-outline-danger">Logout</button>
      </div>
    </div>
  </nav>
  <router-view />
</div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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

export default{
  name: "Home",
};
</script>
