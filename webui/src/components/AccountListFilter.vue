<template>
  <div>
    <div class="btn-group-vertical">
      <button type="button" class="btn btn-primary" @click="statusChange('all')">All</button>
      <button type="button" class="btn btn-primary" @click="statusChange('watching')">Watching</button>
      <button type="button" class="btn btn-primary" @click="statusChange('completed')">Completed</button>
      <button type="button" class="btn btn-primary" @click="statusChange('paused')">Paused</button>
      <button type="button" class="btn btn-primary" @click="statusChange('dropped')">Dropped</button>
      <button type="button" class="btn btn-primary" @click="statusChange('planned')">Planned</button>
    </div>
  </div>
</template>
<style scoped>
.btn-group-vertical {
  float: left;
}
</style>
<script>
export default {
  methods: {
    statusChange(status) {
      this.$emit('status-change', status);
    },
  },
};
</script>
