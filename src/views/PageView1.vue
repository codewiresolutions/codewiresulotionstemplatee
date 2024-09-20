<template>
  <div class="container-fluid m-0 p-0">
    <div class="row">
      <div class="col">
        <div class="slider-it">


              <div class="card-style">
                <div class="banner-one"  style="  background-image: url('/images/slider-bg-1-1.png');
                 position: relative;
        height: 140vh;
        background-size: cover !important;
        background-repeat: no-repeat; display: flex; ">
                  <div class="col-xxl-6 col-lg-6 col-sm-12 padding-wel fade-in-top">
                    <p class="provide-wel">We Provide IT-Services</p>
                    <h3 class="keep-wel">Keep Secure Your <br> IT-Service</h3>
                    <p class="provide-wel2">We provide comprehensive IT services to ensure the security and efficiency of your technology infrastructure.</p>
                    <button class="btn-learn1">Learn More</button>
                  </div>
                  <div class="main-wel col-xxl-6 col-lg-6 col-sm-12">
                    <img src="/images/banner-person-2-1.png" class="banner-one-p fade-in-right">
                  </div>
                </div>
              </div>


        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      slides: [
        { id: 1 },
        { id: 2 },
        { id: 3 }
      ],
      currentIndex: 0,
      itemsToShow: 1,
    };
  },
  methods: {
    handleSlideChange(index) {
      this.currentIndex = index;
    },
    updateItemsToShow() {
      this.itemsToShow = window.innerWidth <= 992 ? 1 : 1;
    },
  },
  mounted() {
    this.updateItemsToShow();
    window.addEventListener('resize', this.updateItemsToShow);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateItemsToShow);
  }
};
</script>
<style scoped>
.slider-it {
  width: 100%;
  margin-bottom: 100px;

}
.padding-wel{
  padding-top: 280px;
  padding-left: 100px;
}
@media only screen and (max-width: 1150px) {
  .padding-wel {
    padding-top: 250px;
    padding-left: 75px !important;
  }
}
@media only screen and (max-width: 768px) {
  .padding-wel {
    padding-top: 230px;
    padding-left: 50px !important;
  }
}
@media only screen and (max-width: 576px) {
  .padding-wel {
    padding-top: 110px;
    padding-left: 25px !important;

  }
}

.provide-wel{
  font-size: 17px;
  font-weight: 600;
  color: #20DFE3;
  font-family: var(--heading-font);
  margin: 0;
}
.keep-wel{
  margin: 0;
  color: #FFFFFF;

  font-size: 60px;
  line-height: 70px;
  font-weight: 600;
}

@media only screen and (max-width: 475px) {
  .keep-wel {
    margin: 0;
    color: #fff;
    font-family: var(--heading-font);
    font-size: 40px !important;
    line-height: 60px !important;
    font-weight: 450 !important;
  }
}
.provide-wel2{
  font-size: 17px;
  font-weight: 600;
  color: #FFFFFF;
  font-family: var(--heading-font);
  font-size: 17px;
  font-weight: 600;
  color: #20DFE3;
  font-family: var(--heading-font);
  margin-top: 35px;
}
.btn-learn1{
  background-color: #20DFE3 ;
  padding-bottom: 12px;
  padding-top: 12px;
  padding-left: 32px;
  padding-right: 32px;
  color: #FFFFFF;
  border: none;
  font-size: 17px;
  font-family: var(--heading-font);
  font-weight: 600;
}
.btn-learn1:hover{
  background-color: #616161;
  color: #FFFFFF;
}
.btn-learn1 {
  opacity: 0; /* Start with button hidden */
  transform: translateY(20px); /* Start with button slightly moved down */
  animation: fadeInBottom 3s forwards; /* Apply the animation */
}
.card-style {

  margin: 0 auto;
  width: 100%;
}



.provide-wel {
  opacity: 0; /* Start with text hidden */
  transform: translateY(-210px); /* Start with text slightly moved up */
  animation: fadeInTop 3s forwards; /* Apply the animation */
}

/* Define the fade-in from the top animation */
@keyframes fadeInTop {
  from {
    opacity: 0;
    transform: translateY(-200px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.container {
  padding: 20px;
}

/* Styles for the h3 element */
.keep-wel {
  opacity: 0; /* Start with text hidden */
  transform: translateY(-210px); /* Start with text slightly moved up */
  animation: fadeInTop 3s forwards; /* Apply the animation */
}
.block-service{
  opacity: 0; /* Start with text hidden */
  transform: translateY(-210px); /* Start with text slightly moved up */
  animation: fadeInTop 3s forwards; /* Apply the animation */
}
/* Define the fade-in from the top animation */

.provide-wel2 {
  opacity: 0; /* Start with text hidden */
  transform: translateY(20px); /* Start with text slightly moved down */
  animation: fadeInBottom 3s forwards; /* Apply the animation */
  margin-bottom: 20px; /* Adjust spacing as needed */
}

/* Styles for the button element */
.btn-learn {
  opacity: 0; /* Start with button hidden */
  transform: translateY(20px); /* Start with button slightly moved down */
  animation: fadeInBottom 3s forwards; /* Apply the animation */
}

/* Define the fade-in from the bottom animation */
@keyframes fadeInBottom {
  from {
    opacity: 0;
    transform: translateY(200px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.banner-one-p {
  opacity: 0; /* Start with the image hidden */
  transform: translateX(200px); /* Start with the image slightly moved right */
  animation: fadeInRight 3s forwards; /* Apply the animation */
}

/* Define the fade-in from the right animation */
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(400px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>