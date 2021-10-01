<template>
  <div class="tablestats">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Comedy</th>
          <th scope="col">Action</th>
          <th scope="col">Romance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Number</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">Percent</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
    </table>
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

.tablestats {
  background-color: #eaeae0;
}
</style>

<script>
export default {
  name: 'table stats',
};
</script>
