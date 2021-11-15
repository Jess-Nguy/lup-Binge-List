<template>
  <div class="bargraphstats">
    <vue3-chart-js v-bind="{ ...barChart }" />
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
import { mapActions } from 'vuex';
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs';

export default {
  name: 'bar graph stats',
  props: {
    dataCounts: {
      type: Object,
      required: true,
      default: () => {},
    },
    tableHeaders: {
      type: Array,
      require: true,
      default: () => [],
    },
    tableType: {
      type: String,
      require: true,
      default: 'genre',
    },
    total: {
      type: Number,
      required: true,
      default: 0,
    },
    xLabel: {
      type: String,
      required: true,
      default: '',
    },
    yLabel: {
      type: String,
      required: true,
      default: '',
    },
  },
  data() {
    return {
      barChart: {
        type: 'bar',
        options: {
          min: 0,
          max: 100,
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
          },
          scales: {
            y: {
              min: 0,
              max: 100,
              ticks: {
                callback: function (value) {
                  return `${value}`;
                },
              },
            },
          },
        },
        data: {
          labels: [],
          datasets: [
            {
              label: '',
              data: [],
              backgroundColor: [
                '#1abc9c',
                '#f1c40f',
                '#2980b9',
                '#34495e',
                '#94AED0',
                '#863ADD',
                '#3E572F',
                '#C89E98',
                '#052D59',
                '#7F5C5D',
                '#D58D16',
                '#655777',
              ],
            },
          ],
        },
      },
      user: {
        name: localStorage.getItem('username'),
        profileUrl: localStorage.getItem('profileImage'),
        id: localStorage.getItem('userId'),
        roleId: localStorage.getItem('userRoleId'),
      },
      isAdmin: false,
    };
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
  },
  components: {
    Vue3ChartJs,
  },
  created() {
    this.barChart.data.labels = this.tableHeaders;
    // this.barChart.data.datasets[0].label = this.tableHeaders;

    // TO DO: set x and y labels.

    for (const [key, value] of Object.entries(this.dataCounts)) {
      // useless if condition but needed to use key so that eslint doesn't complain
      if (key) {
        this.barChart.data.datasets[0].data.push(value);
      }
    }

    console.log('data count lenght: ', this.dataCounts.total);
    this.barChart.options.scales.y.max = this.dataCounts.total;
  },
  mounted() {
    this.$store.subscribe((setUser, user) => {
      console.log(setUser.type);
      console.log(setUser.payload);
      console.log('USER: ', user);
      this.user = user;
    });

    const localToken = localStorage.getItem('userToken');
    if (!localToken) {
      this.$router.push('/');
    }
    if (this.user.roleId == 1) {
      this.isAdmin = true;
    }

    console.log('Bargraph mount');
  },
  methods: {
    ...mapActions(['login']),
  },
};
</script>
