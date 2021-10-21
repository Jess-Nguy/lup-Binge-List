<template>
  <div>
    <!-- Link trigger modal -->
    <a v-on:click="loadModal" data-bs-toggle="modal" data-bs-target="#editShowModal">
      <i class="fas fa-edit"></i>
    </a>
    <!-- Modal -->
    <div
      v-if="opened"
      class="modal top fade"
      id="editShowModal"
      tabindex="-1"
      aria-labelledby="editShowModalLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <form @submit.prevent="submitEditShow">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editShowModalLabel">Editing Show</h5>
              <button
                @click="closeModal"
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <!-- BODY -->
            <div class="modal-body">
              <div class="card-body">
                <label for="show-image-link">Show image:</label>
                <input type="url" id="show-image-link" v-model="enteredShowImage" />
                <img v-if="enteredShowImage !== ''" :src="enteredShowImage" alt="show image" width="100" height="100" />
                <img v-else :src="defaultImage" alt="default image" width="100" height="100" />
                <button id="save-image-button" type="button" class="btn btn-success">Save Image</button>
              </div>
              <!-- row 1 -->
              <div class="row mb-3">
                <div class="col">
                  <div class="form-outline">
                    <label class="form-label" for="editShowName">Name of show *</label>
                    <input type="text" id="editShowName" v-model="enteredShowName" class="form-control" />
                    <div class="requiredFields" v-if="v$.enteredShowName.$error">Show field is required</div>
                  </div>
                </div>
                <div class="col">
                  <!-- Country -->
                  <label class="form-label" for="editShowCountry">Country of origin *</label>
                  <select
                    v-model="enteredCountry"
                    id="editShowCountry"
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option v-for="(country, i) in listOfCountries" :key="i">{{ country }}</option>
                  </select>
                  <div class="requiredFields" v-if="v$.enteredCountry.$error">Country field is required</div>
                </div>
              </div>
              <!-- row 2 -->
              <div class="row mb-3">
                <!-- Date aired input -->
                <div class="col">
                  <label class="form-label" for="editShowDateAired">Date aired (Optional)</label>
                  <input type="date" v-model="enteredDateAired" id="editShowDateAired" class="form-control" />
                </div>
                <!-- Date completed input -->
                <div class="col">
                  <label class="form-label" for="editShowDateCompleted">Date Completed (Optional)</label>
                  <input type="date" v-model="enteredDateCompleted" id="editShowDateCompleted" class="form-control" />
                </div>
              </div>

              <!-- row 3 -->
              <div class="row mb-3">
                <!-- Title synonyms -->
                <div class="col">
                  <label class="form-label" for="editShowTitleSynonyms">Title Synonyms (Optional)</label>
                  <input type="text" id="editShowTitleSynonyms" v-model="enteredTitleSynonyms" class="form-control" />
                </div>

                <!-- Native title input -->
                <div class="col">
                  <label class="form-label" for="editShowNativeTitle">Native Title (Optional)</label>
                  <input type="text" v-model="enteredNativeTitle" id="editShowNativeTitle" class="form-control" />
                </div>

                <!-- Romanization -->
                <div class="col">
                  <label class="form-label" for="editShowRomanization">Romanization (Optional) </label>
                  <input type="text" v-model="enteredRomanization" id="editShowRomanization" class="form-control" />
                </div>
              </div>
              <!-- row 4 -->
              <div class="row mb-3">
                <!-- Company -->
                <div class="col">
                  <div class="form-outline">
                    <label class="form-label" for="editShowCompany">Company (Optional)</label>
                    <input type="text" id="editShowCompany" v-model="enteredCompany" class="form-control" />
                  </div>
                </div>
                <!-- Genre input -->
                <div class="col">
                  <label class="form-label" for="editShowGenre">Genre *</label>
                  <select
                    v-model="enteredGenre"
                    id="editShowGenre"
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option v-for="(genre, i) in listOfGenres" :key="i">{{ genre }}</option>
                  </select>
                  <div class="requiredFields" v-if="v$.enteredGenre.$error">Genre field is required</div>
                </div>

                <!-- Number of seasons input -->
                <div class="col">
                  <label class="form-label" for="editShowNumSeasons"># of seasons (Optional)</label>
                  <input type="number" v-model="enteredNumSeasons" id="editShowNumSeasons" class="form-control" />
                </div>

                <!-- Number of episodes input -->
                <div class="col">
                  <label class="form-label" for="editShowNumEpisodes">Total # of episodes (Optional) </label>
                  <input type="number" v-model="enteredNumEpisodes" id="editShowNumEpisodes" class="form-control" />
                </div>
              </div>

              <!-- row 6 -->
              <div class="row mb-3">
                <!-- Main Character -->
                <div class="col">
                  <label class="form-label" for="editShowMainCharacter">Main Character (Optional)</label>
                  <search-autocomplete
                    @input-autocomplete-set="getSelectedItem"
                    :preSelectedItem="enteredMainCharacter"
                    :items="characters"
                    :elementField="'Main character'"
                  ></search-autocomplete>
                </div>
                <!-- Side Character 1 -->
                <div class="col">
                  <label class="form-label" for="editShowSideCharacter1">Side Character 1 (Optional)</label>
                  <search-autocomplete
                    @input-autocomplete-set="getSelectedItem"
                    :items="characters"
                    :preSelectedItem="enteredSideCharacter1"
                    :elementField="'Side character 1'"
                  ></search-autocomplete>
                </div>
                <!-- Side Character 2 -->
                <div class="col">
                  <label class="form-label" for="editShowSideCharacter2">Side Character 2 (Optional)</label>
                  <search-autocomplete
                    @input-autocomplete-set="getSelectedItem"
                    :preSelectedItem="enteredSideCharacter2"
                    :items="characters"
                    :elementField="'Side character 2'"
                  ></search-autocomplete>
                </div>
              </div>
              <!-- row 7 -->
              <div class="row mb-3">
                <!-- MC Actor/Actress -->
                <div class="col">
                  <label class="form-label" for="editShowMCActorActress">MC Actor/Actress (Optional)</label>
                  <search-autocomplete
                    @input-autocomplete-set="getSelectedItem"
                    :items="actors"
                    :preSelectedItem="enteredMCActorActress"
                    :elementField="'Main Actor'"
                  ></search-autocomplete>
                </div>
                <!-- SC Actor/Actress 1 -->
                <div class="col">
                  <label class="form-label" for="editShowSCActorActress1">SC Actor/Actress 1 (Optional)</label>
                  <search-autocomplete
                    @input-autocomplete-set="getSelectedItem"
                    :items="actors"
                    :preSelectedItem="enteredSCActorActress1"
                    :elementField="'Side actor 1'"
                  ></search-autocomplete>
                </div>
                <!-- SC Actor/Actress 2 -->
                <div class="col">
                  <label class="form-label" for="editShowSCActorActress2">SC Actor/Actress 2 (Optional)</label>
                  <search-autocomplete
                    @input-autocomplete-set="getSelectedItem"
                    :items="actors"
                    :preSelectedItem="enteredSCActorActress2"
                    :elementField="'Side actor 2'"
                  ></search-autocomplete>
                </div>
              </div>
              <!-- Synopsis -->
              <div class="form-outline mb-4">
                <label class="form-label" for="editShowSynopsis">Synopsis *</label>
                <textarea class="form-control" v-model="enteredSynopsis" id="editShowSynopsis" rows="4"></textarea>
                <div class="requiredFields" v-if="v$.enteredSynopsis.$error">Synopsis field is required</div>
              </div>
            </div>
            <div class="modal-footer">
              <button @click="deleteShow" type="button" class="btn btn-danger" data-bs-dismiss="modal">Delete</button>
              <button type="submit" class="btn btn-success">Update</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import SearchAutocomplete from '@/components/SearchAutocomplete.vue';
import DataService from '../../service/dataService';

export default {
  name: 'EditShowComponent',
  props: {
    show_id: {
      type: String,
      required: true,
      default: '',
    },
  },
  data() {
    return {
      v$: useVuelidate(),
      opened: false,
      defaultImage: 'https://cdn.onlinewebfonts.com/svg/img_98811.png',
      enteredShowImage: '',
      enteredShowName: '',
      enteredTitleSynonyms: '',
      enteredNativeTitle: '',
      enteredRomanization: '',
      enteredDateAired: '',
      enteredDateCompleted: '',
      enteredCountry: '',
      enteredGenre: '',
      enteredCompany: '',
      enteredMainCharacter: '00000000-0000-0000-0000-000000000000',
      enteredSideCharacter1: '00000000-0000-0000-0000-000000000000',
      enteredSideCharacter2: '00000000-0000-0000-0000-000000000000',
      enteredMCActorActress: '00000000-0000-0000-0000-000000000000',
      enteredSCActorActress1: '00000000-0000-0000-0000-000000000000',
      enteredSCActorActress2: '00000000-0000-0000-0000-000000000000',
      enteredNumSeasons: 0,
      enteredNumEpisodes: 0,
      enteredSynopsis: '',
      actors: [{ id: '00000000-0000-0000-0000-000000000000', value: 'Not Assigned' }],
      characters: [{ id: '00000000-0000-0000-0000-000000000000', value: 'Not Assigned', image: '' }],
      shows: [],
      selectedShow: {},
      listOfCountries: [],
      listOfGenres: [],
    };
  },
  validations() {
    return {
      enteredShowName: { required },
      enteredCountry: { required },
      enteredGenre: { required },
      enteredSynopsis: { required },
    };
  },
  components: {
    SearchAutocomplete,
  },
  computed: {
    getCountries() {
      return this.$store.getters.getCountries;
    },
    getGenres() {
      return this.$store.getters.getGenres;
    },
  },
  mounted() {
    this.listOfCountries = this.getCountries;
    this.listOfGenres = this.getGenres;
  },
  methods: {
    async submitAddShow() {
      this.v$.$validate();
      if (!this.v$.$error) {
        alert('SUCCESSFULLY UPDATED SHOW!');

        let title = this.enteredShowName;
        title = title.replace(/'/g, "''");
        let titleSynonyms = this.enteredTitleSynonyms;
        titleSynonyms = titleSynonyms.replace(/'/g, "''");
        const titles = [title, titleSynonyms];
        // TO DO: completed_date errors if not set because of postgresql type
        // TO DO: If user empty's character or actor name set to not assigned.
        const showData = {
          title: titles,
          native_title: this.enteredNativeTitle,
          romanization: this.enteredRomanization,
          release_date: this.enteredDateAired,
          completed_date: this.enteredDateCompleted,
          country: this.enteredCountry,
          genre: this.enteredGenre,
          company: this.enteredCompany,
          main_character: this.enteredMainCharacter,
          side_character1: this.enteredSideCharacter1,
          side_character2: this.enteredSideCharacter2,
          show_image: this.enteredShowImage,
          main_character_actor: this.enteredMCActorActress,
          side_character1_actor: this.enteredSCActorActress1,
          side_character2_actor: this.enteredSCActorActress2,
          seasons: this.enteredNumSeasons,
          episodes: this.enteredNumEpisodes,
          synopsis: this.enteredSynopsis,
        };

        console.log('SHOW DATA: ', showData);
        const resultShow = await DataService.postShow(showData);
        console.log('result: ', resultShow.data);
        console.log('result id: ', resultShow.data[0].id_show);
      } else {
        alert('Show creation failed in validation');
      }
    },
    getSelectedItem(result, element) {
      switch (element) {
        case 'Main Actor':
          this.enteredMCActorActress = result.id;
          break;
        case 'Main character':
          this.enteredMainCharacter = result.id;
          break;
        case 'Side character 1':
          this.enteredSideCharacter1 = result.id;
          break;
        case 'Side character 2':
          this.enteredSideCharacter2 = result.id;
          break;
        case 'Side actor 1':
          this.enteredSCActorActress1 = result.id;
          break;
        case 'Side actor 2':
          this.enteredSCActorActress2 = result.id;
          break;
      }
    },
    async loadModal() {
      await this.retrieveSelectedShow();
      await this.retrieveCharactersDropdown();
      await this.retrieveActorDropdown();
      await this.setSelectedShowModal();
      this.enteredShowName = this.selectedShow[0].title[0];
      this.opened = true;
    },
    async retrieveSelectedShow() {
      this.selectedShow = await DataService.getShowById(this.show_id);
      console.log('SELECTED SHOW: ', this.selectedShow);
    },
    setSelectedShowModal() {
      this.enteredShowImage = this.selectedShow[0].show_image;
      this.enteredShowName = this.selectedShow[0].title[0];
      this.enteredTitleSynonyms = this.selectedShow[0].title[1];
      this.enteredNativeTitle = this.selectedShow[0].native_title;
      this.enteredRomanization = this.selectedShow[0].romanization;
      this.enteredDateAired = this.selectedShow[0].release_date;
      this.enteredDateCompleted = this.selectedShow[0].completed_date;
      this.enteredCountry = this.selectedShow[0].country;
      this.enteredGenre = this.selectedShow[0].genre;
      this.enteredCompany = this.selectedShow[0].company;
      this.enteredMainCharacter = this.selectedShow[0].main_character_id;
      this.enteredSideCharacter1 = this.selectedShow[0].side_character1_id;
      this.enteredSideCharacter2 = this.selectedShow[0].side_character2_id;
      this.enteredMCActorActress = this.selectedShow[0].main_actor_id;
      this.enteredSCActorActress1 = this.selectedShow[0].side_actor1_id;
      this.enteredSCActorActress2 = this.selectedShow[0].side_actor2_id;
      this.enteredNumSeasons = this.selectedShow[0].seasons;
      this.enteredNumEpisodes = this.selectedShow[0].episodes;
      this.enteredSynopsis = this.selectedShow[0].synopsis;
    },
    async retrieveActorDropdown() {
      const resultActor = await DataService.getActorDropdown();
      this.actors = resultActor.map((item) => ({
        id: item.id_actor,
        value: item.full_name,
      }));
    },
    async retrieveCharactersDropdown() {
      const resultCharacter = await DataService.getCharactersDropdown();
      // TO DO: Display character image.
      this.characters = resultCharacter.map((item) => ({
        id: item.id_character,
        value: item.full_name,
        image: item.character_image,
      }));
    },
    closeModal() {
      this.opened = false;
    },
    deleteShow() {
      console.log('DELETE ME ', this.show_id);
    },
  },
};
</script>
<style scoped>
.requiredFields {
  color: red;
}
</style>
