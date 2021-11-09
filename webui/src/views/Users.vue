<template>
  <div>
    <users-filter @users-filter-change="setUserFilter" />
    <browse-user :users="listOfUsers" />
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
      },
      listOfUsers: [],
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
    },
    setUserFilter(query) {
      this.query = query;
    },
  },
};
</script>
