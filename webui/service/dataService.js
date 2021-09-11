import http from '../service/api.factory';

class DataService {
  async createUser(data) {
    try {
      const response = await http.dataApi.post('/register', data);
      return response.data;
    } catch (e) {
      console.error('Failed to create user - ', e);
      return false;
    }
  }
}

export default new DataService();
