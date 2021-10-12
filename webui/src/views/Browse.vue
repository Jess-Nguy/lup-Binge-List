<template>
  <div class="browse">
    <h1>This is a browse page</h1>
    <div v-if="role === 'Admin'">
      <add-show></add-show>
    </div>
    <browse-filter />
    <browse-show />
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
export default {
  components: { BrowseFilter, BrowseShow, AddShow },
  data() {
    return {
      role: 'User',
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
  mounted() {
    const localToken = localStorage.getItem('userToken');
    if (!localToken) {
      this.$router.push('/');
    } else {
      if (!this.getUser) {
        this.login(localToken);
      }
      console.log('Browse mount');
    }
    // this.$store.subscribe((setRole, role) => {
    //   console.log('TYPE: ', setRole.type);
    //   console.log('PAYLOAD: ', setRole.payload);
    //   console.log('ROLE Browser: ', role);
    //   this.role = role.payload;
    // });
    console.log('BROWSE GET ROLE: ', this.getRole);
    this.role = this.getRole;
  },
  methods: {
    ...mapActions(['login']),
  },
};
</script>
