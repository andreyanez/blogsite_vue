<template>
  <!-- header -->
  <headerNav />
  <router-view/>
  <!-- Footer -->
  <footerNav />
</template>

<script>
import 'remixicon/fonts/remixicon.css'
import headerNav from '@/components/headerNav.vue'
import footerNav from '@/components/footerNav.vue'
import utils from '@/utils/general.js'

export default {
  components: {
    headerNav,
    footerNav
  },
  mounted () {
    window.addEventListener('scroll', this.scrollHeader)
  },
  methods: {
    // Nav styles on scroll
    scrollHeader (e) {
      const navbarElement = utils.selectElement('#header')
      if (e.target.scrollingElement.scrollTop >= 15) {
        navbarElement.classList.add('activated')
      } else {
        navbarElement.classList.remove('activated')
      }
    }

  }
}
</script>

<style>
@import "@/styles/views/HomeView.css";
</style>
