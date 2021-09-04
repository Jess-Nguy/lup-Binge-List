import axios from 'axios';

export default {
  get dataApi() {
    return axios.create({
      baseURL: 'http://localhost:5000/',
      headers: {
        'Content-type': 'application/json',
      },
    });
  },
};