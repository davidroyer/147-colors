import colors from '~/data/colors.json';
import { times } from 'lodash';
import chroma from 'chroma-js';

const generateIcons = num => {
  let arr = [];
  const scale = chroma.scale('Spectral').colors(num);
  times(num, i => {
    arr.push({
      color: scale[i],
      id: `icon-${i}`
    });
  });
  return arr;
};

export const state = () => ({
  menuIsActive: false,
  sidebarOpen: false,
  colors,
  color: {},
  icons: generateIcons(9)
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

export const getters = {
  getIconById: state => id => state.icons.find(i => i.id === id)
};
