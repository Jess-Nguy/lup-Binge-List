<template>
  <div class="myaccount">
    <h1>My Account</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      welcomeMessage: 'Welcome user',
      profileUrl: '',
    };
  },
  name: 'My Account',
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
      console.log('My Account mount');
    }
  },
  methods: {
    ...mapActions(['login']),
  },
};
</script>
