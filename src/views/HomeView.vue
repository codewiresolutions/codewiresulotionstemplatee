<script setup>

import { RouterView } from 'vue-router'
import ItSolutions from '@/views/It-Solutions.vue'
import AboutView from '@/views/AboutView.vue'
import ItSuccess from '@/views/ItSuccess.vue'
import BestExperts from '@/views/Best-experts.vue'
import ProjectCompleted from '@/views/Project-Completed.vue'
import OurCustomers from '@/views/Our-Customers.vue'
import CounterBlue from '@/views/Counter-Blue.vue'
import Contact from '@/views/contact.vue'
import ItStaff from '@/views/It-Staff.vue'
import FooterIntech from '@/views/Footer-Intech.vue'
import SliderView from '@/views/SliderView.vue'





</script>

<template>
  <div class="p-0 m-0">
    <header class="site-header  ">
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
              <button type="button" class="btn-close" @click="toggleOffcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 margin-nav">
                <li class="menu-item-12">
                  <a class=" home-hd1" href="#" @click="toggleOffcanvas">Home</a>
                </li>
                <li class="menu-item-12">
                  <a class=" home-hd2" href="#it-solutions" @click="toggleOffcanvas">About</a>
                </li>
                <li class="menu-item-12">
                  <a class=" home-hd2" href="#it-services" @click="toggleOffcanvas">Services</a>
                </li>
                <li class="menu-item-12">
                  <a class=" home-hd2" href="#best-expert" @click="toggleOffcanvas">Team</a>
                </li>
                <li class="menu-item-12">
                  <a class=" home-hd2 " href="#project" @click="toggleOffcanvas">News</a>
                </li>
                <li class="menu-item-12">
                  <a class=" home-hd2 " href="#bookappointment" @click="toggleOffcanvas">Book Appointment</a>
                </li>
                <li class="menu-item-12">
                  <a class=" home-hd2" href="#footer" @click="toggleOffcanvas">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>


    </header>
<div class="container-fluid  p-0 m-0">
  <slider-view></slider-view>
</div>
    <!----------------------------Welcome Section--------------->





    <!----------------------------End Welcome Section-------------->



    <!----------------------------BOOK Appointment--------->
     <section id="bookappointment">
        <div class="container-back" style="background-color: #F0F1F5 !important;">
      <div class="container-book">


        <div class="inner-cont">
          <h3 class="app-one-title">Book Appointment with Codewire Solutions</h3>
          <p class="app-one-text">Book an appointment for IT services to ensure the security and efficiency of your systems.</p>
          <div class="app-one__form">
            <div class=" card-row">
              <div class="row">
                <div class="col-lg-4 col-md-12">
        <span class="wpcf7-form-control-wrap your-name-wrap">
          <input
            class="form-input text-white"
            placeholder="Your name"
            v-model="contact.name"
          />
        </span>
                  <!-- Display validation error for name -->
                  <p v-if="errors.name" class="text-danger">{{ errors.name[0] }}</p>
                </div>
                <div class="col-lg-4 col-md-12">
        <span class="wpcf7-form-control-wrap your-name-wrap">
          <input
            class="form-input text-white"
            placeholder="Your email"
            v-model="contact.email"
          />
        </span>
                  <!-- Display validation error for email -->
                  <p v-if="errors.email" class="text-danger">{{ errors.email[0] }}</p>
                </div>
                <div class="col-lg-4 col-md-12">
        <span class="wpcf7-form-control-wrap your-name-wrap">
          <input
            class="form-input text-white"
            placeholder="Phone Number"
            v-model="contact.phone_number"
          />
        </span>
                  <!-- Display validation error for phone_number -->
                  <p v-if="errors.phone_number" class="text-danger">{{ errors.phone_number[0] }}</p>
                </div>
                <div class="col-lg-8 col-md-12">
        <span class="wpcf7-form-control-wrap your-name-wrap">
          <textarea
            class="form-input-query"
            placeholder="Description"
            v-model="contact.description"
          ></textarea>
        </span>
                  <!-- Display validation error for description -->
                  <p v-if="errors.description" class="text-danger">{{ errors.description[0] }}</p>
                </div>
                <div class="col-lg-12">
                  <div class="app-one__bottom">
                    <p class="app-one-text">
                      Schedule an appointment with <strong>Codewire Solutions</strong> today for
                      <strong>IT services</strong> to enhance the security and efficiency of your systems,
                      <br />
                      and receive customized support designed specifically for your needs.
                    </p>
                    <button
                      class="btn-learn"
                      style="position: relative;"
                      @click="submitContactForm"
                    >
                      Get Appointment
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <hr class="bookhr-line">
        <!-----------------------------------end Book Appoinment---------->


            <!------------------------------IT-Services------------>

          <section id="it-services">
           <div class="row " style="        display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;">
              <div class="block-title text-center">
            <h2 class="block-service" style="padding-bottom: 55px;">
              World best IT-Services
              <br>
              we provide
              <span class="border-span"></span>
            </h2>
          </div>
               <div class="row">
                 <div class="col-lg-4  col-sm-12 ">

                 <div class="hvr-bounce-to-bottom design-up best-it icon-book "
                   :class="{ 'hover-color1': isHovered1 }" @mouseover="changeColor1" @mouseout="defaultcolor1">
                   <i :class="textClass" style="color: #5538F4 ;">
                  <font-awesome-icon icon="users-gear" />
                  </i>
                 <h3 class="service-one " style="color: black" :class="textClass">
                  Web Application Development
                  </h3>
                   <p :class="textClass" style="font-size: 14px; color: #888888">Web application development involves creating dynamic,
                  interactive online applications tailored to user needs.</p>
              </div>
            </div>

            <div class="col-lg-4  col-sm-12 ">

              <div class="hvr-bounce-to-bottom design-up best-it icon-book "
                   :class="{ 'hover-color2': isHovered2 }" @mouseover="changeColor2" @mouseout="defaultcolor2">
                <i :class=" textcClass" style="color: #5538F4 ;">
                  <font-awesome-icon icon="mobile-screen-button" />
                </i>
                <h3 class="service-one " style="color: black" :class=" textcClass">
                  Mobile Application Development
                </h3>
                <p :class=" textcClass" style="font-size: 14px; color: #888888">Mobile app development involves designing and
                  building custom apps for iOS and Android platforms.</p>
              </div>
            </div>
            <div class="col-lg-4  col-sm-12 " >

              <div class="hvr-bounce-to-bottom design-up best-it icon-book "
                   :class="{ 'hover-color3': isHovered3 }" @mouseover="changeColor3" @mouseout="defaultcolor3">


                <i :class="textPClass" style="color: #5538F4 ;">
                  <font-awesome-icon icon="gears" />
                </i>

                <h3 class="service-one " style="color: black" :class="textPClass">
                  DevOps Solutions & Services
                </h3>
                <p :class="textPClass" style="font-size: 14px; color: #888888">DevOps solutions and services streamline development
                  deployment and operations for faster
                  more efficient software delivery.</p>


              </div>
            </div>
          </div>
               <div class="row">
            <div class="col-lg-4  col-sm-12 ">

              <div class="hvr-bounce-to-bottom design best-it icon-book "
                   :class="{ 'hover-color1': isHovered4 }" @mouseover="changeColor4" @mouseout="defaultcolor4">
                <i :class="textClass4" style="color: #5538F4 ;">
                  <font-awesome-icon icon="building-wheat" />
                </i>
                <h3 class="service-one " style="color: black" :class="textClass4">
                  UI/UX Design
                </h3>
                <p :class="textClass4" style="font-size: 14px; color: #888888">UI/UX design focuses on creating intuitive,
                  engaging interfaces for optimal user experiences.</p>
              </div>
            </div>

            <div class="col-lg-4  col-sm-12 ">

              <div class="hvr-bounce-to-bottom design best-it icon-book "
                   :class="{ 'hover-color2': isHovered5 }" @mouseover="changeColor5" @mouseout="defaultcolor5">
                <i :class=" textcClass5" style="color: #5538F4 ;">
                  <font-awesome-icon icon="globe" />
                </i>
                <h3 class="service-one " style="color: black" :class=" textcClass5">
                  Digital Transformation
                </h3>
                <p :class=" textcClass5" style="font-size: 14px; color: #888888">Digital transformation uses technology to modernize processes,
                  boosting efficiency, agility, and customer experience.</p>
              </div>
            </div>
            <div class="col-lg-4  col-sm-12 " >

              <div class="hvr-bounce-to-bottom design best-it icon-book "
                   :class="{ 'hover-color3': isHovered6 }" @mouseover="changeColor6" @mouseout="defaultcolor6">


                <i :class="textPClass6" style="color: #5538F4 ;">
                  <!--                 // <font-awesome-icon icon="gears" />-->
                  <font-awesome-icon icon="circle-check" />
                </i>

                <h3 class="service-one " style="color: black" :class="textPClass6">
                  Quality Assurance & Testing
                </h3>
                <p :class="textPClass6" style="font-size: 14px; color: #888888">Quality assurance and testing ensure products meet standards,
                  providing reliability and performance.</p>


              </div>
            </div>
          </div>

            </div>
          </section>
       </div>


    </div>

     </section>
  <!---->

    <!---------------------END ItSevicesView--------------->

    <!-----------END IT-Services---->


<it-solutions></it-solutions>

<about-view></about-view>
<ItSuccess></ItSuccess>
<best-experts></best-experts>
<project-completed></project-completed>
<our-customers></our-customers>
<counter-blue></counter-blue>
<contact></contact>
<ItStaff></ItStaff>
<FooterIntech></FooterIntech>


    </div>


  <!---------------------------vue3-carousel------------------------->

</template>

















<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import { ref } from 'vue';
import axios from 'axios';

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      text: "We Provide IT-Services",
      isHovered1: false,
      isHovered2: false,
      isHovered3: false,
      isHovered4: false,
      isHovered5: false,
      isHovered6: false,
      isMenuActive: false,
      activeTab: 0, // Index of the active tab, starting with 0
      tabs: [
        {
          title: 'Our Mission1',
          content: 'Dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ulac laboris aliquip ex ea commodo consequat duis aute irure.',
          items: ['consectetur elit sed do eius', 'consectetur elit sed', 'consectetur elit sed do'],
          link: 'http://el.commonsupport.com/newwp/intech/about-one/'
        },
        {
          title: 'Our Vision2',
          content: 'Dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ulac laboris aliquip ex ea commodo consequat duis aute irure.',
          items: ['consectetur elit sed do eius', 'consectetur elit sed', 'consectetur elit sed do'],
          link: 'http://el.commonsupport.com/newwp/intech/about-one/'
        },
        {
          title: 'Awards Win3',
          content: 'Dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ulac laboris aliquip ex ea commodo consequat duis aute irure.',
          items: ['consectetur elit sed do eius', 'consectetur elit sed', 'consectetur elit sed do'],
          link: 'http://el.commonsupport.com/newwp/intech/about-one/'
        }
      ],
      contact: {
        name: '',
        email: '',
        phone_number: '',
        description: '',
      },
      errors: {}  // Store validation errors here
    };
  },
  computed: {
    textClass() {
      return this.isHovered1 ? 'hover-color1' : 'default-color1';
    },
    textcClass() {
      return this.isHovered2 ? 'hover-color2' : 'default-color2';
    },
    textPClass() {
      return this.isHovered3 ? 'hover-color3' : 'default-color3';
    },
    textClass4() {
      return this.isHovered4 ? 'hover-color4' : 'default-color4';
    },
    textcClass5() {
      return this.isHovered5 ? 'hover-color5' : 'default-color5';
    },
    textPClass6() {
      return this.isHovered6 ? 'hover-color6' : 'default-color6';
    }
  },
  methods: {
    changeColor1() {
      this.isHovered1 = true;
    },
    defaultcolor1() {
      this.isHovered1 = false;
    },
    changeColor2() {
      this.isHovered2 = true;
    },
    defaultcolor2() {
      this.isHovered2 = false;
    },
    changeColor3() {
      this.isHovered3 = true;
    },
    defaultcolor3() {
      this.isHovered3 = false;
    },
    changeColor4() {
      this.isHovered4 = true;
    },
    defaultcolor4() {
      this.isHovered4 = false;
    },
    changeColor5() {
      this.isHovered5 = true;
    },
    defaultcolor5() {
      this.isHovered5 = false;
    },
    changeColor6() {
      this.isHovered6 = true;
    },
    defaultcolor6() {
      this.isHovered6 = false;
    },
    // Contact form submission
    async submitContactForm() {
      try {
        // Reset errors before submitting
        this.errors = {};

        const response = await axios.post('https://api.codewiresolutions.com/api/contacts', this.contact);
        Swal.fire({
          title: "Success!",
          text: "Your contact has been submitted successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
        console.log('Contact created successfully:', response.data);
        // Optionally reset form fields here or show a success message
        this.contact.name = '';
        this.contact.email = '';
        this.contact.phone_number = '';
        this.contact.description = '';
      } catch (error) {
        console.error('Error submitting form:', error);
        if (error.response && error.response.data.errors) {
          // Capture validation errors from the backend
          this.errors = error.response.data.errors;
        }
      }
    }
  }
};

// Initialize Bootstrap's Offcanvas and close menu on item click
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



<style scoped>


.offcanvas {
  transform: translateX(100%);
}
.offcanvas.show {
  transform: translateX(0);
}
/* Base styles */
body {
  background: #333;
  text-align: center;
  padding: 100px;
}

/* Link styles */
.hvr-bounce-to-top {
  font-family: Avenir;
  text-transform: uppercase;
  color: transparent;
  opacity: 1;

  background-image: url("http://el.commonsupport.com/newwp/intech/wp-content/uploads/2021/03/project-1-1.jpg");
  text-decoration: none;
  padding: 150px 70px;
  display: inline-block;
  position: relative;
  overflow: hidden; /* Ensures the hover effect is contained */
}

.hvr-bounce-to-top:before {
  content: "";
  position: absolute;
  background: rgba(0, 0, 0, 0.75);
  color: #FFFFFF;
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
.hvr-bounce-to-top:hover, .hvr-bounce-to-top:focus, .hvr-bounce-to-top:active {
  color: black;
  background-color: #20DFE3 !important;





}

.default-color {
  color: red;


}

.hover-color1 {
  color: white !important;


}
.hover-color2 {
  color: white !important;


}
.hover-color3 {
  color: white !important;


}
.hover-color4 {
  color: white !important;


}
.hover-color5 {
  color: white !important;


}
.hover-color6 {
  color: white !important;


}
.default-color1 {
  color: red;


}
.default-color12{
  color: red;


}
/* Container styles */


/* Styles for the dot/circle */

.container {
  padding: 20px;
}

/* Styles for the text element */
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

