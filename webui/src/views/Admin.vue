<template>
  <div>
    <h1>ADMIN...</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
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
  methods: {
    ...mapActions(['isAdmin']),
  },
  async mounted() {
    // const admin = await this.isAdmin();
    // if (!admin) {
    //   this.$router.push('/home');
    // }
    if (this.user.roleId != 1) {
      this.$router.push('/home');
    }
  },
};
</script>
