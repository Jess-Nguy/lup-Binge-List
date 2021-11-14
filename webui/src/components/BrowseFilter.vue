<template>
  <div class="input-group rounded" id="search-filter-container">
    <!-- Search bar -->
    <input
      type="search"
      class="form-control rounded"
      placeholder="Search shows..."
      aria-label="Search"
      aria-describedby="search-addon"
      v-model="query.searchText"
    />
    <span class="input-group-text border-0" id="search-addon">
      <i class="fas fa-search"></i>
    </span>
  </div>
  <!-- Show/user switch -->
  <!-- <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
    <label class="form-check-label" for="flexSwitchCheckDefault">Show/User</label>
  </div> -->
  <div id="dropdown-container">
    <!-- Country -->
    <div class="btn-group">
      <label class="form-label" for="browseFilterCountry">Country </label>
      <select v-model="query.country" id="browseFilterCountry" class="form-select" aria-label="Default select example">
        <option value="">-</option>
        <option v-for="(country, i) in listOfCountries" :key="i">{{ country }}</option>
      </select>
    </div>
    <!-- Genres -->
    <div class="btn-group">
      <label class="form-label" for="browseFilterGenre">Genre</label>
      <select v-model="query.genre" id="browseFilterGenre" class="form-select" aria-label="Default select example">
        <option value="">-</option>
        <option v-for="(genre, i) in listOfGenres" :key="i">{{ genre }}</option>
      </select>
    </div>
    <!-- Airing status -->
    <div class="btn-group">
      <label class="form-label" for="browseFilterAirStatus">Airing Status </label>
      <select
        v-model="query.airingStatus"
        id="browseFilterAirStatus"
        class="form-select"
        aria-label="Default select example"
      >
        <option value="">-</option>
        <option v-for="(status, i) in listOfStatus" :key="i" :value="status">{{ status }}</option>
      </select>
    </div>
    <!-- Year start range -->
    <div class="btn-group">
      <label class="form-label" for="browseFilterYearRange">Year </label>
      <select
        v-model="query.yearStart"
        id="browseFilterYearRange"
        class="form-select"
        aria-label="Default select example"
      >
        <option value="">-</option>
        <option v-for="(yearStart, i) in listOfYears" :key="i">{{ yearStart }}</option>
      </select>
      <p>to</p>
      <!-- Year end range -->
      <select
        v-model="query.yearStart"
        id="browseFilterYearRange"
        class="form-select"
        aria-label="Default select example"
      >
        <option value="">-</option>
        <option v-for="(yearEnd, x) in listOfYears" :key="x">{{ yearEnd }}</option>
      </select>
    </div>
    <div class="btn-group">
      <a><i class="fas fa-sort-alpha-up"></i></a> <a><i class="fas fa-sort-alpha-down"></i></a>
    </div>
    <!-- show filter picks -->
    <!-- <div class="card">
      <i class="fas fa-tags"></i>
      <div class="card text-center border border-light shadow-0" id="filter-selection-cards">
        <div class="card-body">
          <h5 class="card-title">Finished</h5>
        </div>
      </div>
      <a><i class="fas fa-sort-alpha-up"></i></a>
      <a><i class="fas fa-sort-alpha-down"></i></a>
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      listOfStatus: ['Airing', 'Finished', 'Not released', 'Not airing'],
      listOfYears: [
        1998,
        1999,
        2000,
        2001,
        2002,
        2003,
        2004,
        2005,
        2006,
        2007,
        2008,
        2009,
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022,
        2023,
        2024,
        2025,
      ],
      listOfCountries: [],
      listOfGenres: [],
      query: {
        country: '',
        genre: '',
        airingStatus: '',
        yearStart: '',
        yearEnd: '',
        searchText: '',
      },
    };
  },
  name: 'BrowserFilter',
  computed: {
    getCountries() {
      return this.$store.getters.getCountries;
    },
    getGenres() {
      return this.$store.getters.getGenres;
    },
  },
  mounted() {
    const localToken = localStorage.getItem('userToken');
    if (!localToken) {
      this.$router.push('/');
    }
    this.listOfCountries = this.getCountries;
    this.listOfGenres = this.getGenres;
  },
  methods: {},
  watch: {
    query: {
      deep: true,
      handler() {
        this.$emit('browser-filter-change', this.query);
      },
    },
  },
};
</script>
<style scoped>
#search-filter-container {
  padding: 50px;
}

#dropdown-container {
  padding-bottom: 25px;
}

#dropdown-container > div {
  padding-bottom: 25px;
}
.btn-group {
  padding: 10px;
}
</style>
