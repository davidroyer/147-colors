import colors from "~/data/colors.json";

export const state = () => ({
  menuIsActive: false,
  sidebarOpen: false,
  colors,
  color: {}
});

export const mutations = {
  toggleMenuState(state) {
    state.menuIsActive = !state.menuIsActive;
  },

  toggleSidebar(state) {
    state.sidebarOpen = !state.sidebarOpen;
  },

  closeSidebar(state) {
    state.sidebarOpen = false;
  },

  setMenuState(state, payload) {
    state.menuIsActive = !state.menuIsActive;
  },

  setColor(state, payload) {
    state.color = payload;
  }
};

export const actions = {
  nuxtServerInit({ commit, state }, { isDev }) {}
};

export const getters = {};
