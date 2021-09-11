import axios from 'axios';

export default {
  get dataApi() {
    return axios.create({
      headers: {
        'Content-type': 'application/json',
      },
    });
  },
};
