<template>
  <div class="forum">
    <h1>Request show</h1>
    <div v-if="user.roleId == 1">
      <request-show-admin />
    </div>
    <div v-else>
      <request-show-user />
    </div>
  </div>
</template>
<style scoped></style>
<script>
import RequestShowAdmin from '../components/RequestShowAdmin.vue';
import RequestShowUser from '../components/RequestShowUser.vue';
export default {
  components: { RequestShowUser, RequestShowAdmin },
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
  name: 'Forum',
  computed: {},
  mounted() {
    const localToken = localStorage.getItem('userToken');
    if (!localToken) {
      this.$router.push('/');
    }
  },
  methods: {},
};
</script>
