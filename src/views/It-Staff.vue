<template>
  <section id="it-services">
    <div class="container">
      <div class="block-title text-center">
        <h2 class="block-service">
          World Best IT-Services We Provide
          <span class="border-span"></span>
        </h2>
      </div>
      <div class="row d-flex">
        <div v-for="(service, index) in services" :key="index" class="col-lg-4 col-sm-12 d-flex">
          <div
            class="hvr-bounce-to-bottom design-up best-it icon-book card-equal-height"
            :class="{ [`hover-color${index + 1}`]: hovered[index] }"
            @mouseover="hovered[index] = true"
            @mouseout="hovered[index] = false"
          >
            <i :class="`text-class${index + 1}`" style="color: #5538f4">
              <font-awesome-icon :icon="service.icon" />
            </i>
            <h3 class="service-one" :class="`text-class${index + 1}`">
              {{ service.title }}
            </h3>
            <p :class="`text-class${index + 1}`">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'ItServices',
  data() {
    return {
      hovered: [false, false, false, false, false, false],
      services: [
        {
          icon: 'users-gear',
          title: 'Web Application Development',
          description:
            'Web application development involves creating dynamic, interactive online applications tailored to user needs.',
        },
        {
          icon: 'mobile-screen-button',
          title: 'Mobile Application Development',
          description:
            'Mobile app development involves designing and building custom apps for iOS and Android platforms.',
        },
        {
          icon: 'gears',
          title: 'DevOps Solutions & Services',
          description:
            'DevOps solutions and services streamline development deployment and operations for faster, more efficient software delivery.',
        },
        {
          icon: 'building-wheat',
          title: 'UI/UX Design',
          description:
            'UI/UX design focuses on creating intuitive, engaging interfaces for optimal user experiences.',
        },
        {
          icon: 'globe',
          title: 'Digital Transformation',
          description:
            'Digital transformation uses technology to modernize processes, boosting efficiency, agility, and customer experience.',
        },
        {
          icon: 'circle-check',
          title: 'Quality Assurance & Testing',
          description:
            'Quality assurance and testing ensure products meet standards, providing reliability and performance.',
        },
      ],
    };
  },
  computed: {
    textClasses() {
      return this.hovered.map((isHovered, index) => ({
        [`text-class${index + 1}`]: isHovered ? `hover-color${index + 1}` : `default-color${index + 1}`,
      }));
    },
  },
};
</script>

<style scoped>
#it-services .container {
  padding: 20px;
}

.block-title {
  margin-bottom: 40px;
}

.block-service {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  padding-bottom: 55px;
  position: relative;
}

.border-span {
  display: block;
  width: 60px;
  height: 4px;
  background: #5538f4;
  margin: 10px auto 0;
}

.row.d-flex {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col-lg-4.col-sm-12 {
  display: flex;
  padding: 0 15px;
}

.card-equal-height {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 350px;
  padding: 60px;
  box-sizing: border-box;
  background-color: #ffffff;
  text-align: center;
  margin-bottom: 25px;
  transition: all 0.4s ease;
}

.card-equal-height i {
  font-size: 2rem;
  margin-bottom: 15px;
  color: #5538f4;
}

.card-equal-height h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: black;
}

.card-equal-height p {
  font-size: 14px;
  color: #888888;
  flex-grow: 1;
  margin-bottom: 0;
}

.design-up {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  position: relative;
  text-align: center;
  padding: 74px 55px;
  margin-bottom: 25px;
  transition: all 0.4s ease;
}

.hvr-bounce-to-bottom {
  position: relative;
  transition-property: color;
  transition-duration: 0.5s;
}

.hvr-bounce-to-bottom:before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #5538f4;
  transform: scaleY(0);
  transform-origin: 50% 0;
  transition-property: transform;
  transition-duration: 0.5s;
  transition-timing-function: ease-out;
}

.hvr-bounce-to-bottom:hover:before,
.hvr-bounce-to-bottom:focus:before,
.hvr-bounce-to-bottom:active:before {
  transform: scaleY(1);
  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
}

.hvr-bounce-to-bottom:hover h3,
.hvr-bounce-to-bottom:hover p,
.hvr-bounce-to-bottom:hover i {
  color: white !important;
}

.hover-color1,
.hover-color2,
.hover-color3,
.hover-color4,
.hover-color5,
.hover-color6 {
  color: white !important;
}

@media only screen and (max-width: 992px) {
  .design-up {
    margin-bottom: 50px;
  }
}
</style>