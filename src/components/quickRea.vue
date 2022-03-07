<template>
    <section class="quick-read section">
      <div class="container">
          <h2 class="title section-title" data-name="Quick read">Quick read</h2>
          <swiper
                :modules="modules"
                :slides-per-view="1"
                :space-between="20"
                navigation
                :pagination="{ clickable: true }"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
            >
            <swiper-slide>
                  <a href="#" class="article">
                      <img src="../assets/images/quick_read/quick_read_1.jpg" alt="" class="article-image">
                      <div class="article-data-container">
                          <div class="article-data">
                              <span>23 Dec 2021</span>
                              <span class="article-data-spacer"></span>
                              <span>3 Min read</span>
                          </div>
                          <h3 class="title article-title">Sample article title</h3>
                      </div>
                  </a>
            </swiper-slide>
            <swiper-slide>
                  <a href="#" class="article">
                      <img src="../assets/images/quick_read/quick_read_2.jpg" alt="" class="article-image">
                      <div class="article-data-container">
                          <div class="article-data">
                              <span>23 Dec 2021</span>
                              <span class="article-data-spacer"></span>
                              <span>3 Min read</span>
                          </div>
                          <h3 class="title article-title">Sample article title</h3>
                      </div>
                  </a>
            </swiper-slide>
            <swiper-slide>
                  <a href="#" class="article">
                      <img src="../assets/images/quick_read/quick_read_3.jpg" alt="" class="article-image">
                      <div class="article-data-container">
                          <div class="article-data">
                              <span>23 Dec 2021</span>
                              <span class="article-data-spacer"></span>
                              <span>3 Min read</span>
                          </div>
                          <h3 class="title article-title">Sample article title</h3>
                      </div>
                  </a>
            </swiper-slide>
            <swiper-slide>
                  <a href="#" class="article">
                      <img src="../assets/images/quick_read/quick_read_4.jpg" alt="" class="article-image">
                      <div class="article-data-container">
                          <div class="article-data">
                              <span>23 Dec 2021</span>
                              <span class="article-data-spacer"></span>
                              <span>3 Min read</span>
                          </div>
                          <h3 class="title article-title">Sample article title</h3>
                      </div>
                  </a>
            </swiper-slide>
            <swiper-slide>
                <a href="#" class="article swiper-slide">
                    <img src="../assets/images/quick_read/quick_read_5.jpg" alt="" class="article-image">
                    <div class="article-data-container">
                        <div class="article-data">
                            <span>23 Dec 2021</span>
                            <span class="article-data-spacer"></span>
                            <span>3 Min read</span>
                        </div>
                        <h3 class="title article-title">Sample article title</h3>
                    </div>
                </a>
            </swiper-slide>
            <swiper-slide>
                <a href="#" class="article swiper-slide">
                    <img src="../assets/images/quick_read/quick_read_6.jpg" alt="" class="article-image">
                    <div class="article-data-container">
                        <div class="article-data">
                            <span>23 Dec 2021</span>
                            <span class="article-data-spacer"></span>
                            <span>3 Min read</span>
                        </div>
                        <h3 class="title article-title">Sample article title</h3>
                    </div>
                </a>
            </swiper-slide>
          </swiper>
      </div>
    </section>
</template>

<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css/bundle'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y]
    }
  }

}
</script>

<style>

</style>
