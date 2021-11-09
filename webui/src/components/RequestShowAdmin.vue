<template>
  <div class="forum">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Country</th>
          <th scope="col">Genre</th>
          <th scope="col"># Episodes</th>
          <th scope="col"># Seasons</th>
          <th scope="col">Release Date</th>
          <th scope="col">Created At</th>
          <th scope="col">Note</th>
          <!-- <th scope="col">Processed By</th> -->
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(showRequest, i) in listOfShowRequest" :key="showRequest.request_id">
          <th scope="row">{{ i }}</th>
          <td>{{ showRequest.show_title }}</td>
          <td>{{ showRequest.country }}</td>
          <td>{{ showRequest.genre }}</td>
          <td>{{ showRequest.number_episodes }}</td>
          <td>{{ showRequest.seasons }}</td>
          <td>{{ showRequest.release_date }}</td>
          <td>{{ showRequest.created_at }}</td>
          <!-- <td>{{showRequest.processed_by}}</td> -->
          <td>{{ showRequest.note }}</td>
          <td>
            <a @click="deleteRequest(showRequest)"><i class="fas fa-times" style="color: red"></i></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped></style>
<script>
import DataService from '../../service/dataService';
export default {
  data() {
    return {
      listOfShowRequest: [],
    };
  },
  name: 'Forum Admin',
  computed: {},
  async mounted() {
    const localToken = localStorage.getItem('userToken');
    if (!localToken) {
      this.$router.push('/');
    }
    console.log('Forum mount');
    await this.getRequests();
    console.log('REQUESTS: ', this.listOfShowRequest);
  },
  methods: {
    async deleteRequest(showRequest) {
      alert(`Deleting  ${showRequest.request_id}`);
      await DataService.deleteRequestShow(showRequest.request_id);
      await this.getRequests();
    },
    async getRequests() {
      this.listOfShowRequest = await DataService.getRequestShowByUnprocessed();
    },
  },
};
</script>
