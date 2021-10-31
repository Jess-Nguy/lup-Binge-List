<template>
  <div>
    <h3>{{ tableName }}</h3>
    <div v-if="bingeStatusList.length > 0">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Title</th>
            <th scope="col">Score</th>
            <th scope="col">Progress</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="show in bingeStatusList" :key="show.show_id">
            <th scope="row">
              <img id="showImage" :src="show.show_image" :alt="show.title[0]" width="150" heigth="350" />
            </th>
            <td>{{ show.title[0] }}</td>
            <td>{{ show.score }}/10</td>
            <td>{{ show.episode_progress }}</td>
            <td>
              <edit-account-show :selectedEdit="show" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p style="color: red">No shows found for {{ tableName }}</p>
    </div>
  </div>
</template>
<script>
import EditAccountShow from './EditAccountShow.vue';

export default {
  props: {
    tableName: {
      type: String,
      required: true,
      default: '',
    },
    bingeStatusList: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  components: { EditAccountShow },
  methods: {
    loadModal() {
      console.log('LOADING EDIT MODAL');
    },
  },
};
</script>
<style scoped></style>
