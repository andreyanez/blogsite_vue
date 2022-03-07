<template>
    <nav class="navbar container">
        <a href="./index.html">
            <h2 class="logo">NewsFlash</h2>
        </a>
        <div class="menu" id="menu">
            <ul class="list">
                <li class="list-item">
                    <a href="#" class="list-link current">Home</a>
                </li>
                <li class="list-item">
                    <a href="#" class="list-link">Categories</a>
                </li>
                <li class="list-item">
                    <a href="#" class="list-link">Reviews</a>
                </li>
                <li class="list-item">
                    <a href="#" class="list-link">News</a>
                </li>
                <li class="list-item">
                    <a href="#" class="list-link">Membership</a>
                </li>
                <li class="list-item">
                    <a href="#" class="list-link">Contact</a>
                </li>
                <li class="list-item screen-lg-hidden">
                    <a href="./signin.html" class="list-link">Sign in</a>
                </li>
                <li class="list-item screen-lg-hidden">
                    <a href="./signup.html" class="list-link">Sign up</a>
                </li>
            </ul>
        </div>
        <div class="list list-right">
            <button class="btn place-items-center" id="theme-toggle-btn">
                <i class="ri-sun-line sun-icon"></i>
                <i class="ri-moon-line moon-icon"></i>
            </button>
            <button class="btn place-items-center" id="search-icon">
                <i class="ri-search-line"></i>
            </button>
            <button class="btn place-items-center screen-lg-hidden menu-toggle-icon" id="menu-toggle-icon">
                <i class="ri-menu-3-line open-menu-icon"></i>
                <i class="ri-close-line close-menu-icon"></i>
            </button>
            <a href="#" class="list-link screen-sm-hidden">Sign in</a>
            <a href="#" class="btn sign-up-btn fancy-border screen-sm-hidden">
                <span>Sign up</span>
            </a>
        </div>
    </nav>
  <router-view/>
      <!-- Footer -->
    <footer class="footer section">

        <div class="footer-container container d-grid">

            <div class="company-data">
                <a href="./index.html">
                    <h2 class="logo">NewsFlash</h2>
                </a>
                <p class="company-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, iure. Harum, animi dolores, nam, ad magni expedita.</p>

                <ul class="list social-media">
                    <li class="list-item">
                        <a href="#" class="list-link"><i class="ri-instagram-line"></i></a>
                    </li>
                    <li class="list-item">
                        <a href="#" class="list-link"><i class="ri-facebook-circle-line"></i></a>
                    </li>
                    <li class="list-item">
                        <a href="#" class="list-link"><i class="ri-twitter-line"></i></a>
                    </li>
                    <li class="list-item">
                        <a href="#" class="list-link"><i class="ri-pinterest-line"></i></a>
                    </li>
                </ul>

                <span class="copyright-notice">&copy;2021 NewsFlash. All rights reserved.</span>
            </div>

            <div>
                <h6 class="title footer-title">Categories</h6>

                <ul class="footer-list list">
                    <li class="list-item">
                        <a href="#" class="list-link">Travel</a>
                    </li>
                    <li class="list-item">
                        <a href="#" class="list-link">Food</a>
                    </li>
                    <li class="list-item">
                        <a href="#" class="list-link">Technology</a>
                    </li>
                    <li class="list-item">
                        <a href="#" class="list-link">Health</a>
                    </li>
                    <li class="list-item">
                        <a href="#" class="list-link">Nature</a>
                    </li>
                    <li class="list-item">
                        <a href="#" class="list-link">Fitness</a>
                    </li>
                </ul>

            </div>

            <div>
                <h6 class="title footer-title">Useful links</h6>

                <ul class="footer-list list">
                    <li class="list-item">
                        <a href="#" class="list-link">Home</a>
                    </li>
                    <li class="list-item">
                        <a href="#" class="list-link">Elements</a>
                    </li>
                    <li class="list-item">
                        <a href="#" class="list-link">Tags</a>
                    </li>
                    <li class="list-item">
                        <a href="#" class="list-link">Authors</a>
                    </li>
                    <li class="list-item">
                        <a href="#" class="list-link">Membership</a>
                    </li>
                </ul>

            </div>

            <div>
                <h6 class="title footer-title">Company</h6>

                <ul class="footer-list list">
                    <li class="list-item">
                        <a href="#" class="list-link">Contact us</a>
                    </li>
                    <li class="list-item">
                        <a href="#" class="list-link">F.A.Q</a>
                    </li>
                    <li class="list-item">
                        <a href="#" class="list-link">Careers</a>
                    </li>
                    <li class="list-item">
                        <a href="#" class="list-link">Authors</a>
                    </li>
                    <li class="list-item">
                        <a href="#" class="list-link">Memberships</a>
                    </li>
                </ul>

            </div>

        </div>

    </footer>

</template>

<style>

</style>
