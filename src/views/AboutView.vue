<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="slider-it">
          <carousel
            :items-to-show="itemsToShow"
            :current-slide="currentIndex"
            @slide-change="handleSlideChange"
            :autoplay="3000"
            wrap-around
          >
            <slide v-for="slide in slides" :key="slide.id">
              <img class="custom-margin" style="" :src="slide.imageUrl" :alt="slide.altText">
            </slide>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      slides: [
        {
          id: 1,
          imageUrl: 'http://el.commonsupport.com/newwp/intech/wp-content/uploads/2021/03/brand-2-1.png',
          altText: 'Image 1'
        },
        {
          id: 2,
          imageUrl: 'http://el.commonsupport.com/newwp/intech/wp-content/uploads/2021/03/brand-2-2.png',
          altText: 'Image 2'
        },
        {
          id: 3,
          imageUrl: 'http://el.commonsupport.com/newwp/intech/wp-content/uploads/2021/03/brand-2-3.png',
          altText: 'Image 3'
        },
        {
          id: 4,
          imageUrl: 'http://el.commonsupport.com/newwp/intech/wp-content/uploads/2021/03/brand-2-4.png',
          altText: 'Image 4'
        },
        {
          id: 5,
          imageUrl: 'http://el.commonsupport.com/newwp/intech/wp-content/uploads/2021/03/brand-2-5.png',
          altText: 'Image 5'
        },
        {
          id: 6,
          imageUrl: 'http://el.commonsupport.com/newwp/intech/wp-content/uploads/2021/03/brand-2-6.png',
          altText: 'Image 6'
        },
        {
          id: 7,
          imageUrl: 'http://el.commonsupport.com/newwp/intech/wp-content/uploads/2021/03/brand-2-1.png',
          altText: 'Image 7'
        },
        {
          id: 8,
          imageUrl: 'http://el.commonsupport.com/newwp/intech/wp-content/uploads/2021/03/brand-2-2.png',
          altText: 'Image 8'
        },
        {
          id: 9,
          imageUrl: 'http://el.commonsupport.com/newwp/intech/wp-content/uploads/2021/03/brand-2-3.png',
          altText: 'Image 9'
        },
        {
          id: 10,
          imageUrl: 'http://el.commonsupport.com/newwp/intech/wp-content/uploads/2021/03/brand-2-4.png',
          altText: 'Image 10'
        },
        {
          id: 11,
          imageUrl: 'http://el.commonsupport.com/newwp/intech/wp-content/uploads/2021/03/brand-2-5.png',
          altText: 'Image 11'
        },
        {
          id: 12,
          imageUrl: 'http://el.commonsupport.com/newwp/intech/wp-content/uploads/2021/03/brand-2-6.png',
          altText: 'Image 12'
        },
      ],
      currentIndex: 0,
      itemsToShow: 6, // Default number of items to show
    };
  },
  mounted() {
    this.updateItemsToShow(); // Call the method initially
    window.addEventListener('resize', this.updateItemsToShow); // Listen to resize events
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateItemsToShow); // Clean up resize listener
  },
  methods: {
    handleSlideChange(index) {
      this.currentIndex = index;
    },
    updateItemsToShow() {
      // Adjust itemsToShow based on screen width
      if (window.innerWidth <= 992 && window.innerWidth >= 500) {
        this.itemsToShow = 4;
      } else if (window.innerWidth <= 500) {
        this.itemsToShow = 2;
      } else {
        this.itemsToShow = 6;
      }
    },
  },
};
</script>

<style scoped>
.slider-it {
  width: 100%;

}

.custom-margin {

  margin-left: 120px !important;
  margin-bottom: 50px;
  opacity: 0.3;
}

.custom-margin:hover {
  opacity: 1;
}

</style>
