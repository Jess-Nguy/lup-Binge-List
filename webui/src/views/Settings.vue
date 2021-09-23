<template>
  <div class="settings">
    <h1>Settings</h1>
    <!-- profile -->
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Avatar</h5>
        <label for="image-link">Add your profile image:</label>
        <input type="url" id="image-link" />
        <img src="https://cdn.onlinewebfonts.com/svg/img_98811.png" alt="profile image" width="100" height="100" />
      </div>
      <div class="card-body">
        <label for="account-username">Username</label>
        <input type="text" id="account-username" />
      </div>
      <div class="card-body">
        <label for="image-link">Time zone:</label>
        <div class="btn-group">
          <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Time zone
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">list of time zones</a></li>
          </ul>
        </div>
      </div>
      <div class="card-footer">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</template>
<style>
.card {
  color: black;
}
</style>
<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      welcomeMessage: 'Welcome user',
      profileUrl: '',
    };
  },
  name: 'Settings',
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
      console.log('Settings mount');
    }
  },
  methods: {
    ...mapActions(['login']),
  },
};
</script>
