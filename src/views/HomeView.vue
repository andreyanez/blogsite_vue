<template>
  <div class="home">
    <!-- Featured articles -->
    <featuredArticles></featuredArticles>
    <!-- Quick read -->
    <quickRead></quickRead>
    <!-- Older posts -->
    <old-posts></old-posts>
    <!-- Popular tags -->
    <popular-tags></popular-tags>
    <!-- Newsletter -->
    <newsSignUp></newsSignUp>

  </div>
</template>

<script>
import featuredArticles from '@/components/featuredArticles.vue'
import OldPosts from '@/components/oldPosts.vue'
import popularTags from '@/components/popularTags.vue'
import newsSignUp from '@/components/newsSignUp.vue'
import quickRead from '@/components/quickRea.vue'

export default {
  name: 'HomeView',
  components: {
    featuredArticles,
    OldPosts,
    popularTags,
    newsSignUp,
    quickRead
  }
}
</script>

<style>
</style>
