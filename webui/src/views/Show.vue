<template>
  <div></div>
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
    };
  },
};
</script>
<style scoped></style>
