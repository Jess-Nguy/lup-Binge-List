import axios from 'axios';

export default {
  get dataApi() {
    return axios.create({
      baseURL: 'http://localhost:8000',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.token}`,
      },
    });
  },
};
