<template>
  <div class="home">
    <activity-list :msg="welcomeMessage" :profileUrl="profileUrl" />
  </div>
</template>

<script>
// @ is an alias to /src
import ActivityList from '@/components/ActivityList.vue';
// import Vue from "vue";
// import App from './app.vue';
export default {
  data() {
    return {
      welcomeMessage: 'Welcome user',
      profileUrl: '',
      user: {},
    };
  },
  name: 'Home',
  components: {
    ActivityList,
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
    // console.log('GET USER: ', this.getUser);
    // console.log('this USER: ', this.user);

    if (this.getUser == null) {
      this.$router.push('/');
    } else {
      this.welcomeMessage = 'Welcome ' + this.getUser.username;
      this.profileUrl = this.getUser.profile_image;
    }
  },
};
</script>
