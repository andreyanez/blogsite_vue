<template>
  <div class="home">
    <!-- Featured articles -->
    <trendPosts :posts="posts"></trendPosts>
    <!-- Quick read -->
    <quickRead :posts="posts"></quickRead>
    <!-- Older posts -->
    <old-posts :posts="posts" :limit="6"></old-posts>
    <!-- Popular tags -->
    <popular-tags :tags="tags"></popular-tags>
    <!-- Newsletter -->
    <newsSignUp></newsSignUp>
  </div>
</template>

<script>
import trendPosts from "@/components/trendPosts.vue";
import OldPosts from "@/components/oldPosts.vue";
import popularTags from "@/components/popularTags.vue";
import newsSignUp from "@/components/newsSignUp.vue";
import quickRead from "@/components/quickRea.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "HomeView",
  components: {
    trendPosts,
    OldPosts,
    popularTags,
    newsSignUp,
    quickRead,
  },
  computed: {
    // compute is reactive
    ...mapState(["posts", "tags"]),
  },
  methods: {
    ...mapActions(["getPosts", "getTags"]),
  },
  created() {
    this.getPosts();
    this.getTags();
  },
};
</script>

<style></style>
