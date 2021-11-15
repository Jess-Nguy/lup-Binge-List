<template>
  <div class="account">
    <div v-if="query.id_user === loggedInUser.id">
      <h1>My Account</h1>
    </div>
    <div v-else>
      <h1>{{ user.username }}'s Account</h1>
      <br />
      <div v-if="hasRelations">
        <h3 style="color: green">You are friends</h3>
      </div>
      <div v-else>
        <button type="button" class="btn btn-success" :disabled="hasRequest">
          Send friend request <i class="fas fa-plus-square fa-lg"></i>
        </button>
      </div>
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
      listFriendRequests: [],
      hasRequest: false,
      hasRelations: false,
      listFriends: [],
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
    await this.getMyFriendRequests();
    await this.getMyFriends();
  },
  methods: {
    ...mapActions(['login']),
    async getUsers() {
      const response = await DataService.getUserByFilter(this.query);
      this.user = response[0];
      console.log('USER: ', this.user);
      this.role = this.user.role_id == 1 ? 'Admin' : 'User';
    },
    async getMyFriendRequests() {
      const data = {
        id: this.loggedInUser.id,
        type: 'request',
      };
      const response = await DataService.getRelationsByUserId(data);
      this.listFriendRequests = response;
      console.log('friends request: ', this.listFriendRequests);
      response.forEach((element) => {
        if (element.user_id1 == this.query.id_user) {
          this.hasRequest = true;
          this.hasRelations = false;
        }
      });
    },
    async getMyFriends() {
      const response = await DataService.getFriendsList(this.loggedInUser.id);
      this.listFriends = response;
      console.log('list friends: ', this.listFriends);

      response.forEach((element) => {
        if (element.user_id1 == this.query.id_user) {
          this.hasRequest = false;
          this.hasRelations = true;
        }
      });
    },
  },
};
</script>
