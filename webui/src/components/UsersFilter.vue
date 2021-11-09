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
        v-model="query.searchText"
      />
      <span class="input-group-text border-0" id="search-addon">
        <i class="fas fa-search"></i>
      </span>
    </div>
    <div>
      <div v-if="users.length > 0"></div>
      <div v-else>
        <p id="no-users-message"><strong>No users found</strong></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      query: {
        searchText: '',
      },
      users: [],
    };
  },
};
</script>
<style scoped>
#search-filter-container {
  padding: 50px;
}

#no-users-message {
  color: red;
}
</style>
