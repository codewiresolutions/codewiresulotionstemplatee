<template>
  <footer id="footer" class="m-0 p-0" style="background-color: #100A27;">
    <div class="container-fluid footer-main p-0">
      <div class="row p-0 m-0 site-footer__upper">
        <div class="col-lg-3 col-md-6 col-sm-12 pt-3">
          <div id="intech_about_company-3" class="footer-widget widget widget_intech_about_company">
            <a href="#" class="footer-widget__logo">
              <img src="/images/logo.png" style="height: 44px; object-fit: cover">
            </a>
            <p class="footer-widget__text text-white pe-3">Codewire Solutions specializes in custom software development,
              offering innovative solutions for business through cutting-edge technology and expert consulting.</p>
            <div class="footer-widget__social">
              <a v-for="social in socials" :key="social.name" :href="social.url" class="icon-style" target="_blank">
                <font-awesome-icon :icon="['fab', social.icon]" />
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 pt-3">
          <div id="nav_menu-3" class="footer-widget widget widget_nav_menu" style="padding-left: 0px">
            <h3 class="footer-widget__title">Quick Link</h3>
            <div class="menu-quick-link-container">
              <ul id="menu-quick-link" class="menu">
                <li id="menu-item-721" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-721">
                  <RouterLink class="home-hd2" :to="{ path: '/', hash: '#it-solutions' }" @click="toggleOffcanvas">About us</RouterLink>
                </li>
                <li id="menu-item-723" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-723">
                  <RouterLink class="home-hd2" :to="{ path: '/', hash: '#it-services' }" @click="toggleOffcanvas">Services</RouterLink>
                </li>
                <li id="menu-item-972" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-972">
                  <a href="https://www.linkedin.com/in/javed-iqbal-5b7294243/">Our Blog</a>
                </li>
                <li id="menu-item-976" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-976">
                  <a href="https://www.linkedin.com/in/javed-iqbal-5b7294243/">Pricing</a>
                </li>
                <li id="menu-item-724" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-724">
                  <RouterLink class="home-hd2" :to="{ path: '/', hash: '#bookappointment' }" @click="toggleOffcanvas">
                    Contact Us
                  </RouterLink>

                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 pt-3">
          <div id="nav_menu-2" class="footer-widget widget widget_nav_menu">
            <h3 class="footer-widget__title">Services</h3>
            <div class="menu-services-container">
              <ul id="menu-services" class="menu">
                <li id="menu-item-726" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-726">
                  <a href="#">Web Application Development</a>
                </li>
                <li id="menu-item-727" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-727">
                  <a href="#">Mobile Application Development</a>
                </li>
                <li id="menu-item-728" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-728">
                  <a href="#">DevOps Solutions & Services</a>
                </li>
                <li id="menu-item-729" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-729">
                  <a href="#">UI/UX Design</a>
                </li>
                <li id="menu-item-730" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-730">
                  <a href="#">Digital Transformation</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 pt-3">
          <div id="intech_contact_info-2" class="footer-widget widget widget_intech_contact_info">
            <h3 class="footer-widget__title">Contact Info</h3>
            <p class="footer-widget__text">Street#1, house#66, block Z tehmoor shaheed colony vehari
              City vehari
            </p>
            <p class="footer-widget__text">+92 3087933900</p>
            <p class="footer-widget__text">info@codewiresolutions.com</p>
          </div>
        </div>
        <hr class="text-white" style="margin-top: 112px;">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-12 text-white info-item">
              <span>Codewire 2022 All Right Reserved</span>
            </div>
            <div class="col-md-6 col-sm-12 item-terms" style="display: flex;">
              <span><a class="text-white" style="text-decoration: none">Terms of Service | </a></span>
              <span><a class="text-white ps-1">Privacy Policy</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { RouterLink } from 'vue-router'

const socials = [
  { name: 'facebook', url: 'https://www.facebook.com/people/Code-Wire/pfbid0d7YVZxZdRJZMLhPWQemk7bsHvEYvtXLVW9qPbiwLrDDaHvUQQNd9xRBqzxcKwgZcl/', icon: 'facebook' },
  { name: 'instagram', url: 'https://www.instagram.com/codewiresolutions/', icon: 'instagram' },
  { name: 'linkedin', url: 'https://www.linkedin.com/company/86640723/admin/dashboard/', icon: 'linkedin' }
];
</script>

<style scoped>
.team-one__social {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 120px;
  left: 50%;
  transform: translateX(-50%);
  color: #FFFFFF;
  padding: 10px;
  border-radius: 50%;
}
.footer-main {
  width: 91%;
  display: block;
  box-sizing: border-box;
  margin-left: 74px;
  margin-right: 74px;
}
@media only screen and (max-width: 992px) {
  .footer-main {
    margin-left: 0px !important;
    margin-right: 0px !important;
    padding-right: 0px !important;
    padding-left: 0px !important;
  }
}
.site-footer__upper {
  padding-top: 125px !important;
  padding-bottom: 65px !important;
}
.footer-widget__text {
  font-size: 16px;
  line-height: 26px;
  color: #fff;
  opacity: 0.7;
  margin: 0;
}
.footer-widget__logo {
  display: inline-block;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  margin-bottom: 10px;
}
.footer-widget__social {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 25px;
}
.footer-widget__social a {
  font-size: 20px;
  color: #fff;
  opacity: 0.3;
  -webkit-transition: all .4s ease;
  transition: all .4s ease;
}
.footer-widget__social a:hover {
  opacity: 1;
}
.footer-widget__social a + a {
  margin-left: 30px;
}
.footer-widget__title {
  font-size: 24px;
  font-weight: 600;
  color: #fff;
  margin: 0;
  margin-top: -5px;
  margin-bottom: 35px;
}
footer ul {
  margin: 0;
  margin-top: -5px;
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none !important;
  text-underline: none !important;
}
footer .site-footer__upper ul li a {
  color: #fff;
  opacity: 0.7;
  display: inline-block;
  font-size: 18px;
  -webkit-transition: all .4s ease;
  transition: all .4s ease;
  position: relative;
}
footer ul li {
  position: relative;
  list-style: none;
  margin-bottom: 7px;
}
footer .site-footer__upper ul li a {
  color: #fff;
  opacity: 0.7;
  display: inline-block;
  font-size: 16px;
  -webkit-transition: all .4s ease;
  transition: all .4s ease;
  position: relative;
  padding-left: 0px;
  text-decoration: none;
}
footer .site-footer__upper ul li a:hover {
  color: #20DFE3;
  padding-left: 16px;
  text-decoration: underline !important;
}
footer ul li:hover {
  color: #2098D1;
  margin-bottom: 7px;
}
footer .site-footer__upper ul li a::before {
  content: '\21D2';
  position: absolute;
  padding-left: 1px;
  left: -20px;
  font-size: 16px;
  color: #000;
  opacity: 0;
}
footer .site-footer__upper ul li a:hover::before {
  color: #AFADB7;
  opacity: 1;
  left: 45px !important;
  padding-left: 10px;
}
.info-item {
  text-align: start;
}
@media only screen and (max-width: 767px) {
  .info-item {
    text-align: center;
  }
}
.item-terms {
  justify-content: end;
}
@media only screen and (max-width: 767px) {
  .item-terms {
    justify-content: center;
  }
}
</style>