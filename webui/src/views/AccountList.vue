<template>
  <div class="accountList">
    <h1>My List</h1>
    <account-nav />
    <account-list-filter @status-change="updateQueryStatus" />
    <side-filter @side-filter-change="updateQuerySideFilter" />
    <account-list-shows
      v-show="query.status == 'watching' || query.status == ''"
      :tableName="'Watching'"
      :bingeStatusList="watchList"
    />
    <account-list-shows
      v-show="query.status == 'completed' || query.status == ''"
      :tableName="'Completed'"
      :bingeStatusList="completedList"
    />
    <account-list-shows
      v-show="query.status == 'paused' || query.status == ''"
      :tableName="'Paused'"
      :bingeStatusList="pausedList"
    />
    <account-list-shows
      v-show="query.status == 'dropped' || query.status == ''"
      :tableName="'Dropped'"
      :bingeStatusList="droppedList"
    />
    <account-list-shows
      v-show="query.status == 'planned' || query.status == ''"
      :tableName="'Planned'"
      :bingeStatusList="plannedList"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import AccountListFilter from '../components/AccountListFilter.vue';
import AccountListShows from '../components/AccountListShows.vue';
import AccountNav from '../components/AccountNav.vue';
import SideFilter from '../components/SideFilter.vue';
import DataService from '../../service/dataService';

export default {
  components: { AccountNav, AccountListFilter, AccountListShows, SideFilter },
  data() {
    return {
      query: {
        userId: '',
        country: '',
        genre: '',
        yearStart: '',
        yearEnd: '',
        status: '',
      },
      user: {},
      bingeList: [],
      watchList: [],
      completedList: [],
      pausedList: [],
      plannedList: [],
      droppedList: [],
    };
  },
  name: 'My List',
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
      this.query.userId = user.id_user;
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
      console.log('My List mount');
    }
  },
  watch: {
    query: {
      deep: true,
      async handler() {
        this.loadTables();
      },
    },
  },
  methods: {
    ...mapActions(['login']),
    async loadTables() {
      await this.getBingeList();
      // filtered watching
      this.watchList = this.bingeList.filter((element) => {
        return element.status == 'watching';
      });

      console.log('WATCH LIST: ', this.watchList);
      // filtered completed
      this.completedList = this.bingeList.filter((element) => {
        return element.status == 'completed';
      });
      console.log('COMPLETED LIST: ', this.completedList);

      // filtered paused
      this.pausedList = this.bingeList.filter((element) => {
        return element.status == 'paused';
      });
      console.log('PAUSED LIST: ', this.pausedList);

      // filtered planned
      this.plannedList = this.bingeList.filter((element) => {
        return element.status == 'planned';
      });
      console.log('PLANNED LIST: ', this.plannedList);

      // filtered dropped
      this.droppedList = this.bingeList.filter((element) => {
        return element.status == 'dropped';
      });
      console.log('DROPPED LIST: ', this.droppedList);
    },
    async getBingeList() {
      this.bingeList = await DataService.getAccountList(this.query);
    },
    updateQueryStatus(status) {
      if (status !== 'all') {
        this.query.status = status;
      } else {
        this.query.status = '';
      }
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
