<template>
      <section class="popular-tags section">
        <div class="container">
            <h2 class="title section-title" data-name="Popular tags">Popular tags</h2>
            <div class="popular-tags-container d-grid">
                <router-link :to="{name: 'home'}" class="article" v-for="tag in tags" :key="tag.id">
                    <span class="tag-name">#{{tag.tagName}}</span>
                    <img :src="tag.tagImage" alt="" class="article-image">
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'popular-tags',
  props: ['tags']
}
</script>

<style>

</style>
