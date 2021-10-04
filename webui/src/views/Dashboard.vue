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
          <img class="d-block w-100" src="@/assets/img/Banner.png" alt="First slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="@/assets/img/kBanner.png" alt="Second slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="@/assets/img/aBanner.png" alt="Third slide" />
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

export default {
  data() {
    return {
      welcomeMessage: '',
      profileUrl: '',
    };
  },
  name: 'Dashboard',
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

    const localToken = localStorage.getItem('userToken');
    if (!localToken) {
      this.$router.push('/');
    } else {
      if (!this.getUser) {
        this.login(localToken);
      }
      this.welcomeMessage = 'Welcome ' + this.getUser.username;
      this.profileUrl = this.getUser.profile_image;
      console.log('Dashboard mount');
    }
  },
  methods: {
    ...mapActions(['login']),
  },
};
</script>
