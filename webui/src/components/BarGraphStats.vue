<template>
  <div class="bargraphstats">
    <canvas id="chart-mixed-example"></canvas>
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
</style>

<script>
import * as mdb from 'mdb-ui-kit';

export default {
  name: 'bar graph stats',
  data() {
    return {
      dataMixedChartExample: {
        type: 'bar',
        data: {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday '],
          datasets: [
            // First dataset (bar)
            {
              label: 'Impressions',
              data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
              order: 2,
            },
            // Second dataset (line)
            {
              label: 'Impressions (absolute top) %',
              data: [211, 2543, 2745, 3123, 2765, 1485, 587],
              type: 'line',
              order: 1,
              backgroundColor: 'rgba(66, 133, 244, 0.0)',
              borderColor: '#94DFD7',
              borderWidth: 2,
              pointBorderColor: '#94DFD7',
              pointBackgroundColor: '#94DFD7',
              lineTension: 0.0,
            },
          ],
        },
      },
    };
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
  },
  mounted() {
    this.$store.subscribe((setUser, user) => {
      console.log(setUser.type);
      console.log(setUser.payload);
      console.log('USER: ', user);
      this.user = user;
    });

    const localToken = localStorage.getItem('user-token');
    if (!localToken) {
      this.$router.push('/');
    } else {
      if (!this.getUser) {
        this.login(localToken);
      }
      this.welcomeMessage = 'Welcome ' + this.getUser.username;
      this.profileUrl = this.getUser.profile_image;
      console.log('Bargraph mount');
    }
    new mdb.Chart(document.getElementById('chart-mixed-example'), this.dataMixedChartExample);
  },
  methods: {},
};
</script>
