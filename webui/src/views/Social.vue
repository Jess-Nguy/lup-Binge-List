<template>
  <div class="social">
    <h1>Social</h1>
    <account-nav />
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
import { mapActions } from 'vuex';
import AccountNav from '../components/AccountNav.vue';
import FriendRequest from '../components/FriendRequest.vue';
import FriendsList from '../components/FriendsList.vue';

export default {
  components: { AccountNav, FriendRequest, FriendsList },
  data() {
    return {};
  },
  name: 'Social',
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
  },
  mounted() {
    this.$store.subscribe((setUser, user) => {
      console.log(setUser.type);
      console.log(setUser.payload);
      console.log('USER: ', user);
      this.user = user;
    });

    const localToken = localStorage.getItem('userToken');
    if (!localToken) {
      this.$router.push('/');
    } else {
      if (!this.getUser) {
        this.login(localToken);
      }
      console.log('Social mount');
    }
  },
  methods: {
    ...mapActions(['login']),
  },
};
</script>
