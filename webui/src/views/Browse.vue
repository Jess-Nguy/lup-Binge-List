<template>
  <div class="browse">
    <div v-if="isAdmin">
      <add-show @submitted-show="getShows"></add-show>
    </div>
    <browse-filter @browser-filter-change="setQuery" />
    <browse-show :isAdmin="isAdmin" :showsArr="shows" :loggedInUser="user" @updated-show-info="getShows" />
    <div v-if="isNotFound">
      <h2 style="color: red">Could not find any shows.</h2>
    </div>
    <!-- Show cards -->
    <div>
      <footer>
        <pagination v-model="page" :records="total" :per-page="perPage" @paginate="onPageChanged($event)" />
      </footer>
    </div>
  </div>
</template>
<style lang="scss">
.fa-sort-alpha-up,
.fa-sort-alpha-down,
.fa-tags,
.fa-check {
  color: red;
}

.fa-play {
  color: greenyellow;
}

.fa-calendar-alt {
  color: rgb(22, 0, 218);
}

#filter-show-cards,
#filter-selection-cards {
  color: black;
}
</style>
<script>
import { mapActions } from 'vuex';
import AddShow from '../components/AddShow.vue';
import BrowseFilter from '../components/BrowseFilter.vue';
import BrowseShow from '../components/BrowseShow.vue';
import DataService from '../../service/dataService';
export default {
  components: { BrowseFilter, BrowseShow, AddShow },
  data() {
    return {
      role: 'User',
      isAdmin: false,
      shows: [],
      query: {
        country: '',
        genre: '',
        airingStatus: '',
        yearStart: '',
        yearEnd: '',
        searchText: '',
        offset: 0,
        limit: 10,
        order: 'title[1] ASC',
      },
      perPage: 10,
      page: 1,
      user: {
        name: localStorage.getItem('username'),
        profileUrl: localStorage.getItem('profileImage'),
        id: localStorage.getItem('userId'),
        roleId: localStorage.getItem('userRoleId'),
      },
      total: 0,
      isNotFound: false,
    };
  },
  name: 'Browse',
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
    getRole() {
      return this.$store.getters.getRole;
    },
  },
  async mounted() {
    const localToken = localStorage.getItem('userToken');
    if (!localToken) {
      this.$router.push('/');
    }
    if (this.user.roleId == 1) {
      this.isAdmin = true;
    }
    await this.getShows();
  },
  watch: {
    query: {
      deep: true,
      async handler() {
        await this.getShows();
      },
    },
  },
  methods: {
    ...mapActions(['login']),
    async getShows() {
      const response = await DataService.getShowBrowseFilter(this.query);
      this.shows = response;
      if (this.shows.length > 0) {
        if (this.shows.length < this.perPage && this.query.offset == 0) {
          this.total = this.shows.length;
        } else {
          this.total = this.shows[0].total;
        }
        this.isNotFound = false;
      } else {
        this.total = 0;
        this.isNotFound = true;
      }
    },
    setQuery(newQuery) {
      this.query = { ...this.query, ...newQuery };
    },
    onPageChanged(selectedPage) {
      this.page = selectedPage;
      this.query.offset = this.query.limit * (selectedPage - 1);
    },
  },
};
</script>
