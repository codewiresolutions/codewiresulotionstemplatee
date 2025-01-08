<template>
  <div>
    <section id="it-solutions" class="it-solutions">
      <div class="container container-it">
        <div class="row" >
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="it-solutions-content">
              <div class="it-solutions-title">
                <h3 class="it-title">
                  Best IT-Solutions near the world<br>
                  Codewire Solutions leads the way with innovative technology services and expertise.
                </h3>
                <p class="it-text">
                  We provide tailored IT solutions, enhancing efficiency and security
                  with innovative technology and expert support for diverse business needs.
                </p>
              </div>

            </div>
            <div>
              <ul class="nav nav-tabs about-one__tab-title" role="tablist">
                <li v-for="(tab, index) in tabs" :key="index" class="nav-item about-one__tab-title-item">
                  <a
                    :class="{ 'nav-link': true, 'about-one__tab-title-link': true, 'active': index === activeTab }"
                    :href="'#tab-' + (index + 1)"
                    role="tab"
                    data-toggle="tab"
                    @click="activeTab = index"
                  >
                    {{ tab.title }}
                  </a>
                </li>
              </ul>

              <div class="about-one__tab-content tab-content">
                <div v-for="(tab, index) in tabs" :key="index" :id="'tab-' + (index + 1)" role="tabpanel"
                     :class="{ 'tab-pane': true, 'show': index === activeTab, 'active': index === activeTab }"
                     class="animated fadeInUp">
                  <div class="about-one__content">
                    <p class="about-one__text">{{ tab.content }}</p>

                    <ul class="about-one__list list-unstyled ">

                      <li v-for="(item, idx) in tab.items" :key="idx" class="about-one__list-item ">{{ item }}</li>

                    </ul>

                    <a :href="tab.link" class="thm-btn about-one__btn">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="image-container2 wow fadeInRight img-fluid">
              <img style="width: 100%;" src="/images/it-solut.jpg">
            </div>


          </div>
        </div>
        <hr style="margin-top: 140px;">
      </div>



    </section>
  </div>

</template>

<script>

</script>

<style scoped>
.image-container2 {
  padding-top: 125px;
  position: relative;
  display: inline-block; /* Ensure container wraps around the image */
}

.image-container2::before {
  content: '';
  position: absolute !important;
  width: 63%;
  height: 83%;
  /* Adjust size of dot or circle */
  background-image: url(http://el.commonsupport.com/newwp/intech/wp-content/themes/intech/assets/images/resources/dot-pattern.png);
  z-index: 10 !important; /* Ensure it is above the image */
  /* top: 0; */
  right: 0 !important;
  -webkit-transform: translateX(40%) translateY(-20%) !important;
  transform: translateX(40%) translateY(-20%) !important;
  background-repeat: repeat !important;
  background-position: 0 0 !important;
  opacity: 0.2 !important;
}
@media (max-width: 1120px) {
  .image-container2 {
    padding-top: 50px; /* adjust padding for smaller screens */
  }
  .image-container2::before {
    width: 40%; /* adjust width of dot or circle for smaller screens */
    height: 60%; /* adjust height of dot or circle for smaller screens */
  }
}
@media (max-width: 576px) {
  .image-container2 {
    padding-top: 50px; /* adjust padding for smaller screens */
  }
  .image-container2::before {
    width: 10%; /* adjust width of dot or circle for smaller screens */
    height: 60%; /* adjust height of dot or circle for smaller screens */
  }
}
</style>

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
      isHovered1: false,
      isHovered2: false,
      isHovered3: false,
      activeTab: 0, // Index of the active tab, starting with 0
      tabs: [
        {
          title: 'Our Mission1',

          content: ' At Codewire Sulotions, our mission is to empower businesses through ' +
            '  innovative software solutions. We are dedicated to delivering cutting-edge' +
            ' technology and exceptional service, driving digital transformation, enhancing' +
            'operational efficiency, and fostering growth. Our commitment is to provide'+
          'reliable, scalable, and user-centric software tailored to meet our clients',
          items: ['UI/UX Design','      Digital Transformation', 'Quality Assurance & Testing',
            ' DevOps Solutions & Services', ' Web Application Development',
            'Mobile Application Development', ],
          link: 'http://el.commonsupport.com/newwp/intech/about-one/'
        },
        {
          title: 'Our Vision2',


          content: 'Our vision is to be a global leader in software innovation, creating transformative solutions that' +
            ' drive progress and efficiency. We aim to harness cutting-edge technology and a customer-centric ' +
            ' approach to empower businesses, foster growth, and shape the future of digital transformation.',
          items: ['UI/UX Design','      Digital Transformation', 'Quality Assurance & Testing',
            ' DevOps Solutions & Services', ' Web Application Development',
            'Mobile Application Development', ],
          link: 'http://el.commonsupport.com/newwp/intech/about-one/'
        },
        {
          title: 'Awards Win3',

          content: 'Our software company is honored to receive prestigious awards recognizing excellence in innovation, ' +
            ' quality, and customer service. These accolades reflect our commitment to delivering outstanding ' +
            ' solutions and our dedication to advancing technology. We are grateful for the recognition and inspired' +
            'to continue exceeding industry standards.',
          items: ['UI/UX Design','      Digital Transformation', 'Quality Assurance & Testing',
            ' DevOps Solutions & Services', ' Web Application Development',
            'Mobile Application Development', ],
          link: 'http://el.commonsupport.com/newwp/intech/about-one/'
        }

      ]
    }

  },




  computed: {
    textClass() {
      return this.isHovered1 ? 'hover-color1' : 'default-color1'
    },
    textcClass() {
      return this.isHovered2 ? 'hover-color2' : 'default-color2'
    },

    textPClass() {
      return this.isHovered3 ? 'hover-color3' : 'default-color3'
    }
  },
  methods: {
    changeColor1() {
      this.isHovered1 = true
    },
    defaultcolor1() {
      this.isHovered1 = false
    },
    changeColor2() {
      this.isHovered2 = true
    },
    defaultcolor2() {
      this.isHovered2 = false
    },
    changeColor3() {
      this.isHovered3 = true
    },
    defaultcolor3() {
      this.isHovered3 = false
    }
  }
}


</script>