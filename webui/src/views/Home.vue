<template>
  <div class="home">
    <activity-list :msg="welcomeMessage" :profileUrl="profileUrl" />
  </div>
</template>

<script>
import ActivityList from '@/components/ActivityList.vue';
import { mapActions } from 'vuex';
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

    const localToken = localStorage.getItem('user-token');
    if (!localToken) {
      this.$router.push('/');
    } else {
      if (!this.getUser) {
        this.login(localToken);
      }
      this.welcomeMessage = 'Welcome ' + this.getUser.username;
      this.profileUrl = this.getUser.profile_image;
    }
  },
  methods: {
    ...mapActions(['login']),
  }
};
</script>
