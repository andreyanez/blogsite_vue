<template>
  <div class="home">
    <!-- Featured articles -->
    <trendPosts :posts="posts"></trendPosts>
    <!-- Quick read -->
    <quickRead :posts="posts"></quickRead>
    <!-- Older posts -->
    <old-posts :posts="posts" :limit=6></old-posts>
    <!-- Popular tags -->
    <popular-tags :tags="tags"></popular-tags>
    <!-- Newsletter -->
    <newsSignUp></newsSignUp>

  </div>
</template>

<script>
import trendPosts from '@/components/trendPosts.vue'
import OldPosts from '@/components/oldPosts.vue'
import popularTags from '@/components/popularTags.vue'
import newsSignUp from '@/components/newsSignUp.vue'
import quickRead from '@/components/quickRea.vue'
import apiCall from '@/services/apiCall.js'

export default {
  name: 'HomeView',
  components: {
    trendPosts,
    OldPosts,
    popularTags,
    newsSignUp,
    quickRead
  },
  data () {
    return {
      tags: null,
      posts: []
    }
  },
  created () {
    apiCall.getPosts()
      .then((response) => {
        this.posts = response.data
      })
    apiCall.getTags()
      .then((response) => {
        this.tags = response.data
      })
  }
}
</script>

<style>
</style>
