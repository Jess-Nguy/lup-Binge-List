<template>
  <div>
    <!-- only show this nav header when user is logged in -->
    <nav-header></nav-header>
    <!-- TO DO: show different nav header for a user not logged in -->
    <img src="@/assets/LogoBL.png" alt="Banner" width="500" height="200" />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background: #b1d4e0;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import NavHeader from '@/components/NavHeader.vue';
import { mapActions } from 'vuex';
export default {
  data() {
    return {};
  },
  name: 'Home',
  components: {
    NavHeader,
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
        this.welcomeMessage = 'Welcome ' + this.getUser.username;
        this.profileUrl = this.getUser.profile_image;
      }
      console.log('App mount');
    }
  },
  methods: {
    ...mapActions(['login']),
  },
};
</script>
