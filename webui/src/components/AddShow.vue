<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      v-on:click="loadModal"
      class="btn btn-success"
      data-bs-toggle="modal"
      data-bs-target="#addShowModal"
    >
      Add Show +
    </button>
    <!-- Modal -->
    <div
      v-if="opened"
      class="modal top fade"
      id="addShowModal"
      tabindex="-1"
      aria-labelledby="addShowModalLabel"
      aria-hidden="true"
      data-bs-backdrop="true"
      data-bs-keyboard="true"
    >
      <form @submit.prevent="submitAddShow">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addShowModalLabel">Adding Show</h5>
              <button
                type="button"
                @click="closeModal"
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
                    <label class="form-label" for="addShowName">Name of show *</label>
                    <input type="text" id="addShowName" v-model="enteredShowName" class="form-control" />
                    <div class="requiredFields" v-if="v$.enteredShowName.$error">Show field is required</div>
                  </div>
                </div>
                <div class="col">
                  <!-- Country -->
                  <label class="form-label" for="addShowCountry">Country of origin *</label>
                  <select
                    v-model="enteredCountry"
                    id="addShowCountry"
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option>Canada</option>
                  </select>
                  <div class="requiredFields" v-if="v$.enteredCountry.$error">Country field is required</div>
                </div>
              </div>
              <!-- row 2 -->
              <div class="row mb-3">
                <!-- Date aired input -->
                <div class="col">
                  <label class="form-label" for="addShowDateAired">Date aired (Optional)</label>
                  <input type="date" v-model="enteredDateAired" id="addShowDateAired" class="form-control" />
                </div>
                <!-- Date completed input -->
                <div class="col">
                  <label class="form-label" for="addShowDateCompleted">Date Completed (Optional)</label>
                  <input type="date" v-model="enteredDateCompleted" id="addShowDateCompleted" class="form-control" />
                </div>
              </div>

              <!-- row 3 -->
              <div class="row mb-3">
                <!-- Title synonyms -->
                <div class="col">
                  <label class="form-label" for="addShowTitleSynonyms">Title Synonyms (Optional)</label>
                  <input type="text" id="addShowTitleSynonyms" v-model="enteredTitleSynonyms" class="form-control" />
                </div>

                <!-- Native title input -->
                <div class="col">
                  <label class="form-label" for="addShowNativeTitle">Native Title (Optional)</label>
                  <input type="text" v-model="enteredNativeTitle" id="addShowNativeTitle" class="form-control" />
                </div>

                <!-- Romanization -->
                <div class="col">
                  <label class="form-label" for="addShowRomanization">Romanization (Optional) </label>
                  <input type="text" v-model="enteredRomanization" id="addShowRomanization" class="form-control" />
                </div>
              </div>
              <!-- row 4 -->
              <div class="row mb-3">
                <!-- Company -->
                <div class="col">
                  <div class="form-outline">
                    <label class="form-label" for="addShowCompany">Company (Optional)</label>
                    <input type="text" id="addShowCompany" v-model="enteredCompany" class="form-control" />
                  </div>
                </div>
                <!-- Genre input -->
                <div class="col">
                  <label class="form-label" for="addShowGenre">Genre *</label>
                  <select
                    v-model="enteredGenre"
                    id="addShowGenre"
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="Comedy">Comedy</option>
                  </select>
                  <div class="requiredFields" v-if="v$.enteredGenre.$error">Genre field is required</div>
                </div>

                <!-- Number of seasons input -->
                <div class="col">
                  <label class="form-label" for="addShowNumSeasons"># of seasons (Optional)</label>
                  <input type="number" v-model="enteredNumSeasons" id="addShowNumSeasons" class="form-control" />
                </div>

                <!-- Number of episodes input -->
                <div class="col">
                  <label class="form-label" for="addShowNumEpisodes">Total # of episodes (Optional) </label>
                  <input type="number" v-model="enteredNumEpisodes" id="addShowNumEpisodes" class="form-control" />
                </div>
              </div>
              <!-- row 6 -->
              <div class="row mb-3">
                <!-- Main Character -->
                <div class="col">
                  <label class="form-label" for="addShowMainCharacter">Main Character (Optional)</label>
                  <search-autocomplete
                    @input-autocomplete-set="getSelectedItem"
                    :items="characters"
                    :elementField="'Main character'"
                  ></search-autocomplete>
                </div>
                <!-- Side Character 1 -->
                <div class="col">
                  <label class="form-label" for="addShowSideCharacter1">Side Character 1 (Optional)</label>
                  <search-autocomplete
                    @input-autocomplete-set="getSelectedItem"
                    :items="characters"
                    :elementField="'Side character 1'"
                  ></search-autocomplete>
                </div>
                <!-- Side Character 2 -->
                <div class="col">
                  <label class="form-label" for="addShowSideCharacter2">Side Character 2 (Optional)</label>
                  <search-autocomplete
                    @input-autocomplete-set="getSelectedItem"
                    :items="characters"
                    :elementField="'Side character 2'"
                  ></search-autocomplete>
                </div>
              </div>
              <!-- row 7 -->
              <div class="row mb-3">
                <!-- MC Actor/Actress -->
                <div class="col">
                  <label class="form-label" for="addShowMCActorActress">MC Actor/Actress (Optional)</label>
                  <search-autocomplete
                    @input-autocomplete-set="getSelectedItem"
                    :items="actors"
                    :elementField="'Main Actor'"
                  ></search-autocomplete>
                </div>
                <!-- SC Actor/Actress 1 -->
                <div class="col">
                  <label class="form-label" for="addShowSCActorActress1">SC Actor/Actress 1 (Optional)</label>
                  <search-autocomplete
                    @input-autocomplete-set="getSelectedItem"
                    :items="actors"
                    :elementField="'Side actor 1'"
                  ></search-autocomplete>
                </div>
                <!-- SC Actor/Actress 2 -->
                <div class="col">
                  <label class="form-label" for="addShowSCActorActress2">SC Actor/Actress 2 (Optional)</label>
                  <search-autocomplete
                    @input-autocomplete-set="getSelectedItem"
                    :items="actors"
                    :elementField="'Side actor 2'"
                  ></search-autocomplete>
                </div>
              </div>
              <!-- Synopsis -->
              <div class="form-outline mb-4">
                <label class="form-label" for="addShowSynopsis">Synopsis *</label>
                <textarea class="form-control" v-model="enteredSynopsis" id="addShowSynopsis" rows="4"></textarea>
                <div class="requiredFields" v-if="v$.enteredSynopsis.$error">Synopsis field is required</div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" @click="closeModal" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" class="btn btn-success">Add</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
.requiredFields {
  color: red;
}
</style>
<script>
import { required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import SearchAutocomplete from '@/components/SearchAutocomplete.vue';
import DataService from '../../service/dataService';
export default {
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
  name: 'AddShowComponent',
  async mounted() {},
  methods: {
    async submitAddShow() {
      this.v$.$validate();
      if (!this.v$.$error) {
        alert('SUCCESSFULLY CREATED SHOW!');

        let title = this.enteredShowName;
        title = title.replace(/'/g, "''");
        let titleSynonyms = this.enteredTitleSynonyms;
        titleSynonyms = titleSynonyms.replace(/'/g, "''");
        const titles = [title, titleSynonyms];
        let synopsis = this.enteredSynopsis;
        synopsis = synopsis.replace(/'/g, "''");
        // TO DO: completed_date errors if not set because of postgresql type
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
          synopsis: synopsis,
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
      await this.retrieveCharactersDropdown();
      await this.retrieveActorDropdown();
      this.opened = true;
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
  },
};
</script>
