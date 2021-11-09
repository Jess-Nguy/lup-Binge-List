<template>
  <div>
    <div class="input-group rounded" id="search-filter-container">
      <!-- Search bar -->
      <input
        type="search"
        class="form-control rounded"
        placeholder="Search users..."
        aria-label="Search"
        aria-describedby="search-addon"
        v-model="query.username"
      />
      <span class="input-group-text border-0" id="search-addon">
        <i class="fas fa-search"></i>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      query: {
        id_user: '',
        email: '',
        google_id: '',
        username: '',
        role_id: '',
        time_zone: '',
      },
    };
  },
  watch: {
    query: {
      deep: true,
      handler() {
        this.$emit('users-filter-change', this.query);
      },
    },
  },
};
</script>
<style scoped>
#search-filter-container {
  padding: 50px;
}
</style>
