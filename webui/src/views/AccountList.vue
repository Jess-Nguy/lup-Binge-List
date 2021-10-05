<template>
  <div class="accountList">
    <h1>My List</h1>
    <account-nav />
    <account-list-filter />
    <h3>Watching</h3>
    <account-list-shows />
    <h3>Completed</h3>
    <account-list-shows />
    <h3>Paused</h3>
    <account-list-shows />
    <h3>Dropped</h3>
    <account-list-shows />
    <h3>Planning</h3>
    <account-list-shows />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import AccountListFilter from '../components/AccountListFilter.vue';
import AccountListShows from '../components/AccountListShows.vue';
import AccountNav from '../components/AccountNav.vue';

export default {
  components: { AccountNav, AccountListFilter, AccountListShows },
  data() {
    return {};
  },
  name: 'My List',
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
      console.log('My List mount');
    }
  },
  methods: {
    ...mapActions(['login']),
  },
};
</script>
