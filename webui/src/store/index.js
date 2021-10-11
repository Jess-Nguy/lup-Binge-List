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
    async login({ commit }, token) {
      commit('setToken', token);
      if (token !== '') {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const user = JSON.parse(window.atob(base64));
        const isAdmin = await DataService.isAdmin(user);
        if (isAdmin) {
          commit('setRole', 'Admin');
        } else {
          commit('setRole', 'User');
        }
        commit('setUser', user);
      } else {
        commit('setUser', null);
      }
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getRole(state) {
      return state.role;
    },
  },
  modules: {},
});
