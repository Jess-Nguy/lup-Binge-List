<template>
  <div>
    <div class="bg-image hover-overlay">
      <img :src="showFav.show_image" alt="show image" width="200" height="300" />
      <a href="#!">
        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
      </a>
    </div>
    <div class="card-body">
      <h5 class="card-title">
        <a>{{ showFav.title[0] }}</a>
      </h5>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    showFav: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
};
</script>
