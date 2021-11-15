<template>
  <div>
    <users-filter @users-filter-change="setUserFilter" />
    <browse-user :users="listOfUsers" />
    <div>
      <footer>
        <pagination v-model="page" :records="total" :per-page="perPage" @paginate="onPageChanged($event)" />
      </footer>
    </div>
  </div>
</template>
<script>
import BrowseUser from '../components/BrowseUser.vue';
import UsersFilter from '../components/UsersFilter.vue';
import DataService from '../../service/dataService';
export default {
  data() {
    return {
      query: {
        id_user: '',
        email: '',
        google_id: '',
        username: '',
        role_id: '',
        time_zone: '',
        offset: 0,
        limit: 4,
      },
      listOfUsers: [],
      page: 1,
      perPage: 4,
      total: 0,
      isNotFound: false,
    };
  },
  components: { UsersFilter, BrowseUser },
  watch: {
    query: {
      deep: true,
      async handler() {
        await this.getUsers();
      },
    },
  },
  async mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      console.log('GET users');
      this.listOfUsers = await DataService.getUserByFilter(this.query);
      console.log('LIST USERS: ', this.listOfUsers);
      if (this.listOfUsers.length > 0) {
        console.log('THIS listOfUsers: ', this.listOfUsers);
        if (this.listOfUsers.length < this.perPage && this.query.offset == 0) {
          this.total = this.listOfUsers.length;
        } else {
          this.total = this.listOfUsers[0].total;
        }
        this.isNotFound = false;
      } else {
        this.total = 0;
        this.isNotFound = true;
      }
    },
    setUserFilter(newQuery) {
      // this.query = newQuery;
      this.query = { ...this.query, ...newQuery };
    },
    onPageChanged(selectedPage) {
      this.page = selectedPage;
      this.query.offset = this.query.limit * (selectedPage - 1);
    },
  },
};
</script>
