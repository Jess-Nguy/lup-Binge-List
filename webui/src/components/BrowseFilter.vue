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
        <option v-for="(status, i) in listOfAiringStatus" :key="i" :value="status">{{ status }}</option>
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
        v-model="query.yearEnd"
        id="browseFilterYearRange"
        class="form-select"
        aria-label="Default select example"
      >
        <option value="">-</option>
        <option v-for="(yearEnd, x) in listOfYears" :key="x">{{ yearEnd }}</option>
      </select>
    </div>
    <div class="btn-group">
      <button @click="orderByAsc" style="border-radius: 20%" class="btn btn-warning" :class="{ active: isAsc }">
        <i class="fas fa-sort-alpha-up fa-lg"></i>
      </button>
      <button @click="orderByDesc" style="border-radius: 20%" class="btn btn-warning" :class="{ active: !isAsc }">
        <i class="fas fa-sort-alpha-down fa-lg"></i>
      </button>
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
      listOfAiringStatus: [],
      listOfYears: [],
      listOfCountries: [],
      listOfGenres: [],
      query: {
        country: '',
        genre: '',
        airingStatus: '',
        yearStart: '',
        yearEnd: '',
        searchText: '',
        limit: 10,
        offset: 0,
        order: 'title[1] ASC',
      },
      isAsc: true,
    };
  },
  name: 'BrowserFilter',
  computed: {
    getYears() {
      return this.$store.getters.getYears;
    },
    getAiringStatus() {
      return this.$store.getters.getAiringStatus;
    },
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
    this.listOfYears = this.getYears;
    this.listOfAiringStatus = this.getAiringStatus;
  },
  methods: {
    orderByAsc() {
      this.isAsc = true;
      this.query.order = 'title[1] ASC';
    },
    orderByDesc() {
      this.isAsc = false;
      this.query.order = 'title[1] DESC';
    },
  },
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
