<template>
  <div class="container-fluid slider-container m-0 p-0 "
       style="  position: relative;
        height: 140vh;
        background-size: cover !important;
        background-repeat: no-repeat;  ">
    <div class="slider">
      <PageView1 v-if="showPage1" />
      <PageView2 v-if="showPage2" />
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

import PageView1 from '@/views/PageView1.vue'
import PageView2 from '@/views/PageView2.vue'
// Define the slides
const slides = [PageView1, PageView2];
const currentSlide = ref(0);
const slideInterval = ref(null);

// Function to go to the next slide
function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
}

// Function to go to the previous slide
function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
}

// Autoplay function to automatically change slides
function startAutoplay() {
  slideInterval.value = setInterval(() => {
    nextSlide();
  }, 5000); // Change slide every 3 seconds
}

// Stop autoplay when the component is unmounted
function stopAutoplay() {
  if (slideInterval.value) {
    clearInterval(slideInterval.value);
  }
}

// Computed properties to control the visibility of the pages
const showPage1 = computed(() => currentSlide.value === 0);
const showPage2 = computed(() => currentSlide.value === 1);

// Start autoplay when the component is mounted
onMounted(() => {
  startAutoplay();
});

// Stop autoplay when the component is unmounted
onUnmounted(() => {
  stopAutoplay();
});
</script>

<style>
/* Add your CSS styles here */
.slider-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.slider {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

button {
  position: absolute;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.prev {
  bottom: 10px;
  left: 10px;
}

.next {
  bottom: 10px;
  right: 10px;
}
</style>
