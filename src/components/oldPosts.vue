<template>
      <section class="older-posts section">
        <div class="container">
            <h2 class="title section-title" data-name="Older posts">Older posts</h2>
            <div class="older-posts-grid-wrapper d-grid">
                <router-link :to="{name: 'home'}" v-for="post in getOld" :key="post.id" class="article d-grid">
                    <div class="older-posts-article-image-wrapper">
                        <img src="../assets/images/older_posts/older_posts_4.jpg" alt="" class="article-image">
                    </div>

                    <div class="article-data-container">

                        <div class="article-data">
                            <span>{{post.createdAt}}</span>
                            <span class="article-data-spacer"></span>
                            <span>{{post.readTime}} Min read</span>
                        </div>

                        <h3 class="title article-title">{{post.title}}</h3>
                        <p class="article-description">{{post.description}}</p>

                    </div>
                </router-link>
            </div>
            <div class="see-more-container">
                <a href="#" class="btn see-more-btn place-items-center">See more <i class="ri-arrow-right-s-line"></i></a>
            </div>
        </div>

    </section>
</template>

<script>
export default {
  name: 'oldPosts',
  props: ['posts', 'limit'],
  computed: {
    getOld () {
      return this.posts
        .filter(post => !post.createdAt.includes(`${new Date().getFullYear()}`))
        .filter((post, index) => index < this.limit)
    }
  }
}
</script>

<style>

</style>
