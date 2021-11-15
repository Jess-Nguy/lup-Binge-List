<template>
  <div class="social">
    <h1>Social</h1>
    <account-nav :id="user.id" />
    <div v-if="isSameUser">
      <label>Request</label>
      <div class="card border border-dark shadow-0">
        <div class="card-body" v-if="listFriendRequests.length > 0">
          <friend-request :friendRequests="listFriendRequests" @accept-friend-request="loadData" />
        </div>
        <div class="card-body" v-else>
          <h2 style="color: red">No friend requests</h2>
        </div>
      </div>
    </div>
    <div>
      <label>Friends</label>
      <div class="card border border-dark shadow-0">
        <div class="card-body" v-if="listFriends.length > 0">
          <friends-list :friends="listFriends" @deleted-user-relation="loadData" />
        </div>
        <div v-else class="card-body">
          <h2 style="color: red">No friends</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AccountNav from '../components/AccountNav.vue';
import FriendRequest from '../components/FriendRequest.vue';
import FriendsList from '../components/FriendsList.vue';
import DataService from '../../service/dataService';

export default {
  components: { AccountNav, FriendRequest, FriendsList },
  data() {
    return {
      user: {
        id: this.$route.params.id,
      },
      listFriendRequests: [],
      listFriends: [],
      loggedInUser: {
        name: localStorage.getItem('username'),
        profileUrl: localStorage.getItem('profileImage'),
        id: localStorage.getItem('userId'),
        roleId: localStorage.getItem('userRoleId'),
      },
      isSameUser: false,
    };
  },
  name: 'Social',
  computed: {},
  async created() {
    this.user.id = this.$route.params.id;
    this.isSameUser = this.user.id == this.loggedInUser.id;

    await this.loadData();
  },
  mounted() {
    const localToken = localStorage.getItem('userToken');
    if (!localToken) {
      this.$router.push('/');
    }
    this.isSameUser = this.user.id == this.loggedInUser.id;
    console.log('Social mount');
  },
  methods: {
    async loadData() {
      await this.getMyFriendRequests();
      await this.getMyFriends();
    },
    async getMyFriendRequests() {
      const data = {
        id: this.loggedInUser.id,
        type: 'request',
      };
      this.listFriendRequests = await DataService.getRelationsByUserId(data);
      console.log('list friends request: ', this.listFriendRequests);
    },
    async getMyFriends() {
      this.listFriends = await DataService.getFriendsList(this.loggedInUser.id);
      console.log('list friends: ', this.listFriends);
    },
  },
};
</script>
