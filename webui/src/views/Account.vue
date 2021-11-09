<template>
  <div class="account">
    <h1>My Account</h1>
    <account-nav />
    <img :src="user.profileUrl" alt="profile image" width="100" height="100" />
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ user.name }}</h5>
        <!-- Add user details? -->
      </div>
    </div>
    <!-- Hidden since not in use -->
    <!-- <h1>Activity List</h1> -->
    <!-- <activity-list /> -->
    <!-- <overview-stats /> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import AccountNav from '@/components/AccountNav.vue';
// import ActivityList from '@/components/ActivityList.vue';
// import OverviewStats from '@/components/OverviewStats.vue';
export default {
  data() {
    return {
      user: {
        name: localStorage.getItem('username'),
        profileUrl: localStorage.getItem('profileImage'),
        id: localStorage.getItem('userId'),
        roleId: localStorage.getItem('userRoleId'),
      },
    };
  },
  name: 'My Account',
  components: {
    AccountNav,
  },
  computed: {},
  mounted() {},
  methods: {
    ...mapActions(['login']),
  },
};
</script>
