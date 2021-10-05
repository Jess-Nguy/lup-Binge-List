<template>
  <div class="favourite">
    <h1>Favourite</h1>
    <account-nav />
    <favourite-filter />
    <div class="card border border-dark shadow-0">
      <div class="card-body">
        <favourite-list />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import AccountNav from '../components/AccountNav.vue';
import FavouriteFilter from '../components/FavouriteFilter.vue';
import FavouriteList from '../components/FavouriteList.vue';

export default {
  components: { AccountNav, FavouriteFilter, FavouriteList },
  data() {
    return {};
  },
  name: 'Favourite',
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
      console.log('Favourite mount');
    }
  },
  methods: {
    ...mapActions(['login']),
  },
};
</script>
