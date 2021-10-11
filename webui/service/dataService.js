import http from '../service/api.factory';

class DataService {
  // Not in use yet.
  async updateUser(data) {
    try {
      const response = await http.dataApi.put('/user', data);
      return response.data;
    } catch (e) {
      console.error('Failed to update user - ', e);
      return false;
    }
  }
  async postRequestShow(data) {
    try {
      console.log('DATA postRequestShow dataApi: ', data);
      const response = await http.dataApi.post('/requestShow', data);
      return response;
    } catch (e) {
      console.error('Failed to CREATE show request - ', e);
      return false;
    }
  }
  // Not in use yet.
  async getRequestShowByUnprocessed() {
    try {
      const response = await http.dataApi.get('/requestShow');
      return response.data;
    } catch (e) {
      console.error('Failed to GET show request - ', e);
      return false;
    }
  }
  // Not in use yet.
  async deleteRequestShow(id) {
    try {
      const response = await http.dataApi.delete('/requestShow', id);
      return response.data;
    } catch (e) {
      console.error('Failed to DELETE show request - ', e);
      return false;
    }
  }
  async isAdmin(user) {
    try {
      const response = await http.dataApi.get('/auth/isAdmin', user);
      return response.data.isAdmin;
    } catch (e) {
      console.error('Failed to get admin - ', e);
      return false;
    }
  }
}

export default new DataService();
