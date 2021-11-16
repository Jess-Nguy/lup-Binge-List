<template>
  <div id="AccountNavHeader">
    <div class="navbar navbar-expand-xl bg-light">
      <!-- Links -->
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link :to="`/account/${id}`" class="nav-link"> <i class="fas fa-street-view"></i>Overview</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="`/accountList/${id}`" class="nav-link"><i class="fas fa-list"></i>BingeList</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="`/favourite/${id}`" class="nav-link"><i class="fab fa-gratipay"></i>Favourite</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="`/social/${id}`" class="nav-link"><i class="fas fa-user-friends"></i>Social</router-link>
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
  font-size: 1.5rem;
}
.navbar {
  height: 3rem;
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
  created() {},
};
</script>
