<template>
  <div class="favourite">
    <h1>Favourite</h1>
    <account-nav />
    <side-filter @side-filter-change="updateQuerySideFilter" />
    <div class="card border border-dark shadow-0">
      <div class="card-body">
        <div v-if="favourites.length > 0">
          <div v-for="fav in favourites" :key="fav.id_user_show">
            <favourite-show :showFav="fav" />
          </div>
        </div>
        <div v-else id="emptyFavourites">
          <p>No favourites found</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import AccountNav from '../components/AccountNav.vue';
import SideFilter from '../components/SideFilter.vue';
import FavouriteShow from '../components/FavouriteShow.vue';
import DataService from '../../service/dataService';
export default {
  components: { AccountNav, SideFilter, FavouriteShow },
  data() {
    return {
      query: {
        userId: '',
        country: '',
        genre: '',
        yearStart: '',
        yearEnd: '',
        status: '',
        favourite: true,
      },
      favourites: [],
    };
  },
  name: 'Favourite',
  watch: {
    query: {
      deep: true,
      async handler() {
        this.loadTables();
      },
    },
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
  },
  async mounted() {
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
        this.user = this.getUser;
        this.query.userId = this.getUser.id_user;
      } else {
        this.user = this.getUser;
        this.query.userId = this.getUser.id_user;
      }
      console.log('Favourite mount');
    }
    await this.loadTables();
  },
  methods: {
    ...mapActions(['login']),
    async loadTables() {
      await this.getBingeList();
    },
    async getBingeList() {
      console.log('QUERY: ', this.query);
      this.favourites = await DataService.getAccountList(this.query);
      console.log('FAVOURITE: ', this.favourites);
    },
    updateQuerySideFilter(filter) {
      this.query.country = filter.country;
      this.query.genre = filter.genre;
      this.query.yearStart = filter.yearStart;
      this.query.yearEnd = filter.yearEnd;
    },
  },
};
</script>
<style scoped>
#emptyFavourites {
  padding: 100px;
}

#emptyFavourites > p {
  color: red;
}
</style>
