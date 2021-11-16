<template>
  <div class="accountList">
    <div v-if="query.userId === loggedInUser.id">
      <h1>My List</h1>
    </div>
    <div v-else>
      <h1>{{ userQuery.username }}'s Account</h1>
    </div>
    <account-nav :id="query.userId" />
    <div class="container-fluid">
      <div class="row mb-3">
        <div class="col-2">
          <div class="row align-items-center">
            <account-list-filter style="grid-area: menu" @status-change="updateQueryStatus" />
          </div>
          <div class="row">
            <side-filter style="grid-area: menu" @side-filter-change="updateQuerySideFilter" />
          </div>
        </div>
        <div class="col-10">
          <account-list-shows
            v-show="query.status == 'watching' || query.status == ''"
            :tableName="'Watching'"
            :bingeStatusList="watchList"
            @update-account-show="accountShowUpdated"
            :isMyAccount="isSameUser"
          />
          <account-list-shows
            v-show="query.status == 'completed' || query.status == ''"
            :tableName="'Completed'"
            :bingeStatusList="completedList"
            @update-account-show="accountShowUpdated"
            :isMyAccount="isSameUser"
          />
          <account-list-shows
            v-show="query.status == 'paused' || query.status == ''"
            :tableName="'Paused'"
            :bingeStatusList="pausedList"
            @update-account-show="accountShowUpdated"
            :isMyAccount="isSameUser"
          />
          <account-list-shows
            v-show="query.status == 'dropped' || query.status == ''"
            :tableName="'Dropped'"
            :bingeStatusList="droppedList"
            @update-account-show="accountShowUpdated"
            :isMyAccount="isSameUser"
          />
          <account-list-shows
            v-show="query.status == 'planned' || query.status == ''"
            :tableName="'Planned'"
            :bingeStatusList="plannedList"
            @update-account-show="accountShowUpdated"
            :isMyAccount="isSameUser"
          />
        </div>
      </div>
    </div>
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
        userId: this.$route.params.id,
        country: '',
        genre: '',
        yearStart: '',
        yearEnd: '',
        status: '',
        favourite: false,
      },
      userQuery: {
        id_user: this.$route.params.id,
        email: '',
        google_id: '',
        username: '',
        role_id: '',
        time_zone: '',
        offset: 0,
        limit: 4,
      },
      loggedInUser: {
        name: localStorage.getItem('username'),
        profileUrl: localStorage.getItem('profileImage'),
        id: localStorage.getItem('userId'),
        roleId: localStorage.getItem('userRoleId'),
      },
      isSameUser: false,
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
  async created() {
    this.query.userId = this.$route.params.id;
    this.userQuery.id_user = this.$route.params.id;
    await this.getUsers();
    this.isSameUser = this.userQuery.id_user == this.loggedInUser.id;
  },
  async mounted() {
    await this.loadTables();
  },
  watch: {
    query: {
      deep: true,
      async handler() {
        await this.loadTables();
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
    async accountShowUpdated() {
      await this.loadTables();
    },
    async getUsers() {
      const response = await DataService.getUserByFilter(this.userQuery);
      this.userQuery = response[0];
      console.log('AL USER: ', this.userQuery);
      this.role = this.userQuery.role_id == 1 ? 'Admin' : 'User';
    },
  },
};
</script>
