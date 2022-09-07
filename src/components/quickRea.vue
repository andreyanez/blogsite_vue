<template>
  <section class="quick-read section">
    <div class="container">
      <h2 class="title section-title" data-name="Quick read">Quick read</h2>
      <swiper
        :modules="modules"
        :slides-per-view="3"
        :space-between="20"
        navigation
        :pagination="{ clickable: true }"
        @swiper="onSwiper"
        :breakpoints="swiperOptions.breakpoints"
      >
        <swiper-slide v-for="post in getPosts" :key="post.id">
          <router-link :to="{ name: 'home' }" class="article">
            <img
              src="../assets/images/quick_read/quick_read_1.jpg"
              alt=""
              class="article-image"
            />
            <div class="article-data-container">
              <div class="article-data">
                <span>{{ post.createdAt }}</span>
                <span class="article-data-spacer"></span>
                <span>{{ post.readTime }} Min read</span>
              </div>
              <h3 class="title article-title">{{ post.title }}</h3>
            </div>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/bundle";
export default {
  props: ["posts"],
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = () => {
      console.log("soy swiper");
    };
    return {
      onSwiper,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          700: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        },
      },
    };
  },
  computed: {
    getPosts() {
      return this.posts.filter((post) => post.readTime < 5);
    },
  },
};
</script>

<style></style>
