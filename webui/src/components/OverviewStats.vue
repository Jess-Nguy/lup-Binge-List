<template>
  <div class="overviewstats">
    <div class="card">
      <div class="card mb-3" style="max-width: 300px">
        <div class="row g-0">
          <!-- left gap  -->
          <div class="col-md-1"></div>
          <div class="col-md-4">
            <div class="card-body">
              <p class="card-text">
                {{ totalShows }}
              </p>
            </div>
            <label>Total Shows</label>
          </div>
          <!-- mid gap -->
          <div class="col-md-2"></div>
          <div class="col-md-4">
            <div class="card-body">
              <p class="card-text">
                {{ averageScore }}
              </p>
            </div>
            <label>Total Shows</label>
          </div>
          <!-- right gap -->
          <div class="col-md-1"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  border-radius: 5px;
}
.card-body {
  background-color: #2d9bf0;
  border-radius: 5px;
}
label,
p {
  color: black;
  font-weight: bold;
}
</style>
<script>
export default {
  name: 'overview stats',
  data() {
    return {
      totalShows: 0,
      averageScore: 0,
    };
  },
};
</script>
