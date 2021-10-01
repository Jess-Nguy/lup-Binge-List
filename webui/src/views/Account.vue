<template>
  <div class="account">
    <h1>My Account</h1>
    <account-nav />
    <img :src="profileUrl" alt="profile image" width="100" height="100" />
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ username }}</h5>
      </div>
    </div>
    <h1>Activity List</h1>
    <activity-list />
    <overview-stats />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import AccountNav from '@/components/AccountNav.vue';
import ActivityList from '@/components/ActivityList.vue';
import OverviewStats from '@/components/OverviewStats.vue';
export default {
  data() {
    return {
      username: '',
      profileUrl: '',
    };
  },
  name: 'My Account',
  components: {
    AccountNav,
    ActivityList,
    OverviewStats,
  },
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

    const localToken = localStorage.getItem('user-token');
    if (!localToken) {
      this.$router.push('/');
    } else {
      if (!this.getUser) {
        this.login(localToken);
      }
      console.log('My Account mount');
      this.username = this.getUser.username;
      this.profileUrl = this.getUser.profile_image;
    }
  },
  methods: {
    ...mapActions(['login']),
  },
};
</script>
