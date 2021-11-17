<template>
  <div class="settings">
    <h1>Settings</h1>
    <!-- profile -->
    <div class="card">
      <div class="card-body">
        <img :src="user.profileUrl" alt="profile image" width="100" height="100" />
        <div v-show="isAdmin">
          <form @submit.prevent="updateBanners">
            <h3>Add the webpage's Banners</h3>
            <label for="image-link1">Banner 1: </label>
            <input type="text" id="image-link1" v-model="banners[0]" />
            <img :src="banners[0]" alt="banner image 1" width="350" height="200" />
            <br />
            <label for="image-link1">Banner 2: </label>
            <input type="text" id="image-link2" v-model="banners[1]" />
            <img :src="banners[1]" alt="banner image 2" width="350" height="200" />
            <br />
            <label for="image-link1">Banner 3: </label>
            <input type="text" id="image-link3" v-model="banners[2]" />
            <img :src="banners[2]" alt="banner image 3" width="350" height="200" /><br />
            <button type="submit" class="btn btn-primary">Update Banners</button>
          </form>
        </div>
      </div>
      <form @submit.prevent="updateUserDetails">
        <div class="card-body">
          <label for="account-username">Username* : </label>
          <input type="text" id="account-username" v-model="username" />
          <div class="requiredFields" v-if="v$.username.$error">Genre field is required</div>
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
import { required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

export default {
  data() {
    return {
      v$: useVuelidate(),
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
      this.isAdmin = true;
    }
    await this.getBanners();

    const localToken = localStorage.getItem('userToken');
    if (!localToken) {
      this.$router.push('/');
    }
    await this.getUserInfo();
  },
  validations() {
    return {
      username: { required },
    };
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
        if (this.banners[0] == '') {
          this.banners[0] = require('@/assets/img/Banner.png');
        }
        if (this.banners[1] == '') {
          this.banners[1] = require('@/assets/img/kBanner.png');
        }
        if (this.banners[2] == '') {
          this.banners[2] = require('@/assets/img/aBanner.png');
        }

        const data = {
          banners: this.banners,
          id: this.user.id,
        };
        await DataService.updateBanners(data);
        await this.getBanners();
        alert('Updated banners');
      }
    },
    async updateUserDetails() {
      this.v$.$validate();
      if (!this.v$.$error) {
        localStorage.setItem('username', this.username);
        const data = {
          username: this.username.replace(/'/g, "''"),
          timezone: this.timezone,
          id_user: this.user.id,
        };
        await DataService.updateByUserId(data);
        alert('Updated user details');
      } else {
        alert('Need to fill in a username!');
      }
    },
    async getUserInfo() {
      const result = await DataService.getUserById(this.user.id);
      this.timezone = result[0].time_zone;
    },
  },
};
</script>
