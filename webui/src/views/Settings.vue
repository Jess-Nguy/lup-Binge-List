<template>
  <div class="settings">
    <h1>Settings</h1>
    <!-- profile -->
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Avatar</h5>
        <div v-show="isAdmin">
          <form @submit.prevent="updateBanners">
            <h3>Add the webpage's</h3>
            <label for="image-link1">Banner 1: </label>
            <input type="text" id="image-link1" v-model="banners[0]" />
            <img :src="banners[0]" alt="profile image" width="350" height="200" />
            <br />
            <label for="image-link1">Banner 2: </label>
            <input type="text" id="image-link2" v-model="banners[1]" />
            <img :src="banners[1]" alt="profile image" width="350" height="200" />
            <br />
            <label for="image-link1">Banner 3: </label>
            <input type="text" id="image-link3" v-model="banners[2]" />
            <img :src="banners[2]" alt="profile image" width="350" height="200" /><br />
            <button type="submit" class="btn btn-primary">Update Banners</button>
          </form>
        </div>
      </div>

      <div class="card-body">
        <label for="account-username">Username: </label>
        <input type="text" id="account-username" v-model="username" />
      </div>
      <div class="card-body">
        <label for="image-link">Time zone: </label>
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
        <button type="submit" class="btn btn-primary">Save</button>
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
import DataService from '../../service/dataService';

export default {
  data() {
    return {
      profileUrl: '',
      isAdmin: false,
      role: 'User',
      banners: [
        require('@/assets/img/Banner.png'),
        require('@/assets/img/kBanner.png'),
        require('@/assets/img/aBanner.png'),
      ],
      username: '',
      user: {},
    };
  },
  name: 'Settings',
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
    getRole() {
      return this.$store.getters.getRole;
    },
  },
  async mounted() {
    await this.getBanners();
    this.$store.subscribe((setUser, user) => {
      console.log(setUser.type);
      console.log(setUser.payload);
      console.log('SETTING USER: ');
      this.username = user.username;
    });
    this.$store.subscribe((setRole, role) => {
      console.log('TYPE: ', setRole.type);
      console.log('PAYLOAD: ', setRole.payload);
      console.log('ROLE Browser: ', role);
      this.role = role.payload;
      if (this.role === 'Admin') {
        this.isAdmin = true;
      }
    });

    const localToken = localStorage.getItem('userToken');
    if (!localToken) {
      this.$router.push('/');
    } else {
      if (!this.getUser) {
        this.login(localToken);
        this.username = this.getUser.username;
        this.user = this.getUser;
        console.log('SETTING USERNAME: ', this.username);
        this.profileUrl = this.getUser.profile_image;
      } else {
        this.username = this.getUser.username;
        this.user = this.getUser;
        console.log('SETTING user: ', this.user);
      }
      this.role = this.getRole;
      if (this.role === 'Admin') {
        this.isAdmin = true;
      }
      console.log('Settings mount');
    }
  },
  methods: {
    ...mapActions(['login']),
    async getBanners() {
      const gotBanners = await DataService.getBanners();
      if (gotBanners !== null) {
        this.banners = gotBanners;
      }
    },
    async updateBanners() {
      const data = {
        banners: this.banners,
        id: this.user.id_user,
      };
      await DataService.updateBanners(data);
    },
  },
};
</script>
