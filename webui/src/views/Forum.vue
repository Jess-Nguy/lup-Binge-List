<template>
  <div class="forum">
    <h1>Request show</h1>
    <div class="card">
      <form @submit.prevent="submitRequestShow">
        <!-- 2 column grid layout with text inputs for the first and last names -->
        <div class="row mb-4">
          <div class="col">
            <div class="form-outline">
              <label class="form-label" for="requestShowName">Name of show *</label>
              <input type="text" id="requestShowName" v-model="enteredShowName" class="form-control" />
            </div>
          </div>
          <div class="col">
            <!-- Country -->
            <label class="form-label" for="requestShowCountry">Country of origin *</label>
            <select
              v-model="enteredCountry"
              id="requestShowCountry"
              class="form-select"
              aria-label="Default select example"
            >
              <option>Canada</option>
            </select>
          </div>
        </div>

        <!-- Date aired input -->
        <div class="form-outline mb-4">
          <label class="form-label" for="requestShowDateAired">Date aired *</label>
          <input type="date" v-model="enteredDateAired" id="requestShowDateAired" class="form-control" />
        </div>

        <!-- Genre input -->
        <div class="form-outline mb-4">
          <label class="form-label" for="requestShowGenre">Genre *</label>
          <select v-model="enteredGenre" id="requestShowGenre" class="form-select" aria-label="Default select example">
            <option value="1">Comedy</option>
          </select>
        </div>

        <!-- Number of seasons input -->
        <div class="form-outline mb-4">
          <label class="form-label" for="requestShowNumSeasons"># of seasons (Optional)</label>
          <input type="number" v-model="enteredNumSeasons" id="requestShowNumSeasons" class="form-control" />
        </div>

        <!-- Number of episodes input -->
        <div class="form-outline mb-4">
          <label class="form-label" for="requestShowNumEpisodes">Total # of episodes (Optional) </label>
          <input type="number" v-model="enteredNumEpisodes" id="requestShowNumEpisodes" class="form-control" />
        </div>

        <!-- Addition Link input (Note) -->
        <div class="form-outline mb-4">
          <label class="form-label" for="requestShowNotes">Any link to show info/Notes (Optional)</label>
          <textarea class="form-control" v-model="enteredNote" id="requestShowNotes" rows="4"></textarea>
        </div>

        <!-- Submit button -->
        <button type="submit" class="btn btn-primary btn-block mb-4">Submit</button>
      </form>
    </div>
  </div>
</template>
<style scoped>
.form-outline,
.form-label {
  color: black;
}
</style>
<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      enteredShowName: '',
      enteredCountry: {},
      countryOption: {},
      countryOptions: [
        { value: 1, text: 'Canada' },
        { value: 2, text: 'USA' },
      ],
      enteredDateAired: '',
      enteredGenre: '',
      enteredNumSeasons: 0,
      enteredNumEpisodes: 0,
      enteredNote: '',
    };
  },
  name: 'Forum',
  computed: {},
  mounted() {
    const localToken = localStorage.getItem('user-token');
    if (!localToken) {
      this.$router.push('/');
    } else {
      if (!this.getUser) {
        this.login(localToken);
      }
      console.log('Forum mount');
    }
  },
  methods: {
    ...mapActions(['login']),
    submitRequestShow() {
      console.log('enteredShowName: ', this.enteredShowName);
      console.log('enteredCountry: ', this.enteredCountry);
      console.log('enteredDateAired: ', this.enteredDateAired);
      console.log('enteredGenre: ', this.enteredGenre);
      console.log('enteredNumSeasons: ', this.enteredNumSeasons);
      console.log('enteredNumEpisodes: ', this.enteredNumEpisodes);
      console.log('enteredNote: ', this.enteredNote);
    },
  },
};
</script>
