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
  async updateShow(data) {
    try {
      const response = await http.dataApi.put('/show', data);
      return response.data;
    } catch (e) {
      console.error('Failed to update show - ', e);
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
  async postShow(data) {
    try {
      console.log('DATA postShow dataApi: ', data);
      const response = await http.dataApi.post('/show', data);
      return response;
    } catch (e) {
      console.error('Failed to CREATE show - ', e);
      return false;
    }
  }
  async getCharactersDropdown() {
    try {
      const response = await http.dataApi.get('/character/dropdown');
      console.log(response.data.rows);
      return response.data.rows;
    } catch (e) {
      console.error('Failed to GET character - ', e);
      return false;
    }
  }
  async getActorDropdown() {
    try {
      const response = await http.dataApi.get('/actor/dropdown');
      console.log(response.data.rows);
      return response.data.rows;
    } catch (e) {
      console.error('Failed to GET actor - ', e);
      return false;
    }
  }
  async getShowDropdown() {
    try {
      console.log('DATA getShowDropdown dataApi: ');
      const response = await http.dataApi.get('/show/dropdown');
      return response.data;
    } catch (e) {
      console.error('Failed to GET show dropdown - ', e);
      return false;
    }
  }
  async getShowDisplay() {
    try {
      console.log('DATA getShowDisplay dataApi: ');
      const response = await http.dataApi.get('/show/display');
      return response.data.rows;
    } catch (e) {
      console.error('Failed to GET show display- ', e);
      return false;
    }
  }
  async getShowById(id) {
    try {
      console.log('DATA getShowById dataApi: ', id);
      const response = await http.dataApi.get(`/show/?id=${id}`);
      return response.data.rows;
    } catch (e) {
      console.error('Failed to GET show by Id - ', e);
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
