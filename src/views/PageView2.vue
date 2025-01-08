<template>
  <div class="container-fluid p-0 m-0 owl-item active">
    <div class="item">
      <div class="banner-one__single  ">
        <div class="container-fluid">
          <div class="col-lg-6 col-md-8 padding-wel">
            <div class="banner-one__content">
              <p class="provide-it ">{{ tagline }}</p>
              <h3 class="keep-it ">{{ title }}</h3>
              <h3 class="keep-it ">{{ titlee }}</h3>
              <p class="provide-it2">{{ description }}</p>

                <button class="btn-learn2">{{ buttonText }}</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Define the data as reactive properties

const tagline = 'Codewire Solutions:';
const title = 'Leading IT innovations';
const titlee = 'worldwide.';
const description = 'Best IT-Solutions near the world, Codewire Solutions leads the way with innovative technology services and expertise.';
const buttonLink = 'http://el.commonsupport.com/newwp/intech/contact/';
const buttonText = 'Learn more';
</script>

<style scoped>
/* Add your CSS styles here */
.owl-item {
  position: relative;
}

.banner-one__single {
  background-image: url("/images/slider-bg-3-1.jpg");
  background-size: cover;
  background-position: center;
  height: 140vh; /* Full height of the viewport */

  align-items: center;
  justify-content: center;
}

.banner-one__content {
  color: white;
  text-align: left;
}
.provide-it{

  font-size: 17px;
  font-weight: 600;
  color: #20DFE3;

  margin: 0;
  opacity: 0; /* Hide initially */
  transform: translateY(-210px); /* Start from below */
  animation: fadeInFromTop 3s forwards;
  animation-delay: 0.5s;
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
/* Define the keyframes for the animation */
@keyframes fadeInFromTop {
  to {
    opacity: 1;
    transform: translateY(0); /* Move to original position */
  }
}



.keep-it {
  animation-delay: 0.75s;
  margin: 0;
  color: #FFFFFF;

  font-size: 60px;
  line-height: 70px;
  font-weight: 600;
  opacity: 0; /* Start with text hidden */
  transform: translateY(-110px); /* Start with text slightly moved up */
  animation: fadeInTop 3s forwards;

}

@media only screen and (max-width: 475px) {
  .keep-it {
    margin: 0;
    color: #fff;

    font-size: 40px !important;
    line-height: 60px !important;
    font-weight: 450 !important;

  }
}
.banner-one__text {
  animation-delay: 1s;
}

.banner-one__btn-group {
  margin-top: 20px;
}
.provide-it2{
  font-size: 17px;
  font-weight: 600;
  color: #FFFFFF;
  font-family: var(--heading-font);
  font-size: 17px;
  font-weight: 600;
  color: #20DFE3;
  font-family: var(--heading-font);
  margin-top: 35px;
  opacity: 0; /* Start with text hidden */
  transform: translateY(20px); /* Start with text slightly moved down */
  animation: fadeInBottom 3s forwards; /* Apply the animation */
  margin-bottom: 20px; /* Adjust spacing as needed */
}
.btn-learn2{
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
  opacity: 0; /* Start with button hidden */
  transform: translateY(20px); /* Start with button slightly moved down */
  animation: fadeInBottom 3s forwards; /* Apply the animation */
}
.btn-learn2:hover{
  background-color: #616161;
  color: #FFFFFF;
}
.btn-learn2 {
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


.main-wel{
  padding-top: 159px;
  padding-bottom: 275px;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.banner-one-p{
  display: inline-block !important;

  right: 0 !important;
  position: absolute;

  right: 0;
}
@media only screen and (max-width: 992px) {
  .main-wel {
    display: none; /* Hide the banner on screens with a maximum width of 600px */
  }
}
.padding-wel{
  padding-top: 280px;
  padding-left: 100px !important;
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

</style>
