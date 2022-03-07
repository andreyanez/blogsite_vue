<template>
    <header class="header" id="header">
        <nav class="navbar container">
            <router-link :to="{name: 'home'}">
                <h2 class="logo">NewsFlash</h2>
            </router-link>
            <nav class="menu" id="menu">
                <ul class="list">
                    <li class="list-item">
                        <router-link :to="{name: 'home'}" class="list-link current">Home</router-link>
                    </li>
                    <li class="list-item">
                        <router-link :to="{name: 'home'}" class="list-link">Categories</router-link>
                    </li>
                    <li class="list-item">
                        <router-link :to="{name: 'home'}" class="list-link">Reviews</router-link>
                    </li>
                    <li class="list-item">
                        <router-link :to="{name: 'home'}" class="list-link">News</router-link>
                    </li>
                    <li class="list-item">
                        <router-link :to="{name: 'home'}" class="list-link">Membership</router-link>
                    </li>
                    <li class="list-item">
                        <router-link :to="{name: 'home'}" class="list-link">Contact</router-link>
                    </li>
                    <li class="list-item screen-lg-hidden">
                        <router-link :to="{name: 'home'}" class="list-link">Sign in</router-link>
                    </li>
                    <li class="list-item screen-lg-hidden">
                        <router-link :to="{name: 'home'}" class="list-link">Sign up</router-link>
                    </li>
                </ul>
            </nav>
            <div class="list list-right">
                <button class="btn place-items-center" id="theme-toggle-btn" @click="toggleTheme">
                    <i class="ri-sun-line sun-icon"></i>
                    <i class="ri-moon-line moon-icon"></i>
                </button>
                <button class="btn place-items-center" id="search-icon">
                    <i class="ri-search-line"></i>
                </button>
                <button class="btn place-items-center screen-lg-hidden menu-toggle-icon" @click="toggleMenu" id="menu-toggle-icon">
                    <i class="ri-menu-3-line open-menu-icon"></i>
                    <i class="ri-close-line close-menu-icon"></i>
                </button>
                <router-link :to="{name: 'home'}" class="list-link screen-sm-hidden">Sign in</router-link>
                <router-link :to="{name: 'home'}" class="btn sign-up-btn fancy-border screen-sm-hidden">
                    <span>Sign up</span>
                </router-link>
            </div>
        </nav>
    </header>
</template>

<script>
import utils from '@/utils/general.js'

export default {
  name: 'headerNav',
  mounted () {
    const currentTheme = localStorage.getItem('currentTheme')
    if (currentTheme) {
      document.body.classList.add('light-theme')
    }
  },
  methods: {
    toggleMenu () {
      const menuToggleIcon = utils.selectElement('#menu-toggle-icon')
      const mobileMenu = utils.selectElement('#menu')
      mobileMenu.classList.toggle('activated')
      menuToggleIcon.classList.toggle('activated')
    },
    toggleTheme () {
      // Add light theme on click
    //   body.classList.toggle('light-theme')
      const body = document.body
      body.classList.toggle('light-theme')
      // If the body has the class of light theme then add it to local Storage, if not remove it
      if (body.classList.contains('light-theme')) {
        localStorage.setItem('currentTheme', 'themeActive')
      } else {
        localStorage.removeItem('currentTheme')
      }
    }
  }
}
</script>
