<template>
  <div class="home">
    <h1>Activity List</h1>
    <activity-list />
    <h1>In Progress</h1>
    <show-preview />
    <h1>Trending shows</h1>
    <show-preview />
    <h1>Newly added shows</h1>
    <show-preview />
  </div>
</template>

<script>
import ActivityList from '@/components/ActivityList.vue';
import ShowPreview from '@/components/ShowPreview.vue';
export default {
  data() {
    return {
      user: {
        name: localStorage.getItem('username'),
        profileUrl: localStorage.getItem('profileImage'),
        id: localStorage.getItem('userId'),
        roleId: localStorage.getItem('userRoleId'),
      },
    };
  },
  name: 'Home',
  components: {
    ActivityList,
    ShowPreview,
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>
