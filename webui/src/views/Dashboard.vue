<template>
  <div class="dashboard">
    <h1 v-if="welcomeMessage">{{ welcomeMessage }}</h1>
    <img v-if="profileUrl" :src="profileUrl" alt="profile image" width="100" height="100" />
    <h3>Manage your shows with <img src="@/assets/img/LogoBL.png" alt="BingeList" width="100" height="40" /></h3>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <ol class="carousel-indicators">
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" :src="banners[0]" alt="First slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" :src="banners[1]" alt="Second slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" :src="banners[2]" alt="Third slide" />
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import DataService from '../../service/dataService';

export default {
  data() {
    return {
      welcomeMessage: '',
      profileUrl: '',
      isAdmin: false,
      banners: [
        require('@/assets/img/Banner.png'),
        require('@/assets/img/kBanner.png'),
        require('@/assets/img/aBanner.png'),
      ],
    };
  },
  name: 'Dashboard',
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
  },
  async mounted() {
    await this.getBanners();
    this.$store.subscribe((setUser, user) => {
      console.log(setUser.type);
      console.log(setUser.payload);
      console.log('USER: ', user);
      this.user = user;
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
        // this.username = this.getUser.username;
        this.welcomeMessage = 'Welcome ' + this.getUser.username;
        this.user = this.getUser;
        this.profileUrl = this.getUser.profile_image;
      } else {
        // this.username = this.getUser.username;
        this.welcomeMessage = 'Welcome ' + this.getUser.username;
        this.user = this.getUser;
        this.profileUrl = this.getUser.profile_image;
      }
      this.role = this.getRole;
      if (this.role === 'Admin') {
        this.isAdmin = true;
      }

      console.log('Dashboard mount');
    }
  },
  methods: {
    ...mapActions(['login']),
    async getBanners() {
      const gotBanners = await DataService.getBanners();
      if (gotBanners !== null) {
        this.banners = gotBanners;
      }

      console.log('DASH BANNER: ', this.banners);
    },
  },
};
</script>
