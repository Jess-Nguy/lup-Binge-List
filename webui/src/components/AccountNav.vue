<template>
  <div>
    <div class="navbar navbar-expand-lg navbar-light bg-light" id="AccountNavHeader">
      <!-- Links -->
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link :to="`/account/${id}`" class="nav-link">Overview</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="`/accountList/${id}`" class="nav-link">My List</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="`/favourite/${id}`" class="nav-link">Favourite</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="`/social/${id}`" class="nav-link">Social</router-link>
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
<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
      default: '',
    },
  },
  created() {
    console.log('NAV ID: ', this.id);
  },
};
</script>
