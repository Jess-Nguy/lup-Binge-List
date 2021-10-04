import http from '../service/api.factory';

class DataService {
  // async createUser(data) {
  //   try {
  //     const response = await http.dataApi.post('/register', data);
  //     return response.data;
  //   } catch (e) {
  //     console.error('Failed to create user - ', e);
  //     return false;
  //   }
  // },
  async postRequestShow(data) {
    try {
      console.log('DATA postRequestShow dataApi: ', data);
      const response = await http.dataApi.post('/requestShow', data);
      console.log('RESPONSE: ', response);
      return true;
    } catch (e) {
      console.error('Failed to CREATE show request - ', e);
      return false;
    }
  }
  async putRequestShow(data) {
    try {
      const response = await http.dataApi.put('/requestShow', data);
      return response.data;
    } catch (e) {
      console.error('Failed to UPDATE show request - ', e);
      return false;
    }
  }
  // async isAdmin() {
  //   try {
  //     const response = await http.dataApi.get('/auth/isAdmin');
  //     return response.json();
  //   } catch (e) {
  //     console.error('Failed to get admin - ', e);
  //     return false;
  //   }
  // }
}

export default new DataService();
