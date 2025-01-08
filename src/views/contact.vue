<template>
  <div class="container" style="margin-top: 100px">
    <div class="row p-0">
      <div class="col-lg-4 ">
        <div class="blog-one__content">
          <div class="block-title">
            <h2 class="block-title__title">Latest news &amp; <br>insights</h2><!-- /.block-title__title -->
          </div><!-- /.block-title -->
          <p class="blog-one__text" style="padding-right: 18px">Codewire Solutions delivers innovative custom
            software and expert consulting for businesses using cutting-edge technology...</p>
          <div class="blog-one__meta">
            <img alt="" src="/images/news.png" class="avatar avatar-40 photo" height="40" width="40">                                        <span class="blog-one__meta-text">
											by <a href="#" class="blog-one__author">admin</a> /
											<a href="#" class="blog-one__date">March 13, 2021</a>
										</span>
          </div>
        </div>

      </div>
      <div class="col-lg-8 ">

        <div class="image-slider slider-container hvr-bounce-to-top img-fluid">
          <img :src="currentImage" alt="Slider Image" class="slider-image" @mouseover="isHovered3 = true" @mouseleave="isHovered3 = false">
          <font-awesome-icon :icon="['fab', 'instagram']" class="icon-style" :class="{ 'hovered': isHovered3 }" />
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  data() {
    return {
      images: [
        'images/blog-featured-1-1.jpg',
        'images/blog-featured-1-2.jpg',
        'images/blog-featured-1-3.jpg'
      ],
      currentIndex: 0,
      intervalId: null,
      autoSlideInterval: 2100, // Interval in milliseconds (5 seconds)
    };
  },
  components: {
    FontAwesomeIcon
  },
  setup() {

    const isHovered3 = ref(false);


    return {

      isHovered3,

    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    }
  },
  mounted() {
    this.startAutoSlide();
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.resetAutoSlide();
    },
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      this.resetAutoSlide();
    },
    startAutoSlide() {
      this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, this.autoSlideInterval);
    },
    resetAutoSlide() {
      clearInterval(this.intervalId);
      this.startAutoSlide();
    }
  },
  beforeDestroy() {
    clearInterval(this.intervalId); // Clear interval on component destruction
  }
};
</script>

<style scoped>
.image-slider {
  margin: auto;
  text-align: center;
  position: relative; /* Ensure relative positioning for absolute child */
}

.image-wrapper {
  position: relative;
  display: inline-block;
}

.slider-image {
  width: 100%;
  height: auto;
  display: block;
}

.slider-container {
  overflow: hidden;
}

.slider-image {
  width: 100%;
  height: auto;
}
.hvr-bounce-to-top {
  font-family: Avenir;
  text-transform: uppercase;
  color: transparent;

  opacity: 1;
  width: 100%;
  height: 91%;
  background-size: cover;
  text-decoration: none;

  display: inline-block;
  position: relative;
  overflow: hidden; /* Ensures the hover effect is contained */
  /* Adjust spacing between images */
}

.hvr-bounce-to-top:before {
  content: "";
 position: absolute;
  background: rgba(0, 0, 0, 0.5) !important;
  bottom: 0;
  left: 0;
  right: 0;
  top: 100%; /* Initially hidden below the link */
  transition: top 0.3s ease; /* Smooth transition */

}

/* Hover styles */
.hvr-bounce-to-top:hover:before {

  top: 0; /* Moves the background from bottom to top */
}

.hvr-bounce-to-top:hover,
.hvr-bounce-to-top:focus,
.hvr-bounce-to-top:active{

  color: white;
}
.icon-style {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center !important;
  font-size: 30px;
  transition: color 0.3s ease; /* Smooth transition for color change */
  z-index: 1;
  /* Initial color */
  color: transparent; /* Adjust as per your icon color */
}

.icon-style.hovered {
  color: red ; /* Color change on hover */
  background-color: #684EF4; /* Background color on hover */
  /* Makes the background circle */
  background-size: auto /* Adjust padding as needed */
}

</style>
