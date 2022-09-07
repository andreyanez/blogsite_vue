<template>
  <footer class="footer section">
    <div class="footer-container container d-grid">
      <div class="company-data">
        <router-link :to="{ name: 'home' }">
          <h2 class="logo">NewsFlash</h2>
        </router-link>
        <p class="company-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, iure.
          Harum, animi dolores, nam, ad magni expedita.
        </p>

        <ul class="list social-media">
          <li class="list-item">
            <router-link :to="{ name: 'home' }" class="list-link"
              ><i class="ri-instagram-line"></i
            ></router-link>
          </li>
          <li class="list-item">
            <router-link :to="{ name: 'home' }" class="list-link"
              ><i class="ri-facebook-circle-line"></i
            ></router-link>
          </li>
          <li class="list-item">
            <router-link :to="{ name: 'home' }" class="list-link"
              ><i class="ri-twitter-line"></i
            ></router-link>
          </li>
          <li class="list-item">
            <router-link :to="{ name: 'home' }" class="list-link"
              ><i class="ri-pinterest-line"></i
            ></router-link>
          </li>
        </ul>

        <span class="copyright-notice"
          >&copy;2021 NewsFlash. All rights reserved.</span
        >
      </div>

      <div>
        <h6 class="title footer-title">Categories</h6>

        <ul class="footer-list list">
          <li class="list-item">
            <router-link :to="{ name: 'home' }" class="list-link"
              >Travel</router-link
            >
          </li>
          <li class="list-item">
            <router-link :to="{ name: 'home' }" class="list-link"
              >Food</router-link
            >
          </li>
          <li class="list-item">
            <router-link :to="{ name: 'home' }" class="list-link"
              >Technology</router-link
            >
          </li>
          <li class="list-item">
            <router-link :to="{ name: 'home' }" class="list-link"
              >Health</router-link
            >
          </li>
          <li class="list-item">
            <router-link :to="{ name: 'home' }" class="list-link"
              >Nature</router-link
            >
          </li>
          <li class="list-item">
            <router-link :to="{ name: 'home' }" class="list-link"
              >Fitness</router-link
            >
          </li>
        </ul>
      </div>

      <div>
        <h6 class="title footer-title">Useful links</h6>

        <ul class="footer-list list">
          <li class="list-item">
            <router-link :to="{ name: 'home' }" class="list-link"
              >Home</router-link
            >
          </li>
          <li class="list-item">
            <router-link :to="{ name: 'home' }" class="list-link"
              >Elements</router-link
            >
          </li>
          <li class="list-item">
            <router-link :to="{ name: 'home' }" class="list-link"
              >Tags</router-link
            >
          </li>
          <li class="list-item">
            <router-link :to="{ name: 'home' }" class="list-link"
              >Authors</router-link
            >
          </li>
          <li class="list-item">
            <router-link :to="{ name: 'home' }" class="list-link"
              >Membership</router-link
            >
          </li>
        </ul>
      </div>

      <div>
        <h6 class="title footer-title">Company</h6>

        <ul class="footer-list list">
          <li class="list-item">
            <router-link :to="{ name: 'home' }" class="list-link"
              >Contact us</router-link
            >
          </li>
          <li class="list-item">
            <router-link :to="{ name: 'home' }" class="list-link"
              >F.A.Q</router-link
            >
          </li>
          <li class="list-item">
            <router-link :to="{ name: 'home' }" class="list-link"
              >Careers</router-link
            >
          </li>
          <li class="list-item">
            <router-link :to="{ name: 'home' }" class="list-link"
              >Authors</router-link
            >
          </li>
          <li class="list-item">
            <router-link :to="{ name: 'home' }" class="list-link"
              >Memberships</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footerNav",
};
</script>
