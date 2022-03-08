<template>
    <div class="trending-news-list">
        <router-link :to="{name: 'home'}" v-for="(post,index) in getPosts" :key="post.id" class="trending-news-box">
            <div class="trending-news-img-box">
                <span class="trending-number place-items-center">{{index + 1}}</span>
                <img src="../assets/images/trending/trending_4.jpg" alt="" class="article-image">
            </div>
            <div class="trending-news-data">
                <div class="article-data">
                    <span>{{post.createdAt}}</span>
                    <span class="article-data-spacer"></span>
                    <span>{{post.readTime}} Min read</span>
                </div>
                <h3 class="title article-title">{{post.title}}</h3>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'latestPosts',
  props: ['posts', 'limit'],
  computed: {
    getPosts () {
      return this.posts.filter((post, index) => index < this.limit)
    }
  }
}
</script>

<style>

</style>
