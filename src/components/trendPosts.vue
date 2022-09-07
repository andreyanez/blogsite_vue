<template>
      <section class="featured-articles section section-header-offset">
        <div class="featured-articles-container container d-grid">
            <div class="featured-content d-grid">
                <div class="headline-banner">
                    <h3 class="headline fancy-border">
                        <span class="place-items-center">Breaking news</span>
                    </h3>
                    <span class="headline-description" v-for="post in lastPost" :key="post.id">{{post.title}}</span>
                </div>
                <featuredPosts :posts="posts" :limit=3 ></featuredPosts>
            </div>
            <div class="sidebar d-grid">
                <h3 class="title featured-content-title">Trending news</h3>
                <latest-posts :posts="posts" :limit=5></latest-posts>
            </div>
        </div>
    </section>
</template>

<script>
import featuredPosts from '@/components/featuredPosts.vue'
import latestPosts from '@/components/latestPosts.vue'
import { computed } from '@vue/runtime-core'

export default {
  name: 'featuredArticles',
  props: ['posts'],
  components: {
    featuredPosts,
    latestPosts
  },
  setup (props) {
    const lastPost = computed(() => {
      return props.posts.filter((post, index) => index < 1)
    })
    return { lastPost }
  }
}
</script>

<style>

</style>
