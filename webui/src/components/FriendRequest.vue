<template>
  <div>
    <div v-for="request in friendRequests" :key="request.id_user_relations">
      <div class="bg-image hover-overlay">
        <img :src="request.profile_image" :alt="request.username" width="150" height="150" />
      </div>
      <div class="card-body">
        <h5 class="card-title">
          <a @click="acceptFriendRequest(request.id_user_relations)"
            >{{ request.username }} <i class="fas fa-plus-square"></i
          ></a>
        </h5>
      </div>
    </div>
  </div>
</template>
<style scoped>
.fa-plus-square {
  color: #8fd14f;
}
</style>
<script>
import DataService from '../../service/dataService';
export default {
  props: {
    friendRequests: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      loggedInUser: {
        name: localStorage.getItem('username'),
        profileUrl: localStorage.getItem('profileImage'),
        id: this.$route.params.id,
        roleId: localStorage.getItem('userRoleId'),
      },
    };
  },
  create() {},
  methods: {
    async acceptFriendRequest(id) {
      await DataService.updateFriendRequest({ idUserRelations: id });
      this.$emit('accept-friend-request');
    },
  },
};
</script>
