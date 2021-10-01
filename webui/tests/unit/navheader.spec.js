import NavHeader from '@/components/NavHeader.vue';
import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';

describe('NavHeader.vue', () => {
  let wrapper;
  const store = createStore({
    state() {
      return {
        token: '',
        user: null,
      };
    },
    mutations: {
      setToken(state, token) {
        state.token = token;
      },
      setUser(state, user) {
        state.user = user;
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
    },
    getters: {
      getUser(state) {
        return state.user;
      },
    },
  });

  beforeEach(() => {
    wrapper = shallowMount(NavHeader, {
      global: {
        plugins: [store],
        methods: { logoutUser: () => {} },
      },
      stubs: ['router-link', 'router-view'],
    });
  });

  it('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
