<template>
  <div id="project" style="background-image: url('/images/project-1-1-bg.jpg'); ">
    <div class="container-fluid">
      <div class="project-title text-center">
        <h2 class="project-title__title">Hundreds of projects completed <br>in 20 countries</h2>
      </div>
      <carousel
        :items-to-show="itemsToShow"
        :wrap-around="true"
        :autoplay="3000"
        :transition="500"
        class="project-carousel"
      >
        <slide v-for="(project, index) in projects" :key="index">
          <div class="carousel-slide">
            <a
              :href="project.url"
              class="hvr-bounce-to-top img-fluid icon-container"
              :class="project.imageClass"
              @mouseover="setHover(index, true)"
              @mouseleave="setHover(index, false)"
            >
              <div class="social-icons" :class="{ 'visible': project.isHovered }">
                <a
                  v-for="(social, socialIndex) in project.socials"
                  :key="socialIndex"
                  :href="social.url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <font-awesome-icon :icon="['fab', social.icon]" class="icon-style" />
                </a>
              </div>
            </a>
            <span class="image-title">{{ project.title }}</span>
          </div>
        </slide>
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
      <div class="project-one__bottom text-center">
        <router-link to="/all-projects" class="thm-btn project-one__more-btn">All Projects</router-link>
      </div>
      <hr class="bookhr-line">
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted, onUnmounted } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  components: {
    FontAwesomeIcon,
    Carousel,
    Slide,
    Navigation,
    Pagination
  },
  setup() {
    const socials = [
      { name: 'facebook', url: 'https://www.facebook.com/people/Code-Wire/pfbid0d7YVZxZdRJZMLhPWQemk7bsHvEYvtXLVW9qPbiwLrDDaHvUQQNd9xRBqzxcKwgZcl/', icon: 'facebook' },
      { name: 'instagram', url: 'https://www.instagram.com/codewiresolutions/', icon: 'instagram' },
      { name: 'linkedin', url: 'https://www.linkedin.com/company/86640723/admin/dashboard/', icon: 'linkedin' }
    ];

    const projects = reactive([
      {
        // url: '#',
        title: 'Virtual Integration',
        imageClass: 'image-container1',
        socials: socials.map(social => ({ ...social })),
        isHovered: false,
        description: 'A cutting-edge solution for seamless virtual infrastructure integration, enhancing operational efficiency across global networks.'
      },
      {
        // url: '#',
        title: 'Managed IT',
        imageClass: 'image-container22',
        socials: socials.map(social => ({ ...social })),
        isHovered: false,
        description: 'Comprehensive IT management services that optimize performance and reduce downtime for businesses of all sizes.'
      },
      {
        // url: '#',
        title: 'Multi Function',
        imageClass: 'image-container3',
        socials: socials.map(social => ({ ...social })),
        isHovered: false,
        description: 'Versatile systems designed to handle multiple operational functions, streamlining processes and boosting productivity.'
      },
      {
        // url: '#',
        title: 'Cyber Security',
        imageClass: 'image-container4',
        socials: socials.map(social => ({ ...social })),
        isHovered: false,
        description: 'Robust security solutions protecting against cyber threats, ensuring data integrity and business continuity.'
      }
    ]);

    const setHover = (index, state) => {
      projects[index].isHovered = state;
    };

    const itemsToShow = ref(window.innerWidth < 768 ? 1 : 3);

    const updateItemsToShow = () => {
      itemsToShow.value = window.innerWidth < 768 ? 1 : 3;
    };

    onMounted(() => {
      window.addEventListener('resize', updateItemsToShow);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', updateItemsToShow);
    });

    return {
      projects,
      setHover,
      itemsToShow
    };
  },
};
</script>

<style scoped>
body {
  background: #333;
}
.project-title {
  padding-top: 117px;
  margin-bottom: 50px;
}
.project-title__title {
  margin: 0;
  color: #2D2C2C;
  font-family: var(--heading-font);
  font-weight: 600;
  font-size: 40px;
  line-height: 50px;
}
@media only screen and (max-width: 360px) {
  .project-title__title {
    font-weight: 600;
    font-size: 30px;
    line-height: 40px;
  }
}
.project-carousel {
  padding: 0 0;
}
@media only screen and (max-width: 360px) {
  .project-carousel {
    padding: 0;
  }
}
.carousel-slide {
  padding: 0 24px;
  text-align: center;
}
.icon-container {
  display: block;
  position: relative;
  margin-bottom: 16px;
}
.social-icons {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.social-icons.visible {
  opacity: 1;
}
.icon-style {
  padding: 8px;
  font-size: 24px;
  color: white;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}
.image-container1 {
  background-size: cover;
  background-position: center;
  height: 380px !important;
  width: 350px !important;
  background-image: url("/images/project-1-1.jpg");
}
.image-container22 {
  background-size: cover;
  background-position: center;
  height: 380px !important;
  width: 350px !important;
  background-image: url("/images/project-1-2.jpg");
}
.image-container3 {
  background-size: cover;
  background-position: center;
  height: 380px !important;
  width: 350px !important;
  background-image: url("/images/social.jpg");
}
.image-container4 {
  background-size: cover;
  background-position: center;
  height: 380px !important;
  width: 350px !important;
  background-image: url("/images/socail2.jpg");
}
@media only screen and (max-width: 768px) {
  .image-container1,
  .image-container22,
  .image-container3,
  .image-container4 {
    width: 100% !important;
    height: 417px !important;
  }
}
.hvr-bounce-to-top {
  font-family: Avenir;
  text-transform: uppercase;
  color: transparent;
  opacity: 1;
  width: 100%;
  height: 100%;
  background-size: cover;
  text-decoration: none;
  padding: 150px 70px;
  display: inline-block;
  position: relative;
  overflow: hidden;
}
.hvr-bounce-to-top:before {
  content: "";
  position: absolute;
  background: rgba(0, 0, 0, 0.5) !important;
  bottom: 0;
  left: 0;
  right: 0;
  top: 100%;
  transition: top 0.3s ease;
}
.hvr-bounce-to-top:hover:before {
  top: 0;
}
.hvr-bounce-to-top:hover,
.hvr-bounce-to-top:focus,
.hvr-bounce-to-top:active {
  color: white;
}
.image-title {
  font-size: 22px;
  color: #2D2C2C;
  font-weight: 600;
  margin-top: 20px;
  display: block;
}
.image-title:hover {
  color: #20DFE3;
}
.project-one__bottom {
  margin-top: 70px;
}
.carousel__pagination {
  margin-top: 20px;
}
.carousel__prev,
.carousel__next {
  background-color: #684EF4;
  color: white;
  border-radius: 50%;
}
.carousel__prev:hover,
.carousel__next:hover {
  background-color: #20DFE3;
}
</style>