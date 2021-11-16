<template>
  <div class="dashboard">
    <h1 v-if="welcomeMessage">{{ welcomeMessage }}</h1>
    <img v-if="user.profileUrl" :src="user.profileUrl" alt="profile image" width="100" height="100" />
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
import DataService from '../../service/dataService';

export default {
  data() {
    return {
      welcomeMessage: '',
      banners: [
        require('@/assets/img/Banner.png'),
        require('@/assets/img/kBanner.png'),
        require('@/assets/img/aBanner.png'),
      ],
      user: {
        name: localStorage.getItem('username'),
        profileUrl: localStorage.getItem('profileImage'),
        id: localStorage.getItem('userId'),
        roleId: localStorage.getItem('userRoleId'),
      },
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
    const localToken = localStorage.getItem('userToken');
    if (!localToken) {
      this.$router.push('/');
    }

    if (this.user.name !== null) {
      this.welcomeMessage = 'Welcome ' + this.user.name;
    }
  },
  methods: {
    async getBanners() {
      const gotBanners = await DataService.getBanners();
      if (gotBanners !== null) {
        this.banners = gotBanners;
      }
    },
  },
};
</script>
