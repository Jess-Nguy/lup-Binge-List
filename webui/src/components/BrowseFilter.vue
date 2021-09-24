<template>
  <div class="input-group rounded">
    <!-- Search bar -->
    <input
      type="search"
      class="form-control rounded"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="search-addon"
    />
    <span class="input-group-text border-0" id="search-addon">
      <i class="fas fa-search"></i>
    </span>
  </div>
  <!-- Show/user switch -->
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
    <label class="form-check-label" for="flexSwitchCheckDefault">Show/User</label>
  </div>
  <!-- Country -->
  <div class="btn-group">
    <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Country
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li>
        <hr class="dropdown-divider" />
      </li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  <!-- Genres -->
  <div class="btn-group">
    <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Genres
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li>
        <hr class="dropdown-divider" />
      </li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  <!-- Airing status -->
  <div class="btn-group">
    <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Airing Status
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li>
        <hr class="dropdown-divider" />
      </li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  <!-- Year start range -->
  <div class="btn-group">
    <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Start
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li>
        <hr class="dropdown-divider" />
      </li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
    <p>to</p>
  </div>
  <!-- Year end range -->
  <div class="btn-group">
    <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      End
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li>
        <hr class="dropdown-divider" />
      </li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  <!-- show filter picks -->
  <div class="card">
    <i class="fas fa-tags"></i>
    <div class="card text-center border border-light shadow-0" id="filter-selection-cards">
      <div class="card-body">
        <h5 class="card-title">Finished</h5>
      </div>
    </div>
    <a><i class="fas fa-sort-alpha-up"></i></a>
    <a><i class="fas fa-sort-alpha-down"></i></a>
  </div>
</template>
