import http from '../service/api.factory';

class DataService {
  // UPDATE
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
  async updateBanners(data) {
    try {
      const response = await http.dataApi.put('/banners', data);
      return response.data;
    } catch (e) {
      console.error('Failed to update banners - ', e);
      return false;
    }
  }
  async updateUserBingeList(data) {
    try {
      const response = await http.dataApi.put('/bingeList', data);
      return response.data;
    } catch (e) {
      console.error('Failed to update bingeList - ', e);
      return false;
    }
  }
  // POST
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
  async postBingeList(data) {
    try {
      console.log('DATA bingeList dataApi: ', data);
      const response = await http.dataApi.post('/bingeList', data);
      return response;
    } catch (e) {
      console.error('Failed to CREATE bingeList show - ', e);
      return false;
    }
  }
  // GET
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
  async getBanners() {
    try {
      const response = await http.dataApi.get('/banners');
      console.log(response.data.rows[0].banners);
      return response.data.rows[0].banners;
    } catch (e) {
      console.error('Failed to GET banners - ', e);
      return false;
    }
  }
  async getCheckAdd(data) {
    try {
      const response = await http.dataApi.get(`/bingeList/checkAdd/?userId=${data.user_id}&showId=${data.show_id}`);
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.error('Failed to GET checkAdd - ', e);
      return false;
    }
  }
  // Might not need anymore? was in browseshow.vue but using filter now.
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
  async getShowBrowseFilter(browserFilter) {
    try {
      const response = await http.dataApi.get(
        `/show/filter/?country=${browserFilter.country}&genre=${browserFilter.genre}&airingStatus=${browserFilter.airingStatus}&yearStart=${browserFilter.yearStart}&yearEnd=${browserFilter.yearEnd}&searchText=${browserFilter.searchText}`
      );
      return response.data.rows;
    } catch (e) {
      console.error('Failed to GET show browse filter - ', e);
      return false;
    }
  }
  async getAccountList(data) {
    try {
      console.log('getAccountList: ', data);
      const response = await http.dataApi.get(
        `/bingeList/filter/?country=${data.country}&genre=${data.genre}&status=${data.status}&yearStart=${data.yearStart}&yearEnd=${data.yearEnd}&userId=${data.userId}`
      );
      return response.data.rows;
    } catch (e) {
      console.error('Failed to GET account list - ', e);
      return false;
    }
  }
  // Not in use yet.
  // async getRequestShowByUnprocessed() {
  //   try {
  //     const response = await http.dataApi.get('/requestShow');
  //     return response.data;
  //   } catch (e) {
  //     console.error('Failed to GET show request - ', e);
  //     return false;
  //   }
  // }
  // DELETE
  async deleteShow(id) {
    try {
      const response = await http.dataApi.delete(`/show/delete/?id=${id}`);
      return response;
    } catch (e) {
      console.error('Failed to DELETE show - ', e);
      return false;
    }
  }
  // Not in use yet.
  // async deleteRequestShow(id) {
  //   try {
  //     const response = await http.dataApi.delete('/requestShow', id);
  //     return response.data;
  //   } catch (e) {
  //     console.error('Failed to DELETE show request - ', e);
  //     return false;
  //   }
  // }
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
