<template>
  <div v-if="users.length > 0" style="padding: 50px">
    <div id="userCards" class="card" v-for="user in users" :key="user.id_user">
      <div class="row g-0">
        <div class="col-1">
          <img id="profileCardsImage" :src="user.profile_image" :alt="user.username" class="img-fluid" />
        </div>
        <div class="col-10">
          <div>
            <h4>
              <router-link :to="`/account/${user.id_user}`">{{ user.username }}</router-link>
            </h4>
          </div>
        </div>
        <!-- <div class="col-1">
          <div id="side-button">
            <a @click="sendFriendRequest(user)" title="Send friend request"><i class="fas fa-plus-square fa-lg"></i></a
            ><br />
          </div>
        </div> -->
      </div>
    </div>
  </div>
  <div v-else>
    <p id="no-users-message"><strong>No users found</strong></p>
  </div>
</template>
<script>
// import DataService from '../../service/dataService';
export default {
  props: {
    users: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  components: {},
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
  watch: {
    showsArr: function (value) {
      this.showsFilter = value;
    },
  },
  mounted() {},
  methods: {
    // Will not do it this version because need to implement button disable
    // async sendFriendRequest(addFriend) {
    //   console.log('ADD this friend: ', addFriend);
    //   const data = {
    //     type: 'request',
    //     userId1: this.user.id,
    //     userId2: addFriend.id_user,
    //   };
    //   await DataService.postUserRelation(data);
    // },
  },
};
</script>
<style scoped>
#userCards {
  height: 150px;
}

#profileCardsImage {
  height: 150px;
}

#filter-selection-cards {
  height: 4rem;
}

#no-users-message {
  color: red;
}

#side-buttons {
  padding-top: 20%;
}
</style>
