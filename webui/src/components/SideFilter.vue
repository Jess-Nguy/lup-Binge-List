<template>
  <!--TO DO:  Could be renamed to side filter since it's the same in both favourite and accountlistfilter.. -->
  <div>
    <div class="vstack gap-2 col-md-1 mx-auto">
      <!-- Country filter -->
      <label class="form-label" for="sideFilterCountry">Country</label>

      <div class="btn-group">
        <select v-model="query.country" id="sideFilterCountry" class="form-select" aria-label="Default select example">
          <option value="">-</option>
          <option v-for="(country, i) in listOfCountries" :key="i">{{ country }}</option>
        </select>
      </div>
      <!-- Genre -->
      <label class="form-label" for="sideFilterGenre">Genre</label>
      <div class="btn-group">
        <select v-model="query.genre" id="sideFilterGenre" class="form-select" aria-label="Default select example">
          <option value="">-</option>
          <option v-for="(genre, i) in listOfGenres" :key="i">{{ genre }}</option>
        </select>
      </div>
      <!-- Year -->
      <label class="form-label" for="sideFilterYearRange">Year</label>
      <div class="btn-group">
        <select
          v-model="query.yearStart"
          id="sideFilterYearRange"
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
          id="sideFilterYearRange"
          class="form-select"
          aria-label="Default select example"
        >
          <option value="">-</option>
          <option v-for="(yearEnd, x) in listOfYears" :key="x">{{ yearEnd }}</option>
        </select>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
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
        yearStart: '',
        yearEnd: '',
      },
    };
  },
  name: 'SideFilter',
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
    // NEED TO HAVE UPDATED user token grab.
    const localToken = localStorage.getItem('userToken');
    if (!localToken) {
      this.$router.push('/');
    } else {
      if (!this.getUser) {
        this.login(localToken);
      }
      // need else statement
    }
    this.listOfCountries = this.getCountries;
    this.listOfGenres = this.getGenres;
    this.listOfYears = this.getYears;
    this.listOfAiringStatus = this.getAiringStatus;
  },
  methods: {
    ...mapActions(['login']),
    submitRequestShow() {
      console.log('enteredCountry: ', this.enteredCountry);
    },
  },
  watch: {
    query: {
      deep: true,
      handler() {
        this.$emit('side-filter-change', this.query);
      },
    },
  },
};
</script>
<style scoped>
.vstack {
  float: left;
}
</style>
