<template>
  <!--TO DO:  Could be renamed to side filter since it's the same in both favourite and accountlistfilter.. -->
  <div>
    <div class="vstack gap-2 col-md-1 mx-auto">
      <!-- Country filter -->
      <label class="form-label" for="form6Example2">Country</label>
      <div class="form-outline btn-group">
        <button
          id="form6Example2"
          type="button"
          class="btn btn-light dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Country
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Canada</a></li>
        </ul>
      </div>
      <!-- Genre -->
      <label class="form-label" for="form6Example2">Genre</label>
      <div class="form-outline btn-group">
        <button
          id="form6Example2"
          type="button"
          class="btn btn-light dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Genre
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Comedy</a></li>
        </ul>
      </div>
      <!-- Year -->
      <label class="form-label" for="form6Example2">Year</label>
      <div class="form-outline btn-group">
        <button
          id="form6Example2"
          type="button"
          class="btn btn-light dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          -
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">1998</a></li>
        </ul>
      </div>
      <label>to</label>
      <div class="form-outline btn-group">
        <button
          id="form6Example2"
          type="button"
          class="btn btn-light dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          -
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">2021</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
.vstack {
  float: left;
}
</style>
