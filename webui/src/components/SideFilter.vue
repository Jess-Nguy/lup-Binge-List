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
          v-model="query.yearStart"
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
        yearStart: '',
        yearEnd: '',
      },
    };
  },
  name: 'SideFilter',
  computed: {
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
    console.log('COUNTRIES: ', this.getCountries);
    this.listOfCountries = this.getCountries;
    this.listOfGenres = this.getGenres;
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
