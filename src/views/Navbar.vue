<template>
<header class="site-header">
<nav class="navbar fixed-top navbar-expand-lg header-navigation nav-stk">
  <div class="container-fluid container-main">
    <div class="logo-box">
      <a href="#">
        <img src="/images/logo.png" style="height: 44px; object-fit: cover" />
      </a>
    </div>
    <button
      class="navbar-toggler"
      type="button"
      @click="toggleOffcanvas"
      aria-controls="offcanvasNavbar"
      aria-label="Toggle navigation"
      :style="{ backgroundColor: '#21D6DA', color: '#FFFFFF', position:'relative' }"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="offcanvas offcanvas-end bg-dark"
      tabindex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      :class="{ show: isOffcanvasOpen }"
      style="transition: transform 0.3s ease-in-out"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
        <!-- Replace your button like this -->
        <button
          type="button"
          class="custom-close-btn"
          @click="toggleOffcanvas"
          aria-label="Close"
        >
          ✕
        </button>

      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 margin-nav">
          <li class="menu-item-12">
            <RouterLink class="home-hd1" to="/" @click.native="toggleOffcanvas">Home</RouterLink>
          </li>

          <li class="menu-item-12">
            <RouterLink class="home-hd2" :to="{ path: '/', hash: '#it-solutions' }" @click="toggleOffcanvas">About</RouterLink>
          </li>
          <li class="menu-item-12">
            <RouterLink class="home-hd2" :to="{ path: '/', hash: '#it-services' }" @click="toggleOffcanvas">Services</RouterLink>
          </li>
          <li class="menu-item-12">
            <RouterLink class="home-hd2" :to="{ path: '/', hash: '#project' }" @click="toggleOffcanvas">News</RouterLink>
          </li>



          <!--                <li class="menu-item-12">-->
          <!--                  <a class="home-hd2" href="#project" @click="toggleOffcanvas">News</a>-->
          <!--                </li>-->
          <li class="menu-item-12">
            <RouterLink class="home-hd2" :to="{ path: '/', hash: '#bookappointment' }" @click="toggleOffcanvas">
              Book Appointment
            </RouterLink>
          </li>
          <li class="menu-item-12">
            <RouterLink class="home-hd2" :to="{ path: '/', hash: '#footer' }" @click="toggleOffcanvas">
              Contact
            </RouterLink>
          </li>

        </ul>
      </div>
    </div>
  </div>
</nav>
</header>

</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
document.addEventListener('DOMContentLoaded', function () {
  const offcanvasElement = document.getElementById('offcanvasNavbar');
  const offcanvas = new bootstrap.Offcanvas(offcanvasElement);

  function closeMenu() {
    offcanvas.hide();
  }

  document.querySelectorAll('.navbar-nav a').forEach(item => {
    item.addEventListener('click', closeMenu);
  });
});

const isOffcanvasOpen = ref(false);
const toggleOffcanvas = () => {
  isOffcanvasOpen.value = !isOffcanvasOpen.value;
};
</script>
<style>
.offcanvas {
  transform: translateX(100%);
}
.offcanvas.show {
  transform: translateX(0);
}
.custom-close-btn {
  background-color: #20DFE3;
  color: white;
  border: none;
  font-size: 24px;
  padding: 4px 10px;
  border-radius: 4px;
  cursor: pointer;
}
.custom-close-btn:hover {
  background-color: #0D9488;
}

</style>