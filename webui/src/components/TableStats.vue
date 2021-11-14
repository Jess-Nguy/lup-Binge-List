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
          <td v-for="(count, i) in dataCounts" :key="i">{{ Math.round((count / total) * 100) }}%</td>
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
  props: {
    dataCounts: {
      type: Array,
      required: true,
      default: () => [],
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
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' },
      ],
    };
  },
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
