<template>
  <div>Show {{ show.id }}</div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: localStorage.getItem('username'),
        profileUrl: localStorage.getItem('profileImage'),
        id: localStorage.getItem('userId'),
        roleId: localStorage.getItem('userRoleId'),
      },
      show: {
        id: '',
      },
    };
  },
  created() {
    this.show.id = this.$route.params.id;
  },
};
</script>
<style scoped></style>
