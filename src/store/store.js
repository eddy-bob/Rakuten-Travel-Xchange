import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      location: {
        label: null,
        cityCode: null,
      },
      results: [],
      totalItems: 0,
    };
  },
  mutations: {
    setlocation(state, value) {
      state.location.label = value.label;
      state.location.cityCode = value.cityCode;
    },
    setlocationResult(state, data, totalItems) {
      state.results = data;
      state.totalItems = totalItems;
    },
  },

  // actions: {
  // auth actions
  // async SAVE_LOCATION({ commit }, data) {
  //   commit("setlocation", data);
  // },
  // async SAVE_LOCATION_RESULT({ commit }, data) {
  //   commit("setlocationResult", data);
  // },
  // },
});
export default store;
