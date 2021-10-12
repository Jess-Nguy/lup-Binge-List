<template>
  <div>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#addShowModal">Add +</button>
    <!-- Modal -->
    <div
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
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <!-- BODY -->
            <div class="modal-body">
              <div class="card-body">
                <label for="show-image-link">Show image:</label>
                <input type="url" id="show-image-link" />
                <img
                  src="https://cdn.onlinewebfonts.com/svg/img_98811.png"
                  alt="profile image"
                  width="100"
                  height="100"
                />
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
                  <label class="form-label" for="addShowDateAired">Date aired *</label>
                  <input type="date" v-model="enteredDateAired" id="addShowDateAired" class="form-control" />
                  <div class="requiredFields" v-if="v$.enteredDateAired.$error">Date aired field is required</div>
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
              <!-- row 5 -->
              <div class="row mb-3">
                <!-- Relations 1 -->
                <div class="col">
                  <label class="form-label" for="addShowRelations1">Relations 1 (Optional)</label>
                  <select
                    v-model="enteredRelation1"
                    id="addShowRelations1"
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="Friends">Friends</option>
                  </select>
                </div>
                <!-- Relations 2 -->
                <div class="col">
                  <label class="form-label" for="addShowRelations2">Relations 2 (Optional)</label>
                  <select
                    v-model="enteredRelation2"
                    id="addShowRelations2"
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="Brooklyn 99">Brooklyn 99</option>
                  </select>
                </div>
                <!-- Relations 3 -->
                <div class="col">
                  <label class="form-label" for="addShowRelations3">Relations 3 (Optional)</label>
                  <select
                    v-model="enteredRelation3"
                    id="addShowRelations3"
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="New Girl">New Girl</option>
                  </select>
                </div>
              </div>
              <!-- row 6 -->
              <div class="row mb-3">
                <!-- Main Character -->
                <div class="col">
                  <label class="form-label" for="addShowMainCharacter">Main Character (Optional)</label>
                  <input type="text" v-model="enteredMainCharacter" id="addShowMainCharacter" class="form-control" />
                </div>
                <!-- Side Character 1 -->
                <div class="col">
                  <label class="form-label" for="addShowSideCharacter1">Side Character 1 (Optional)</label>
                  <input type="text" v-model="enteredSideCharacter1" id="addShowSideCharacter1" class="form-control" />
                </div>
                <!-- Side Character 2 -->
                <div class="col">
                  <label class="form-label" for="addShowSideCharacter2">Side Character 2 (Optional)</label>
                  <input type="text" v-model="enteredSideCharacter2" id="addShowSideCharacter2" class="form-control" />
                </div>
              </div>
              <!-- row 7 -->
              <div class="row mb-3">
                <!-- MC Actor/Actress -->
                <div class="col">
                  <label class="form-label" for="addShowMCActorActress">MC Actor/Actress (Optional)</label>
                  <input type="text" v-model="enteredMCActorActress" id="addShowMCActorActress" class="form-control" />
                </div>
                <!-- SC Actor/Actress 1 -->
                <div class="col">
                  <label class="form-label" for="addShowSCActorActress1">SC Actor/Actress 1 (Optional)</label>
                  <input
                    type="text"
                    v-model="enteredSCActorActress1"
                    id="addShowSCActorActress1"
                    class="form-control"
                  />
                </div>
                <!-- SC Actor/Actress 2 -->
                <div class="col">
                  <label class="form-label" for="addShowSCActorActress2">SC Actor/Actress 2 (Optional)</label>
                  <input
                    type="text"
                    v-model="enteredSCActorActress2"
                    id="addShowSCActorActress2"
                    class="form-control"
                  />
                </div>
              </div>
              <!-- row 8 -->
              <div class="row mb-3">
                <!-- MC Actor/Actress image -->
                <div class="col">
                  <label class="form-label" for="addShowMCActorActress">MC Actor/Actress Image (Optional)</label>
                  <input
                    type="text"
                    v-model="enteredMCActorActressImage"
                    id="addShowMCActorActress"
                    class="form-control"
                  />
                  <img
                    src="https://cdn.onlinewebfonts.com/svg/img_98811.png"
                    alt="profile image"
                    width="100"
                    height="100"
                  />
                </div>
                <!-- SC Actor/Actress 1 image -->
                <div class="col">
                  <label class="form-label" for="addShowSCActorActress1">SC Actor/Actress 1 Image (Optional)</label>
                  <input
                    type="text"
                    v-model="enteredSCActorActress1Image"
                    id="addShowSCActorActress1"
                    class="form-control"
                  />
                  <img
                    src="https://cdn.onlinewebfonts.com/svg/img_98811.png"
                    alt="profile image"
                    width="100"
                    height="100"
                  />
                </div>
                <!-- SC Actor/Actress 2 image -->
                <div class="col">
                  <label class="form-label" for="addShowSCActorActress2">SC Actor/Actress 2 Image (Optional)</label>
                  <input
                    type="text"
                    v-model="enteredSCActorActress2Image"
                    id="addShowSCActorActress2"
                    class="form-control"
                  />
                  <img
                    src="https://cdn.onlinewebfonts.com/svg/img_98811.png"
                    alt="profile image"
                    width="100"
                    height="100"
                  />
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
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
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
// import DataService from '../../service/dataService';
export default {
  data() {
    return {
      v$: useVuelidate(),
      enteredShowName: '',
      enteredCountry: '',
      enteredDateAired: '',
      enteredDateCompleted: '',
      enteredGenre: '',
      enteredNumSeasons: 0,
      enteredNumEpisodes: 0,
      enteredSynopsis: '',
      enteredCompany: '',
      enteredNativeTitle: '',
      enteredRomanization: '',
      enteredTitleSynonyms: '',
      enteredRelation1: '',
      enteredRelation2: '',
      enteredRelation3: '',
      enteredMainCharacter: '',
      enteredSideCharacter1: '',
      enteredSideCharacter2: '',
      enteredMCActorActress: '',
      enteredSCActorActress1: '',
      enteredSCActorActress2: '',
      enteredMCActorActressImage: '',
      enteredSCActorActress1Image: '',
      enteredSCActorActress2Image: '',
    };
  },
  validations() {
    return {
      enteredShowName: { required },
      enteredCountry: { required },
      enteredDateAired: { required },
      enteredGenre: { required },
      enteredSynopsis: { required },
    };
  },
  name: 'AddShowComponent',
  methods: {
    async submitAddShow() {
      this.v$.$validate();
    },
  },
};
</script>
