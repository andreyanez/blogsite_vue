import { createStore } from "vuex";
import apiCall from "@/services/apiCall.js";

export default createStore({
  state: {
    user: "Andre",
    flashMessage: "",
    posts: [],
    tags: [],
    post: {},
  },
  mutations: {
    // ADD_EVENT(state, event){
    //   state.events.push(event)
    // },
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    SET_TAGS(state, tags) {
      state.tags = tags;
    },
    SET_POST(state, post) {
      state.post = post;
    },
  },
  actions: {
    getPost({ commit }, id) {
      return apiCall
        .getPost(id)
        .then((response) => {
          commit("SET_POST", response.data);
        })
        .catch((error) => {
          return error;
        });
    },
    getPosts({ commit }) {
      return apiCall.getPosts().then((response) => {
        commit("SET_POSTS", response.data);
      });
    },
    getTags({ commit }) {
      return apiCall.getTags().then((response) => {
        commit("SET_TAGS", response.data);
      });
    },
  },
  modules: {},
});
