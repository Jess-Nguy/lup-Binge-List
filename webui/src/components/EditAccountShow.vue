<template>
  <div>
    <!-- Link trigger modal -->
    <a @click="loadModal" data-bs-toggle="modal" data-bs-target="#editAccountShowModal">
      <i class="fas fa-edit"></i>
    </a>
    <!-- Modal -->
    <div
      v-if="isOpen"
      class="modal top fade"
      id="editAccountShowModal"
      tabindex="-1"
      aria-labelledby="editAccountShowModalLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <form @submit.prevent="submitEditAccountShow">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editAccountShowModalLabel">Editing Show</h5>
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
                <img v-if="showImage !== ''" :src="showImage" alt="show image" width="200" height="350" />
                <img v-else :src="defaultImage" alt="default image" width="200" height="350" />
              </div>
            </div>
            <!-- TITLES -->
            <div id="titleSection">
              <h1>{{ title }}</h1>
              <h6 v-show="titleSynomyms">{{ titleSynomyms }}</h6>
            </div>
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
            <!-- Row 1 -->
            <div class="row mb-3">
              <div class="col">
                <!-- status -->
                <label class="form-label" for="editStatus">Status</label>
                <select
                  v-model="editForm.status"
                  id="editStatus"
                  class="form-select"
                  aria-label="Default select example"
                >
                  <option v-for="(status, i) in listOfStatus" :key="i">{{ status }}</option>
                </select>
              </div>
              <div class="col">
                <!-- score -->
                <label class="form-label" for="editScore">Score</label>
                <input type="number" min="0" max="10" v-model="editForm.score" id="editScore" class="form-control" />
              </div>
              <div class="col">
                <!-- episode progress -->
                <label class="form-label" for="editEpisode">Episode Progress</label>
                <input
                  type="number"
                  min="0"
                  :max="selectedEdit.total_episodes"
                  v-model="editForm.episodeProgress"
                  id="editEpisode"
                  class="form-control"
                />
              </div>
            </div>
            <!-- Row 2 -->
            <div class="row mb-3">
              <div class="col">
                <!-- Start Date -->
                <label class="form-label" for="editStartDate">Start Date</label>
                <input type="date" v-model="editForm.startDate" id="editStartDate" class="form-control" />
              </div>
              <div class="col">
                <!-- End Date -->
                <label class="form-label" for="editEndDate">End Date</label>
                <input type="date" v-model="editForm.endDate" id="editEndDate" class="form-control" />
              </div>
              <div class="col">
                <!-- Rewatches -->
                <label class="form-label" for="editRewatch"># of Rewatch</label>
                <input type="number" min="0" v-model="editForm.rewatch" id="editRewatch" class="form-control" />
              </div>
            </div>
            <!-- Note -->
            <div class="form-outline mb-4">
              <label class="form-label" for="note">Note</label>
              <textarea class="form-control" v-model="editForm.note" id="note" rows="4"></textarea>
            </div>
            <div class="modal-footer">
              <button @click="deleteAccountShow" type="button" class="btn btn-danger mr-auto" data-bs-dismiss="modal">
                Delete
              </button>
              <button type="submit" class="btn btn-success" data-bs-dismiss="modal">Update</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import DataService from '../../service/dataService';
export default {
  name: 'Edit Account Show',
  props: {
    selectedEdit: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {
      isOpen: false,
      defaultImage: 'https://cdn.onlinewebfonts.com/svg/img_98811.png',
      showImage: '',
      title: '',
      titleSynomyms: '',
      editForm: {
        favourite: false,
        status: '',
        score: 0,
        startDate: '',
        endDate: '',
        rewatch: 0,
        note: '',
        episodeProgress: 0,
      },
      listOfStatus: [],
    };
  },
  computed: {
    getListStatus() {
      return this.$store.getters.getListStatus;
    },
  },
  mounted() {},
  methods: {
    loadModal() {
      this.listOfStatus = this.getListStatus;
      this.editForm.favourite = this.selectedEdit.favourite;
      this.editForm.status = this.selectedEdit.status;
      this.editForm.score = this.selectedEdit.score;

      this.editForm.rewatch = this.selectedEdit.rewatch;
      this.editForm.note = this.selectedEdit.note !== 'null' ? this.selectedEdit.note : '';
      this.editForm.episodeProgress = this.selectedEdit.episode_progress;
      this.showImage = this.selectedEdit.show_image;
      this.title = this.selectedEdit.title[0];
      this.titleSynomyms = this.selectedEdit.title[1];

      // Date convert for calendar
      var day;
      var month;
      if (this.selectedEdit.start_date !== null) {
        const startDate = new Date(this.selectedEdit.start_date);

        day = ('0' + startDate.getDate()).slice(-2);
        month = ('0' + (startDate.getMonth() + 1)).slice(-2);
        this.editForm.startDate = startDate.getFullYear() + '-' + month + '-' + day;
      } else {
        this.editForm.startDate = this.selectedEdit.start_date;
      }

      if (this.selectedEdit.end_date !== null) {
        const endDate = new Date(this.selectedEdit.end_date);
        day = ('0' + endDate.getDate()).slice(-2);
        month = ('0' + (endDate.getMonth() + 1)).slice(-2);
        this.editForm.endDate = endDate.getFullYear() + '-' + month + '-' + day;
      } else {
        this.editForm.endDate = this.selectedEdit.end_date;
      }

      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
    async submitEditAccountShow() {
      // note should accept quotes
      const updateData = {
        status: this.editForm.status,
        episode_progress: this.editForm.episodeProgress,
        id_user_show: this.selectedEdit.id_user_show,
        score: this.editForm.score,
        rewatch: this.editForm.rewatch,
        favourite: this.editForm.favourite,
        start_date: this.editForm.startDate,
        end_date: this.editForm.endDate,
        note: this.editForm.note,
      };
      await DataService.updateUserBingeList(updateData);
      this.$emit('update-account-show');
    },
    async deleteAccountShow() {
      await DataService.deleteBingeList(this.selectedEdit.id_user_show);
      alert('DELETED SHOW OFF LIST');
      this.$emit('update-account-show');
    },
    favouriteToggle() {
      this.editForm.favourite = this.editForm.favourite ? false : true;
    },
  },
};
</script>
<style scoped></style>
