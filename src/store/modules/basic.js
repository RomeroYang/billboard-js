import { isEmpty, get } from 'lodash';

export default {
  namespaced: true,

  state: {
    boardMap: {}
  },

  getters: {},

  mutations: {
    setBoard: function(state, data) {
      state.boardMap = Object.assign({}, state.boardMap, data);
    }
  },

  actions: {
    fetch: async function(context, id) {
      const data = {
        id,
        price: 600,
        ratio: 0.02,
        content: 'https://i0.hdslb.com/bfs/sycp/creative_img/201909/a089fc5ec77a3a539c747affa7898d7e.jpg@880w_440h.jpg'
      };
      context.commit('setBoard', { [id]: data });
      return Promise.resolve(data);
    }
  }
};
