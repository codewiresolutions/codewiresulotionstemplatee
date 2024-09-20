<template>

  <div class="container" style="background-color: #F2F3F5;
  background-image: url('/images/cta-1-bg-1-1.jpg'); ">

    <div class="block-title text-center " >
      <h2 class="block-title__title " >See what our customers <br> are saying...</h2>
    </div>
    <div class="row">
      <div class="col">
        <div class="slider-it">
          <carousel
            :items-to-show="itemsToShow"
            :current-slide="currentIndex"
            @slide-change="handleSlideChange"
            :autoplay="4000"
            wrap-around
          >
            <slide v-for="slide in slides" :key="slide.id">
              <div v-html="slide.htmlContent" class="card-style"></div>
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
          htmlContent: `
<div class="custom-margin  card-style bg-white">
            <div class="row  card-body   custom-card p-5">
               <div class="col-lg-3">
                <img src="/images/testi-1-1.jpg" alt="Card image" class="mb-5" style="border-radius: 50%;">
              </div>
              <div class="col-lg-9">
                <p class="text-black" style="text-align: left">
                   CodeWire Solutions delivers exceptional service with innovative solutions and outstanding support,
                   transforming our projects with efficiency and expertise.
                </p>
                 <h3 class="cards-title text-right " style="text-align: left; font-size: 17px;">Henrietta McGuire  <span>/ Designer</span></h3>
              </div>
              </div>
            </div>`,
          altText: 'Image 1',
          isHtml: true
        },
        {
          id: 2,
          htmlContent: `
<div class="custom-margin  card-style bg-white">
            <div class="row  card-body   custom-card p-5">
               <div class="col-lg-3">
                <img src="/images/team-1-5.jpg" alt="Card image" class="mb-5 img-fluid" style="border-radius: 50%;">
              </div>
              <div class="col-lg-9">
                <p class="text-black" style="text-align: left">
                  CodeWire Solutions offers remarkable service, combining cutting-edge solutions with excellent support,
                  revolutionizing our projects with speed and skill.
                </p>
                 <h3 class="cards-title text-right " style="text-align: left; font-size: 17px;">Norman Benson  <span></span></h3>
              </div>
              </div>
            </div>`,
          altText: 'Image 2',
          isHtml: true
        },
        {
          id: 3,
          htmlContent: `
<div class="custom-margin  card-style bg-white">
            <div class="row  card-body   custom-card p-5">
              <div class="col-lg-3">
                <img src="/images/team-1-4.jpg" alt="Card image" class="mb-5 img-fluid" style="border-radius: 50%;">
              </div>
              <div class="col-lg-9">
                <p class="text-black" style="text-align: left">
                   CodeWire Solutions provides outstanding service, blending innovative solutions with top-notch support,
                   and transforming our projects with both efficiency and expertise.
                </p>
                 <h3 class="cards-title text-right " style="text-align: left; font-size: 17px;">Nannie Martin  <span></span></h3>
              </div>
              </div>
            </div>`,
          altText: 'Image 3',
          isHtml: true
        },
      ],
      currentIndex: 0,
      itemsToShow: 2, // Display two cards at a time
    };
  },
  methods: {
    handleSlideChange(index) {
      this.currentIndex = index;
    },
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
      if (window.innerWidth <= 992  &&  window.innerWidth >= 500 ) {
        this.itemsToShow = 2;
      }
      else if(window.innerWidth <= 500)
      {
        this.itemsToShow = 1;
      }
      else {
        this.itemsToShow = 2;
      }
    },
  },
};

</script>


<style scoped>
.block-title__title{
  margin-top: 100px;

  color: #2D2C2C;
  font-family: var(--heading-font);
  font-weight: 600;
  font-size: 40px;
  line-height: 50px;
}
.custom-card{
  padding: 54px 40px;
  background-color: red;
  -webkit-box-shadow: 0px 50px 120px 0px rgba(26, 46, 85, 0.1);
  box-shadow: 0px 50px 120px 0px rgba(26, 46, 85, 0.1);
  padding-top: 40px !important;
  padding-bottom: 40px !important;

}

.custom-margin{
  padding: 10px;

}
.slider-it {
  background-image: url("	http://el.commonsupport.com/newwp/intech/wp-conten…/intech/assets/images/background/testi-bg-1-1.jpg");
  width: 100%;
  margin-bottom: 100px;
  margin-top: 50px;
}

.card-style {


  padding: 20px; /* Adjust padding to your preference */
  margin-left: 270px !important;
  margin-right: -300px !important; /* Center align the cards */
  width: 100%; /* Ensure each card takes full width */
}
.cards-title{
  font-size: 12px !important;
}
</style>

