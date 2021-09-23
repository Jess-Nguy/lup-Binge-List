<template>
  <div class="forum">
    <h1>Request show</h1>
    <div class="card">
      <form>
        <!-- 2 column grid layout with text inputs for the first and last names -->
        <div class="row mb-4">
          <div class="col">
            <div class="form-outline">
              <label class="form-label" for="form6Example1">Name of show *</label>
              <input type="text" id="form6Example1" class="form-control" />
            </div>
          </div>
          <div class="col">
            <!-- Country -->
            <label class="form-label" for="form6Example2">Country of origin *</label>
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
                <li><a class="dropdown-item" href="#">Action</a></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Date aired input -->
        <div class="form-outline mb-4">
          <input type="date" id="form6Example3" class="form-control" />
          <label class="form-label" for="form6Example3">Date aired *</label>
        </div>

        <!-- Genre input -->
        <div class="form-outline mb-4">
          <label class="form-label" for="form6Example4">Genre *</label>
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
              <li><a class="dropdown-item" href="#">Action</a></li>
            </ul>
          </div>
        </div>

        <!-- Number of seasons input -->
        <div class="form-outline mb-4">
          <input type="number" id="form6Example5" class="form-control" />
          <label class="form-label" for="form6Example5"># of seasons (Optional)</label>
        </div>

        <!-- Number input -->
        <div class="form-outline mb-4">
          <input type="number" id="form6Example6" class="form-control" />
          <label class="form-label" for="form6Example6">Total # of episodes (Optional) </label>
        </div>

        <!-- Addition Link input (Note) -->
        <div class="form-outline mb-4">
          <textarea class="form-control" id="form6Example7" rows="4"></textarea>
          <label class="form-label" for="form6Example7">Any link to show info/Notes (Optional)</label>
        </div>

        <!-- Submit button -->
        <button type="submit" class="btn btn-primary btn-block mb-4">Submit</button>
      </form>
    </div>
  </div>
</template>
<style>
.form-outline,
.form-label {
  color: black;
}
</style>
<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {};
  },
  name: 'Forum',
  computed: {},
  mounted() {
    const localToken = localStorage.getItem('user-token');
    if (!localToken) {
      this.$router.push('/');
    } else {
      if (!this.getUser) {
        this.login(localToken);
      }
      console.log('Forum mount');
    }
  },
  methods: {
    ...mapActions(['login']),
  },
};
</script>
