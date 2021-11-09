<template>
  <div class="account">
    <div v-if="query.id_user === loggedInUser.id">
      <h1>My Account</h1>
    </div>
    <div v-else>
      <h1>{{ user.username }}'s Account</h1>
      <br />
      <button type="button" class="btn btn-success">
        Send friend request <i class="fas fa-plus-square fa-lg"></i>
      </button>
    </div>
    <account-nav :id="query.id_user" />
    <img :src="user.profile_image" alt="profile image" width="100" height="100" />
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ user.username }}</h5>
        <!-- Add user details? -->
      </div>
      <p>
        {{ user.time_zone }}
      </p>
      <br />
      <p>
        {{ role }}
      </p>
      <p>
        {{ user.email }}
      </p>
      <p>
        {{ user.created_at }}
      </p>
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
import DataService from '../../service/dataService';
// import ActivityList from '@/components/ActivityList.vue';
// import OverviewStats from '@/components/OverviewStats.vue';
export default {
  data() {
    return {
      user: {},
      query: {
        id_user: '',
        email: '',
        google_id: '',
        username: '',
        role_id: '',
        time_zone: '',
      },
      loggedInUser: {
        name: localStorage.getItem('username'),
        profileUrl: localStorage.getItem('profileImage'),
        id: localStorage.getItem('userId'),
        roleId: localStorage.getItem('userRoleId'),
      },
      role: 'User',
    };
  },
  name: 'My Account',
  components: {
    AccountNav,
  },
  computed: {},
  async created() {
    this.query.id_user = this.$route.params.id;
    await this.getUsers();
  },
  methods: {
    ...mapActions(['login']),
    async getUsers() {
      const response = await DataService.getUserByFilter(this.query);
      this.user = response[0];
      console.log('USER: ', this.user);
      this.role = this.user.role_id == 1 ? 'Admin' : 'User';
    },
  },
};
</script>
