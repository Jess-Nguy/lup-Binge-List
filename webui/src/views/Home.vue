<template>
  <div class="home">
    <h1>Activity List</h1>
    <activity-list />
    <h1>In Progress</h1>
    <show-preview />
    <h1>Trending shows</h1>
    <show-preview />
    <h1>Newly added shows</h1>
    <show-preview />
  </div>
</template>

<script>
import ActivityList from '@/components/ActivityList.vue';
import ShowPreview from '@/components/ShowPreview.vue';
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      user: {},
    };
  },
  name: 'Home',
  components: {
    ActivityList,
    ShowPreview,
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
    }
  },
  methods: {
    ...mapActions(['login']),
  },
};
</script>
