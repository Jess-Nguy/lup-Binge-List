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
      <form @submit.prevent="updateUserDetails">
        <div class="card-body">
          <label for="account-username">Username: </label>
          <input type="text" id="account-username" v-model="username" />
        </div>
        <div class="card-body">
          <label for="image-link">Time zone: </label>
          <div class="btn-group">
            <select v-model="timezone" id="timezoneDropdown" class="form-select" aria-label="Default select example">
              <option value="">-</option>
              <option v-for="(tz, i) in timezones" :key="i">{{ tz }}</option>
            </select>
          </div>
        </div>
        <div class="card-footer">
          <button type="submit" class="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>
<style>
.card {
  color: black;
}
</style>
<script>
import DataService from '../../service/dataService';

export default {
  data() {
    return {
      isAdmin: false,
      banners: [
        require('@/assets/img/Banner.png'),
        require('@/assets/img/kBanner.png'),
        require('@/assets/img/aBanner.png'),
      ],
      username: localStorage.getItem('username'),
      user: {
        name: localStorage.getItem('username'),
        profileUrl: localStorage.getItem('profileImage'),
        id: localStorage.getItem('userId'),
        roleId: localStorage.getItem('userRoleId'),
      },
      timezones: [],
      timezone: '',
    };
  },
  name: 'Settings',
  computed: {
    getTimezone() {
      return this.$store.getters.getTimezone;
    },
  },
  async mounted() {
    this.timezones = this.getTimezone;

    if (this.user.roleId == 1) {
      console.log('REACHED inside if');
      this.isAdmin = true;
    }
    await this.getBanners();

    const localToken = localStorage.getItem('userToken');
    if (!localToken) {
      this.$router.push('/');
    }
    console.log('Settings mount');
    await this.getUserInfo();
  },
  methods: {
    async getBanners() {
      const gotBanners = await DataService.getBanners();
      if (gotBanners !== null) {
        this.banners = gotBanners;
      }
    },
    async updateBanners() {
      if (this.isAdmin) {
        const data = {
          banners: this.banners,
          id: this.user.id,
        };
        await DataService.updateBanners(data);
      }
    },
    async updateUserDetails() {
      localStorage.setItem('username', this.username);
      const data = {
        username: this.username,
        timezone: this.timezone,
        id_user: this.user.id,
      };
      await DataService.updateByUserId(data);
    },
    async getUserInfo() {
      const result = await DataService.getUserById(this.user.id);
      this.timezone = result[0].time_zone;
    },
  },
};
</script>
