<template>
  <div class="home">
    <activity-list msg="Welcome to BingeList"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ActivityList from "@/components/ActivityList.vue";
// import Vue from "vue";
// import App from './app.vue';
export default {
  name: "Home",
  components: {
    ActivityList,
  },
};
</script>
