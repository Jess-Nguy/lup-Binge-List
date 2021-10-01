import axios from 'axios';

// let API_URL = 'https://bingelist.herokuapp.com';
// if (window.location.hostname === 'localhost') {
//   API_URL = 'http://localhost:8000';
// }

export default {
  get dataApi() {
    return axios.create({
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.token}`,
      },
    });
  },
};
