<template>
  <div class="input-group rounded">
    <!-- Search bar -->
    <input
      type="search"
      class="form-control rounded"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="search-addon"
    />
    <span class="input-group-text border-0" id="search-addon">
      <i class="fas fa-search"></i>
    </span>
  </div>
  <!-- Show/user switch -->
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
    <label class="form-check-label" for="flexSwitchCheckDefault">Show/User</label>
  </div>
  <!-- Country -->
  <div class="btn-group">
    <label class="form-label" for="browseFilterCountry">Country</label>
    <select v-model="enteredCountry" id="browseFilterCountry" class="form-select" aria-label="Default select example">
      <option value="">-</option>
      <option value="Canada">Canada</option>
    </select>
  </div>
  <!-- Genres -->
  <div class="btn-group">
    <label class="form-label" for="browseFilterGenre">Genre</label>
    <select v-model="enteredGenre" id="browseFilterGenre" class="form-select" aria-label="Default select example">
      <option value="">-</option>
      <option value="Comedy">Comedy</option>
    </select>
  </div>
  <!-- Airing status -->
  <div class="btn-group">
    <label class="form-label" for="browseFilterAirStatus">Airing Status</label>
    <select
      v-model="enteredAirStatus"
      id="browseFilterAirStatus"
      class="form-select"
      aria-label="Default select example"
    >
      <option value="">-</option>
      <option>On going</option>
    </select>
  </div>
  <!-- Year start range -->
  <div class="btn-group">
    <label class="form-label" for="browseFilterYearRange">Year</label>
    <select
      v-model="enteredYearStart"
      id="browseFilterYearRange"
      class="form-select"
      aria-label="Default select example"
    >
      <option value="">-</option>
      <option>2000</option>
    </select>
    <p>to</p>
    <!-- Year end range -->
    <select v-model="enteredYearEnd" id="browseFilterYearRange" class="form-select" aria-label="Default select example">
      <option value="">-</option>
      <option>2020</option>
    </select>
  </div>
  <!-- show filter picks -->
  <div class="card">
    <i class="fas fa-tags"></i>
    <div class="card text-center border border-light shadow-0" id="filter-selection-cards">
      <div class="card-body">
        <h5 class="card-title">Finished</h5>
      </div>
    </div>
    <a><i class="fas fa-sort-alpha-up"></i></a>
    <a><i class="fas fa-sort-alpha-down"></i></a>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      enteredCountry: '',
      enteredGenre: '',
      enteredAirStatus: '',
      enteredYearStart: '',
      enteredYearEnd: '',
    };
  },
  name: 'BrowserFilter',
  computed: {},
  mounted() {
    const localToken = localStorage.getItem('user-token');
    if (!localToken) {
      this.$router.push('/');
    } else {
      if (!this.getUser) {
        this.login(localToken);
      }
    }
  },
  methods: {
    ...mapActions(['login']),
    submitRequestShow() {
      console.log('enteredCountry: ', this.enteredCountry);
    },
  },
};
</script>
