<template>
  <div class="stats">
    <h1>This is a stats page</h1>
    <!-- Year type dropdown input -->
    <div class="form-outline mb-4">
      <label class="form-label" for="form6Example4"> Year </label>
      <div class="form-outline btn-group">
        <button
          id="form6Example2"
          type="button"
          class="btn btn-light dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          All time
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">All time</a></li>
        </ul>
      </div>
    </div>
    <!-- Chart/table switch -->
    <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
      <label class="form-check-label" for="flexSwitchCheckDefault">Chart/Table</label>
    </div>
    <h1>Genre</h1>
    <!-- <bar-graph-stats /> -->
    <table-stats />
    <h1>Score</h1>
    <!-- <bar-graph-stats /> -->
    <table-stats />
    <h1>Status</h1>
    <!-- <bar-graph-stats /> -->
    <table-stats />
  </div>
</template>
<script>
// import BarGraphStats from '@/components/BarGraphStats.vue';
import TableStats from '@/components/TableStats.vue';
import { mapActions } from 'vuex';
export default {
  data() {
    return {};
  },
  name: 'Stats',
  components: {
    // BarGraphStats,
    TableStats,
  },
  computed: {},
  mounted() {
    const localToken = localStorage.getItem('userToken');
    if (!localToken) {
      this.$router.push('/');
    } else {
      if (!this.getUser) {
        this.login(localToken);
      }
      console.log('Status mount');
    }
  },
  methods: {
    ...mapActions(['login']),
  },
};
</script>
