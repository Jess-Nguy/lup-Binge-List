import axios from 'axios';

export default {
  get dataApi() {
    return axios.create({
      baseURL: '',
      headers: {
        'Content-type': 'application/json',
      },
    });
  },
};
