<template>
  <div class="favourite">
    <h1>Favourite</h1>
    <account-nav :id="query.userId" />
    <div class="row">
      <div class="col-2">
        <side-filter @side-filter-change="updateQuerySideFilter" />
      </div>
      <div class="card border border-dark shadow-0 col-10">
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
  </div>
</template>

<script>
import AccountNav from '../components/AccountNav.vue';
import SideFilter from '../components/SideFilter.vue';
import FavouriteShow from '../components/FavouriteShow.vue';
import DataService from '../../service/dataService';
export default {
  components: { AccountNav, SideFilter, FavouriteShow },
  data() {
    return {
      query: {
        userId: this.$route.params.id,
        country: '',
        genre: '',
        yearStart: '',
        yearEnd: '',
        status: '',
        favourite: true,
      },
      user: {
        name: localStorage.getItem('username'),
        profileUrl: localStorage.getItem('profileImage'),
        id: localStorage.getItem('userId'),
        roleId: localStorage.getItem('userRoleId'),
      },
      favourites: [],
    };
  },
  name: 'Favourite',
  created() {
    this.query.userId = this.$route.params.id;
  },
  watch: {
    query: {
      deep: true,
      async handler() {
        this.loadTables();
      },
    },
  },
  computed: {},
  async mounted() {
    const localToken = localStorage.getItem('userToken');
    if (!localToken) {
      this.$router.push('/');
    }
    await this.loadTables();
  },
  methods: {
    async loadTables() {
      await this.getBingeList();
    },
    async getBingeList() {
      this.favourites = await DataService.getAccountList(this.query);
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
