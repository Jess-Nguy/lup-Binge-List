<template>
  <div>
    <div class="navbar navbar-expand-lg navbar-light bg-light" id="AccountNavHeader">
      <!-- Links -->
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/account" class="nav-link">Overview</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/mylist" class="nav-link">My List</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/favourite" class="nav-link">Favourite</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/social" class="nav-link">Social</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* Centered section inside the top navigation */
.navbar-nav {
  float: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
