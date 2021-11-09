<template>
  <div class="social">
    <h1>Social {{ user.id }}</h1>
    <account-nav :id="user.id" />
    <label>Request</label>
    <div class="card border border-dark shadow-0">
      <div class="card-body">
        <friend-request />
      </div>
    </div>
    <label>Friends</label>
    <div class="card border border-dark shadow-0">
      <div class="card-body">
        <friends-list />
      </div>
    </div>
  </div>
</template>

<script>
import AccountNav from '../components/AccountNav.vue';
import FriendRequest from '../components/FriendRequest.vue';
import FriendsList from '../components/FriendsList.vue';

export default {
  components: { AccountNav, FriendRequest, FriendsList },
  data() {
    return {
      user: {
        name: localStorage.getItem('username'),
        profileUrl: localStorage.getItem('profileImage'),
        id: this.$route.params.id,
        roleId: localStorage.getItem('userRoleId'),
      },
    };
  },
  name: 'Social',
  computed: {},
  created() {
    this.user.id = this.$route.params.id;
  },
  mounted() {
    const localToken = localStorage.getItem('userToken');
    if (!localToken) {
      this.$router.push('/');
    }
    console.log('Social mount');
  },
  methods: {},
};
</script>
