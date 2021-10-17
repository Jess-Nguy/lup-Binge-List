<template>
  <div class="home">
    <search-autocomplete
      @input-autocomplete-set="getSelectedItem"
      :items="items"
      :elementField="'fruit 1'"
    ></search-autocomplete>
    <search-autocomplete
      @input-autocomplete-set="getSelectedItem"
      :items="items"
      :elementField="'fruit 2'"
    ></search-autocomplete>
    <h1>Activity List</h1>
    <activity-list />
    <h1>In Progress</h1>
    <show-preview />
    <h1>Trending shows</h1>
    <show-preview />
    <h1>Newly added shows</h1>
    <show-preview />
  </div>
</template>

<script>
import ActivityList from '@/components/ActivityList.vue';
import ShowPreview from '@/components/ShowPreview.vue';
import { mapActions } from 'vuex';
import SearchAutocomplete from '@/components/SearchAutocomplete.vue';
export default {
  data() {
    return {
      user: {},
      items: [
        { id: 1, value: 'Apple' },
        { id: 2, value: 'Banana' },
        { id: 3, value: 'Orange' },
        { id: 4, value: 'Mango' },
        { id: 5, value: 'Pear' },
        { id: 6, value: 'Peach' },
        { id: 7, value: 'Grape' },
        { id: 8, value: 'Tangerine' },
        { id: 9, value: 'Pineapple' },
      ],
    };
  },
  name: 'Home',
  components: {
    ActivityList,
    ShowPreview,
    SearchAutocomplete,
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
    getRole() {
      return this.$store.getters.getRole;
    },
  },
  mounted() {
    this.$store.subscribe((setUser, user) => {
      // console.log(setUser.type);
      // console.log(setUser.payload);
      console.log('USER: ', user);
      this.user = user;
    });
    localStorage.getItem('userToken');
    this.$store.subscribe((setRole, role) => {
      console.log('TYPE: ', setRole.type);
      console.log('PAYLOAD: ', setRole.payload);
      console.log('Home - ROLE: ', role);
    });
  },
  methods: {
    ...mapActions(['login']),
    getSelectedItem(result, element) {
      console.log('ELEMENT: ', element);
      console.log('got into method value: ', result.value);
      console.log('got into method id: ', result.id);
    },
  },
};
</script>
