<template>
  <div class="tablestats">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col" v-for="(header, i) in tableHeaders" :key="i">{{ header }}</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Number</th>
          <td v-for="(count, i) in dataCounts" :key="i">{{ count }}</td>
        </tr>
        <tr>
          <th scope="row">Percent</th>
          <td v-for="(percent, i) in percentCount" :key="i">{{ percent }}%</td>
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

th {
  font-weight: bold;
}
table {
  width: 90%;
  background-color: #9ad4fa;
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
}
</style>

<script>
export default {
  name: 'table stats',
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
  },
  data() {
    return {
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
    percentCount() {
      const percent = [];
      for (const key in this.dataCounts) {
        if (this.dataCounts[key] != 0) {
          percent.push(Math.round((this.dataCounts[key] / this.total) * 100));
        } else {
          percent.push(0);
        }
      }
      return percent;
    },
  },
  created() {},
  mounted() {
    const localToken = localStorage.getItem('userToken');
    if (!localToken) {
      this.$router.push('/');
    }
    if (this.user.roleId == 1) {
      this.isAdmin = true;
    }
  },
};
</script>
