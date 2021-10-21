<template>
  <div id="showCards" class="card" v-for="show in shows" :key="show.id_show">
    <div class="row g-0">
      <div class="col-md-4">
        <img id="showCardsImage" :src="show.show_image" :alt="show.title[0]" class="img-fluid" />
      </div>
      <div class="col-6">
        <div class="card-body">
          <div class="row mb-3">
            <div class="col">
              <h5 class="card-title">{{ show.title[0] }}</h5>
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
            <div
              class="card text-center border border-danger shadow-0 col"
              id="filter-selection-cards"
              v-if="show.completed_date !== null"
            >
              <div class="card-body">
                <h5 class="card-title">Finished</h5>
              </div>
            </div>
            <!-- Unfinished tag -->
            <div class="card text-center border border-danger shadow-0 col" id="filter-selection-cards" v-else>
              <div class="card-body">
                <h5 class="card-title">Unfinished</h5>
              </div>
            </div>
            <!-- Year released tag -->
            <div class="card text-center border border-danger shadow-0 col" id="filter-selection-cards">
              <div class="card-body">
                <h5 class="card-title">{{ show.release_year }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1">
        <div class="card-footer">
          <div v-if="isAdmin">
            <edit-show :show_id="show.id_show" :show_name="show.title[0]"></edit-show>
          </div>
          <div v-else>
            <a><i class="fas fa-play"></i></a><br />
            <a><i class="fas fa-check"></i></a><br />
            <a><i class="fas fa-calendar-alt"></i></a>
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
  },
  components: {
    EditShow,
  },
  data() {
    return {
      shows: [],
    };
  },
  async mounted() {
    await this.getShows();
    console.log('SHOWS: ', this.shows);
  },
  methods: {
    async getShows() {
      this.shows = await DataService.getShowDisplay();
    },
  },
};
</script>
<style scoped>
#showCards {
  height: 150px;
}

#showCardsImage {
  height: 150px;
}

#filter-selection-cards {
  height: 4rem;
}
</style>
