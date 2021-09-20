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
    this.welcomeMessage = 'Welcome ' + this.getUser.username;
    this.profileUrl = this.getUser.profile_image;
  },
};
</script>
