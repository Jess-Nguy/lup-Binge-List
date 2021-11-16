<template>
  <div style="padding: 20px">
    <div id="showCards" class="card" v-for="show in showsFilter" :key="show.id_show">
      <div class="row g-0">
        <div class="col-1">
          <img id="showCardsImage" :src="show.show_image" :alt="show.title[0]" class="img-fluid" />
        </div>
        <div class="col-10">
          <div class="card-body">
            <div class="row mb-3">
              <div class="col">
                <h5 class="card-title">
                  <router-link :to="`/show/${show.id_show}`">{{ show.title[0] }}</router-link>
                </h5>
              </div>
            </div>
            <div class="row mb-3">
              <!-- Genre tag -->
              <div class="card text-center border border-danger shadow-0 col" id="filter-selection-cards">
                <div class="card-body">
                  <h5 class="card-title">{{ show.genre }}</h5>
                </div>
              </div>
              <!-- Country tag -->
              <div class="card text-center border border-danger shadow-0 col" id="filter-selection-cards">
                <div class="card-body">
                  <h5 class="card-title">{{ show.country }}</h5>
                </div>
              </div>
              <!-- Finished tag -->
              <div class="card text-center border border-danger shadow-0 col" id="filter-selection-cards">
                <div class="card-body">
                  <h5 class="card-title">{{ show.airing_status }}</h5>
                </div>
              </div>
              <!-- Year released tag -->
              <div
                v-if="show.release_year"
                class="card text-center border border-danger shadow-0 col"
                id="filter-selection-cards"
              >
                <div class="card-body">
                  <h5 class="card-title">{{ show.release_year }}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-1">
          <div id="side-buttons">
            <div v-if="isAdmin">
              <edit-show :show_id="show.id_show" :show_name="show.title[0]" title="Edit show details"></edit-show>
              <a @click="addAsWatching(show)" title="Add to Watching list"><i class="fas fa-play"></i></a><br />
              <a @click="addAsCompleted(show)" title="Add to Completed list"><i class="fas fa-check"></i></a><br />
              <a @click="addAsPlanned(show)" title="Add to Planned list"><i class="fas fa-calendar-alt"></i></a>
            </div>
            <div v-else>
              <a @click="addAsWatching(show)" title="Add to Watching list"><i class="fas fa-play"></i></a><br />
              <a @click="addAsCompleted(show)" title="Add to Completed list"><i class="fas fa-check"></i></a><br />
              <a @click="addAsPlanned(show)" title="Add to Planned list"><i class="fas fa-calendar-alt"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DataService from '../../service/dataService';
import EditShow from './EditShow.vue';
export default {
  props: {
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    showsArr: {
      type: Array,
      required: false,
      default: () => [],
    },
    loggedInUser: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  components: {
    EditShow,
  },
  data() {
    return {
      showsFilter: [],
    };
  },
  watch: {
    showsArr: function (value) {
      this.showsFilter = value;
    },
  },
  async mounted() {},
  methods: {
    async addAsWatching(show) {
      // Check if it already exists and if it does update the status instead.
      const checkData = {
        user_id: this.loggedInUser.id,
        show_id: show.id_show,
      };
      const check = await DataService.getCheckAdd(checkData);
      if (check === null) {
        const data = {
          user_id: this.loggedInUser.id,
          status: 'watching',
          show_id: show.id_show,
          episode_progress: 0,
          total_episodes: show.episodes,
          score: 0,
          rewatch: 0,
          favourite: false,
        };
        await DataService.postBingeList(data);
        alert('Added show to watch list');
      } else if (check.status !== 'watching') {
        // update
        const updateData = {
          status: 'watching',
          episode_progress: 0,
          id_user_show: check.id_user_show,
          score: check.score,
          rewatch: check.rewatch,
          favourite: check.favourite,
          start_date: check.start_date,
          end_date: check.end_date,
          note: check.note,
        };
        await DataService.updateUserBingeList(updateData);
        alert('Updated show to be in watch list');
        this.$emit('updated-show-info');
      }
    },
    async addAsCompleted(show) {
      const checkData = {
        user_id: this.loggedInUser.id,
        show_id: show.id_show,
      };
      const check = await DataService.getCheckAdd(checkData);
      if (check === null) {
        const data = {
          user_id: this.loggedInUser.id,
          status: 'completed',
          show_id: show.id_show,
          episode_progress: show.episodes,
          total_episodes: show.episodes,
          score: 0,
          rewatch: 0,
          favourite: false,
        };
        await DataService.postBingeList(data);
        alert('Added show to completed list');
      } else if (check.status !== 'completed') {
        // update
        const updateData = {
          status: 'completed',
          episode_progress: show.episodes,
          id_user_show: check.id_user_show,
          score: check.score,
          rewatch: check.rewatch,
          favourite: check.favourite,
          start_date: check.start_date,
          end_date: check.end_date,
          note: check.note,
        };
        await DataService.updateUserBingeList(updateData);
        alert('Updated show to be completed list');
      }
    },
    async addAsPlanned(show) {
      const checkData = {
        user_id: this.loggedInUser.id,
        show_id: show.id_show,
      };
      const check = await DataService.getCheckAdd(checkData);
      if (check === null) {
        const data = {
          user_id: this.loggedInUser.id,
          status: 'planned',
          show_id: show.id_show,
          episode_progress: 0,
          total_episodes: show.episodes,
          score: 0,
          rewatch: 0,
          favourite: false,
        };
        await DataService.postBingeList(data);
        alert('Added show to planned list');
      } else if (check.status !== 'planned') {
        // update
        const updateData = {
          status: 'planned',
          episode_progress: show.episodes,
          id_user_show: check.id_user_show,
          score: check.score,
          rewatch: check.rewatch,
          favourite: check.favourite,
          start_date: check.start_date,
          end_date: check.end_date,
          note: check.note,
        };
        await DataService.updateUserBingeList(updateData);
        alert('Updated show to be planned list');
      }
    },
  },
};
</script>
<style scoped>
#showCards {
  height: 155px;
}

#showCardsImage {
  height: 150px;
  padding-top: 2px;
}

#filter-selection-cards {
  height: 4rem;
}
#side-buttons {
  padding-top: 20%;
}
</style>
