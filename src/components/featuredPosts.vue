<template>
    <router-link :to="{name: 'home'}" v-for="(post,index) in getPosts" :key="post.id" class="article featured-article" :class="`featured-article-${index+1}`">
        <img src="../assets/images/featured/featured-2.jpg" alt="" class="article-image">
        <span class="article-category">{{post.tag.tagName}}</span>
        <div class="article-data-container">
            <div class="article-data">
                <span>{{post.createdAt}}</span>
                <span class="article-data-spacer"></span>
                <span>{{post.readTime}} Min read</span>
            </div>
            <h3 class="title article-title">{{post.title}}</h3>
        </div>
    </router-link>
</template>
<script>
export default {
  name: 'featuredPosts',
  props: ['posts', 'limit'],
  computed: {
    getPosts () {
      return this.posts
        .filter(post => post.isFeatured)
        .filter((post, index) => index < this.limit)
    }
  }
}
</script>

<style>

</style>
