<template>
  <div class="browse">
    <div v-if="isAdmin">
      <add-show @submitted-show="getShows"></add-show>
    </div>
    <browse-filter @browser-filter-change="setQuery" />
    <browse-show :isAdmin="isAdmin" :showsArr="shows" :loggedInUser="user" />
    <!-- Show cards -->
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
      },
      user: {
        name: localStorage.getItem('username'),
        profileUrl: localStorage.getItem('profileImage'),
        id: localStorage.getItem('userId'),
        roleId: localStorage.getItem('userRoleId'),
      },
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
      this.shows = await DataService.getShowBrowseFilter(this.query);
    },
    setQuery(newQuery) {
      this.query = newQuery;
    },
  },
};
</script>
