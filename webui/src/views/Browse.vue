<template>
  <div class="browse">
    <h1>This is a browse page</h1>
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
import BrowseFilter from '../components/BrowseFilter.vue';
import BrowseShow from '../components/BrowseShow.vue';
export default {
  components: { BrowseFilter, BrowseShow },
  data() {
    return {};
  },
  name: 'Browse',
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
  },
  mounted() {
    const localToken = localStorage.getItem('user-token');
    if (!localToken) {
      this.$router.push('/');
    } else {
      if (!this.getUser) {
        this.login(localToken);
      }
      console.log('Browse mount');
    }
  },
  methods: {
    ...mapActions(['login']),
  },
};
</script>
