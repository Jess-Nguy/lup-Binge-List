<template>
  <div class="browse">
    <h1>This is a browse page</h1>
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
    <!-- Show cards -->
    <div class="card mb-3" style="max-width: 540px">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="..." class="img-fluid" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Show Name...</h5>
            <div class="card text-center border border-danger shadow-0" id="filter-selection-cards">
              <div class="card-body">
                <h5 class="card-title">Sitcom</h5>
              </div>
            </div>
            <p class="card-footer">
              <a><i class="fas fa-play"></i></a>
              <a><i class="fas fa-check"></i></a>
              <a><i class="fas fa-calendar-alt"></i></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.fa-sort-alpha-up,
.fa-sort-alpha-down,
.fa-tags,
.fa-check {
  color: red;
}

.fa-play {
  color: greenyellow;
}

.fa-calendar-alt {
  color: rgb(22, 0, 218);
}

#filter-show-cards,
#filter-selection-cards {
  color: black;
}
</style>
<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {};
  },
  name: 'Browse',
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
  },
  mounted() {
    const localToken = localStorage.getItem('user-token');
    if (!localToken) {
      this.$router.push('/');
    } else {
      if (!this.getUser) {
        this.login(localToken);
      }
      console.log('Browse mount');
    }
  },
  methods: {
    ...mapActions(['login']),
  },
};
</script>
