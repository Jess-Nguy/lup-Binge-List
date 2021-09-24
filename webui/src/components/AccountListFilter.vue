<template>
  <div>
    <div class="btn-group-vertical">
      <button type="button" class="btn btn-primary">All</button>
      <button type="button" class="btn btn-primary">Watching</button>
      <button type="button" class="btn btn-primary">Completed</button>
      <button type="button" class="btn btn-primary">Paused</button>
      <button type="button" class="btn btn-primary">Dropped</button>
      <button type="button" class="btn btn-primary">Planning</button>
    </div>
    <favourite-filter />
  </div>
</template>
<style scoped>
.btn-group-vertical {
  float: left;
}
</style>
<script>
import FavouriteFilter from './FavouriteFilter.vue';
export default {
  components: { FavouriteFilter },
};
</script>
