<template>
  <div>
    <section id="it-solutions" class="it-solutions">
      <div class="container container-it">
        <div class="row">
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
                    :class="[
                      'nav-link',
                      'about-one__tab-title-link',
                      { active: index === activeTab }
                    ]"
                    @click="activeTab = index"
                    href="javascript:void(0)"
                    role="tab"
                  >
                    {{ tab.title }}
                  </a>
                </li>
              </ul>

              <div class="about-one__tab-content tab-content">
                <div v-for="(tab, index) in tabs" :key="index" :id="'tab-' + (index + 1)" role="tabpanel"
                     :class="[
                       'tab-pane',
                       { 'show': index === activeTab, 'active': index === activeTab }
                     ]"
                     class="animated fadeInUp"
                >
                  <div class="about-one__content">
                    <p class="about-one__text">{{ tab.content }}</p>

                    <ul class="about-one__list list-unstyled">
                      <li v-for="(item, idx) in tab.items" :key="idx" class="about-one__list-item">
                        {{ item }}
                      </li>
                    </ul>

                    <a :href="tab.link" class="thm-btn about-one__btn">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="image-container2 wow fadeInRight img-fluid">
              <img style="width: 100%;" src="/images/it-solut.jpg" />
            </div>
          </div>
        </div>
        <hr style="margin-top: 140px;" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0, // Index of the active tab, starting with 0
      tabs: [
        {
          title: 'Our Mission',
          content:
            'At Codewire Solutions, our mission is to empower businesses through innovative software solutions. We are dedicated to delivering cutting-edge technology and exceptional service, driving digital transformation, enhancing operational efficiency, and fostering growth. Our commitment is to provide reliable, scalable, and user-centric software tailored to meet our clients.',
          items: [
            'UI/UX Design',
            'Digital Transformation',
            'Quality Assurance & Testing',
            'DevOps Solutions & Services',
            'Web Application Development',
            'Mobile Application Development'
          ],
          link: '#'
        },
        {
          title: 'Our Vision',
          content:
            'Our vision is to be a global leader in software innovation, creating transformative solutions that drive progress and efficiency. We aim to harness cutting-edge technology and a customer-centric approach to empower businesses, foster growth, and shape the future of digital transformation.',
          items: [
            'UI/UX Design',
            'Digital Transformation',
            'Quality Assurance & Testing',
            'DevOps Solutions & Services',
            'Web Application Development',
            'Mobile Application Development'
          ],
          link: '#'
        },
        {
          title: 'Awards Win',
          content:
            'Our software company is honored to receive prestigious awards recognizing excellence in innovation, quality, and customer service. These accolades reflect our commitment to delivering outstanding solutions and our dedication to advancing technology. We are grateful for the recognition and inspired to continue exceeding industry standards.',
          items: [
            'UI/UX Design',
            'Digital Transformation',
            'Quality Assurance & Testing',
            'DevOps Solutions & Services',
            'Web Application Development',
            'Mobile Application Development'
          ],
          link: '#'
        }
      ]
    };
  },
};
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
