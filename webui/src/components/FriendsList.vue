<template>
  <div>
    <div v-for="friend in friends" :key="friend.id_user_relations">
      <div class="bg-image hover-overlay">
        <img
          :src="friend.profile_image1"
          alt="profile image"
          width="150"
          height="150"
          v-if="friend.user_id1 != paramUserId"
        />
        <img :src="friend.profile_image2" alt="profile image" width="150" height="150" v-else />
        <a href="#!">
          <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
        </a>
      </div>
      <div class="card-body">
        <h5 class="card-title">
          <router-link :to="`/account/${friend.user_id1}`" v-if="friend.user_id1 != paramUserId">
            {{ friend.username1 }}</router-link
          >
          <router-link :to="`/account/${friend.user_id2}`" v-else> {{ friend.username2 }}</router-link>
        </h5>
        <button v-if="sameUser" @click="removeFriend(friend.id_user_relations)" class="btn btn-danger">Remove</button>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
<script>
import DataService from '../../service/dataService';
export default {
  props: {
    friends: {
      type: Array,
      require: true,
      default: () => [],
    },
    sameUser: {
      type: Boolean,
      require: true,
      default: false,
    },
    paramUserId: {
      type: String,
      require: true,
      default: '',
    },
  },
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
  create() {},
  methods: {
    async removeFriend(id) {
      await DataService.deleteFriend(id);
      alert('DELETE user!');
      this.$emit('deleted-user-relation');
    },
  },
};
</script>
