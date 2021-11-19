<template>
  <div class="stats">
    <div v-if="user.roleId == 1">
      <h2>Admin All Stats</h2>
    </div>
    <div v-else>
      <h2>My Stats</h2>
    </div>
    <!-- Chart/table switch -->
    <div class="form-check form-switch">
      <input @click="toggleViews" class="form-check-input" type="checkbox" id="barTableToggle" v-model="isBar" />
      <label class="form-check-label" for="barTableToggle">Table/Bar</label>
    </div>
    <!-- GENRE -->
    <h1>Genre</h1>
    <div v-if="isBar">
      <bar-graph-stats
        :dataCounts="genreCount"
        :tableHeaders="listOfGenres"
        :tableType="'genre'"
        :total="genreTotal"
        :xLabel="'Types of genre'"
      />
    </div>
    <div v-else>
      <table-stats :dataCounts="genreCount" :tableHeaders="listOfGenres" :tableType="'genre'" :total="genreTotal" />
    </div>
    <!-- SCORE -->
    <h1>Score</h1>
    <div v-if="isBar">
      <bar-graph-stats :dataCounts="scoreCount" :tableHeaders="listOfScores" :tableType="'score'" :total="scoreTotal" />
    </div>
    <div v-else>
      <table-stats :dataCounts="scoreCount" :tableHeaders="listOfScores" :tableType="'score'" :total="scoreTotal" />
    </div>
    <!-- STATUS -->
    <h1>Status</h1>
    <div v-if="isBar">
      <bar-graph-stats
        :dataCounts="statusCount"
        :tableHeaders="listOfStatus"
        :tableType="'status'"
        :total="statusTotal"
      />
    </div>
    <div v-else>
      <table-stats :dataCounts="statusCount" :tableHeaders="listOfStatus" :tableType="'status'" :total="statusTotal" />
    </div>
  </div>
</template>
<script>
import BarGraphStats from '@/components/BarGraphStats.vue';
import TableStats from '@/components/TableStats.vue';
import DataService from '../../service/dataService';

export default {
  data() {
    return {
      user: {
        name: localStorage.getItem('username'),
        profileUrl: localStorage.getItem('profileImage'),
        id: localStorage.getItem('userId'),
        roleId: localStorage.getItem('userRoleId'),
      },
      isBar: false,
      genreCount: [],
      scoreCount: [],
      statusCount: [],
      genreTotal: 0,
      scoreTotal: 0,
      statusTotal: 0,
      listOfGenres: [],
      listOfScores: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      listOfStatus: [],
    };
  },
  name: 'Stats',
  components: {
    BarGraphStats,
    TableStats,
  },
  computed: {
    getGenres() {
      return this.$store.getters.getGenres;
    },
    getListStatus() {
      return this.$store.getters.getListStatus;
    },
  },
  async created() {
    await this.getGenre();
    await this.getScore();
    await this.getStatus();
    this.listOfGenres = this.getGenres;
    this.listOfStatus = this.getListStatus;
  },
  mounted() {
    const localToken = localStorage.getItem('userToken');
    if (!localToken) {
      this.$router.push('/');
    }
  },
  methods: {
    toggleViews() {
      this.isBar = this.isBar ? false : true;
    },
    // Depending on Role will get category as a whole or by user.
    async getGenre() {
      if (this.user.roleId != 1) {
        this.genreCount = await DataService.getGenreCounts(this.user.id);
      } else {
        this.genreCount = await DataService.getGenreCounts('');
      }
      this.genreTotal = this.genreCount.total;
    },
    async getScore() {
      if (this.user.roleId != 1) {
        this.scoreCount = await DataService.getScoreCounts(this.user.id);
      } else {
        this.scoreCount = await DataService.getScoreCounts('');
      }
      this.scoreTotal = this.scoreCount.total;
    },
    async getStatus() {
      if (this.user.roleId != 1) {
        this.statusCount = await DataService.getStatusCounts(this.user.id);
      } else {
        this.statusCount = await DataService.getStatusCounts('');
      }
      this.statusTotal = this.statusCount.total;
    },
  },
};
</script>
