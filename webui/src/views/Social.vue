<template>
  <div class="social">
    <h1>Social</h1>
    <account-nav />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import AccountNav from '../components/AccountNav.vue';

export default {
  components: { AccountNav },
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

    const localToken = localStorage.getItem('user-token');
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
