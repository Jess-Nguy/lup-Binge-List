import { createStore } from 'vuex';

import DataService from '../../service/dataService';
export default createStore({
  state: {
    token: '',
    user: null,
    role: '',
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUser(state, user) {
      state.user = user;
    },
    setRole(state, role) {
      state.role = role;
    },
  },
  actions: {
    login({ commit }, token) {
      commit('setToken', token);
      if (token !== '') {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const user = JSON.parse(window.atob(base64));
        commit('setUser', user);
      } else {
        commit('setUser', null);
      }
    },
    isAdmin({ commit }) {
      const role = DataService.isAdmin();
      commit('setRole', role);
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  modules: {},
});
