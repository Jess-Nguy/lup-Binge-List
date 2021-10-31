<template>
  <div>
    <!-- <h2>Show {{ id }}</h2> -->
    <div>
      <h1>{{ selectedShow.title[0] }}</h1>
      <h6 v-show="selectedShow.title[1]">{{ selectedShow.title[1] }}</h6>
    </div>
    <div>
      <p>{{ selectedShow.synopsis }}</p>
    </div>
    <div>
      <!-- Show poster -->
      <img
        v-if="selectedShow.show_image !== ''"
        :src="selectedShow.show_image"
        alt="show image"
        width="200"
        height="350"
      />
      <img v-else :src="defaultImage" alt="default image" width="200" height="350" />
      <!-- Status drop down -->
      <select v-model="editForm.status" id="editStatus" class="form-select" aria-label="Default select example">
        <option v-for="(status, i) in listOfStatus" :key="i">{{ status }}</option>
      </select>
      <!-- Favourite button -->
      <div>
        <!-- true/false css change? -->
        <button
          @click="favouriteToggle"
          class="btn btn-danger"
          :class="{ active: editForm.favourite }"
          style="border-radius: 50%"
        >
          <i class="fas fa-heart"></i>
        </button>
      </div>
      <!-- Show details -->
      <div>
        <div class="card border border-primary shadow-0">
          <div class="card-body">
            <!-- Episodes -->
            <div class="row mb-3">
              <h5 class="card-title">Episodes</h5>
              <p v-if="selectedShow.episodes !== null" class="card-text">
                {{ selectedShow.episodes }}
              </p>
              <p v-else class="card-text">N/A</p>
            </div>
            <!-- Seasons -->
            <div class="row mb-3">
              <h5 class="card-title">Seasons</h5>
              <p v-if="selectedShow.seasons !== null" class="card-text">
                {{ selectedShow.seasons }}
              </p>
              <p v-else class="card-text">N/A</p>
            </div>
            <!-- Release Date -->
            <div class="row mb-3">
              <h5 class="card-title">Release Date</h5>
              <p v-if="selectedShow.releaseDate !== null" class="card-text">
                {{ releaseDate }}
              </p>
              <p v-else class="card-text">N/A</p>
            </div>
            <!-- Native Title -->
            <div class="row mb-3">
              <h5 class="card-title">Native Title</h5>
              <p v-if="selectedShow.native_title !== 'null'" class="card-text">
                {{ selectedShow.native_title }}
              </p>
              <p v-else class="card-text">N/A</p>
            </div>
            <!-- Romanization -->
            <div class="row mb-3">
              <h5 class="card-title">Romanization</h5>
              <p v-if="selectedShow.romanization !== 'null'" class="card-text">
                {{ selectedShow.romanization }}
              </p>
              <p v-else class="card-text">N/A</p>
            </div>
            <!-- Company -->
            <div class="row mb-3">
              <h5 class="card-title">Company</h5>
              <p v-if="selectedShow.company !== 'null'" class="card-text">
                {{ selectedShow.company }}
              </p>
              <p v-else class="card-text">N/A</p>
            </div>
            <!-- Country -->
            <div class="row mb-3">
              <h5 class="card-title">Country</h5>
              <p class="card-text">
                {{ selectedShow.country }}
              </p>
            </div>
            <!-- Genre -->
            <div class="row mb-3">
              <h5 class="card-title">Genre</h5>
              <p class="card-text">
                {{ selectedShow.genre }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <!-- characters -->
      <h2>Characters</h2>
      <div class="card border border-primary shadow-0">
        <div class="row mb-3">
          <!-- Main character -->
          <div class="col">
            <img
              v-if="selectedShow.main_character_image !== null"
              :src="selectedShow.main_character_image"
              alt="show image"
              width="300"
              height="300"
            />
            <img v-else :src="defaultImage" alt="default image" width="300" height="300" />
            <h5 class="card-title">{{ selectedShow.main_character_name }}</h5>
            <p class="card-text">
              {{ selectedShow.main_actor_name }}
            </p>
          </div>
          <!-- side character 1 -->
          <div class="col">
            <img
              v-if="selectedShow.side_character1_image !== null"
              :src="selectedShow.side_character1_image"
              alt="show image"
              width="300"
              height="300"
            />
            <img v-else :src="defaultImage" alt="default image" width="300" height="300" />
            <h5 class="card-title">{{ selectedShow.side_character1_name }}</h5>
            <p class="card-text">
              {{ selectedShow.side_actor1_name }}
            </p>
          </div>
          <!-- side character 2 -->
          <div class="col">
            <img
              v-if="selectedShow.side_character2_image !== null"
              :src="selectedShow.side_character2_image"
              alt="show image"
              width="300"
              height="300"
            />
            <img v-else :src="defaultImage" alt="default image" width="300" height="300" />
            <h5 class="card-title">{{ selectedShow.side_character2_name }}</h5>
            <p class="card-text">
              {{ selectedShow.side_actor2_name }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <comments-section />
    </div>
  </div>
</template>
<script>
import DataService from '../../service/dataService';
import CommentsSection from '../components/CommentsSection.vue';
export default {
  components: { CommentsSection },
  data() {
    return {
      user: {
        name: localStorage.getItem('username'),
        profileUrl: localStorage.getItem('profileImage'),
        id: localStorage.getItem('userId'),
        roleId: localStorage.getItem('userRoleId'),
      },
      id: '',
      selectedShow: {},
      defaultImage: 'https://cdn.onlinewebfonts.com/svg/img_98811.png',
      editForm: {
        status: '',
        favourite: false,
      },
      selectedEdit: {},
      listOfStatus: [],
      releaseDate: '',
    };
  },
  watch: {
    editForm: {
      deep: true,
      async handler() {
        // Date convert for calendar
        var day;
        var month;
        let startDate;
        let endDate;
        if (this.selectedEdit.start_date !== null) {
          startDate = new Date(this.selectedEdit.start_date);

          day = ('0' + startDate.getDate()).slice(-2);
          month = ('0' + (startDate.getMonth() + 1)).slice(-2);
          startDate = startDate.getFullYear() + '-' + month + '-' + day;
        } else {
          startDate = this.selectedEdit.start_date;
        }

        if (this.selectedEdit.end_date !== null) {
          endDate = new Date(this.selectedEdit.end_date);
          day = ('0' + endDate.getDate()).slice(-2);
          month = ('0' + (endDate.getMonth() + 1)).slice(-2);
          endDate = endDate.getFullYear() + '-' + month + '-' + day;
        } else {
          endDate = this.selectedEdit.end_date;
        }

        const updateData = {
          status: this.editForm.status,
          favourite: this.editForm.favourite,
          episode_progress: this.selectedEdit.episodeProgress,
          id_user_show: this.selectedEdit.id_user_show,
          score: this.selectedEdit.score,
          rewatch: this.selectedEdit.rewatch,
          start_date: startDate,
          end_date: endDate,
          note: this.selectedEdit.note,
        };
        await DataService.updateUserBingeList(updateData);
      },
    },
  },
  computed: {
    getListStatus() {
      return this.$store.getters.getListStatus;
    },
  },
  async created() {
    this.id = this.$route.params.id;
    await this.retrieveSelectedShow();
    console.log('retrieveSelectedShow: ', this.selectedShow);
    this.listOfStatus = this.getListStatus;
    await this.getUserShowDetails();

    // Date convert for calendar
    var day;
    var month;
    if (this.selectedShow.release_date !== null) {
      let date = new Date(this.selectedShow.release_date);

      day = ('0' + date.getDate()).slice(-2);
      month = ('0' + (date.getMonth() + 1)).slice(-2);
      this.releaseDate = date.getFullYear() + '-' + month + '-' + day;
    } else {
      this.releaseDate = this.selectedShow.release_date;
    }
    // if this show isn't in the user's list then set status and favourite to defaults
    // else set them.
    // if(){

    // }
  },
  methods: {
    async retrieveSelectedShow() {
      const result = await DataService.getShowById(this.id);
      this.selectedShow = result[0];
    },
    async getUserShowDetails() {
      const data = {
        user_id: this.user.id,
        show_id: this.id,
      };
      this.selectedEdit = await DataService.getCheckAdd(data);
      console.log('selectedEdit: ', this.selectedEdit);
    },
    favouriteToggle() {
      this.editForm.favourite = this.editForm.favourite ? false : true;
    },
  },
};
</script>
<style scoped>
.col {
  padding: 25px;
}
</style>
