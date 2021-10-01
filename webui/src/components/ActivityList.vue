<template>
  <div class="activitylist">
    <div class="card">
      <div class="card mb-3" style="max-width: 540px">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="..." class="img-fluid" />
          </div>
          <div class="col-md-8">
            <i class="fas fa-times-circle"></i>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content
                is a little bit longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.fa-times-circle {
  color: red;
}
</style>

<script>
export default {
  name: 'activity',
};
</script>
