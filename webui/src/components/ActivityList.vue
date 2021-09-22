<template>
  <div class="activitylist">
    <h1>{{ msg }}</h1>
    <img :src="profileUrl" alt="profile image" width="100" height="100" />
  </div>
</template>

<script>
export default {
  name: 'activity',
  props: {
    msg: String,
    profileUrl: String,
  },
};
</script>

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
</style>
