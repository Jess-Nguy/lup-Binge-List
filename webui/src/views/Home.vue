<template>
  <div class="home">
    <activity-list msg="Welcome to BingeList"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ActivityList from "@/components/ActivityList.vue";

export default {
  name: "Home",
  components: {
    ActivityList,
  },
};
</script>
