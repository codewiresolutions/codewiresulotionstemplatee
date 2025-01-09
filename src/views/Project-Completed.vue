<template>
 <div id="project" style="background-image: url('/images/project-1-1-bg.jpg');
 margin-top: 50px !important;  ">
  <div class="container-fluid ">
    <div class="project-title text-center">
      <h2 class="project-title__title">Hundreds of projects completed <br>in 20 countries</h2>
    </div>
    <ul class="project-filter text-center project-unstyled">
      <li class="active-all" data-filter=".filter-item"><span>All</span></li>
      <li class="web-development"><span>Web Development</span></li>
      <li class="web-development"><span>Design</span></li>
      <li class="web-development"><span>Illustration</span></li>
      <li class="web-development"><span>Photography</span></li>
    </ul>
    <div class="row project-image">
      <div class="col-lg-3 col-md-6 col-sm-12 padding-image">
        <a href="#" class="hvr-bounce-to-top image-container1 img-fluid icon-container" @mouseover="isHovered1 = true" @mouseleave="isHovered1 = false">
          <font-awesome-icon :icon="['fab', 'facebook']" class="icon-style" :class="{ 'hovered': isHovered1 }" />
        </a>
        <span class="image-title">Virtual Integration</span>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 padding-image">
        <a href="#" class="hvr-bounce-to-top image-container22 img-fluid icon-container" @mouseover="isHovered2 = true" @mouseleave="isHovered2 = false">
          <font-awesome-icon :icon="['fab', 'twitter']" class="icon-style" :class="{ 'hovered': isHovered2 }" />
        </a>
        <span class="image-title">Managed IT</span>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 padding-image">
        <a href="#" class="hvr-bounce-to-top image-container3 img-fluid icon-container" @mouseover="isHovered3 = true" @mouseleave="isHovered3 = false">
          <font-awesome-icon :icon="['fab', 'instagram']" class="icon-style" :class="{ 'hovered': isHovered3 }" />
        </a>
        <span class="image-title">Multi Function</span>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 padding-image">
        <a href="#" class="hvr-bounce-to-top image-container4 img-fluid icon-container" @mouseover="isHovered4 = true" @mouseleave="isHovered4 = false">
          <font-awesome-icon :icon="['fab', 'linkedin']" class="icon-style" :class="{ 'hovered': isHovered4 }" />
        </a>
        <span class="image-title">Cyber Security</span>
      </div>
      <div class="project-one__bottom text-center">
        <a href="http://el.commonsupport.com/newwp/intech/case-study-one/" class="thm-btn project-one__more-btn">All Projects</a><!-- /.thm-btn -->
      </div>
    </div>
    <hr class="bookhr-line">
  </div>
 </div>
</template>

<script>
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

export default {
  components: {
    FontAwesomeIcon
  },
  setup() {
    const isHovered1 = ref(false);
    const isHovered2 = ref(false);
    const isHovered3 = ref(false);
    const isHovered4 = ref(false);

    return {
      isHovered1,
      isHovered2,
      isHovered3,
      isHovered4
    };
  },
};
</script>


<style scoped>
/* Global styles (if needed) */
body {
  background: #333;

}
.project-title{
  padding-top: 117px;
  margin-bottom: 50px;
}
.project-title__title{
  margin: 0;
  color: #2D2C2C;
  font-family: var(--heading-font);
  font-weight: 600;
  font-size: 40px;
  line-height: 50px;
}
@media only screen and (max-width: 360px){
  .project-title__title{
    font-weight: 600;
    font-size: 30px;
    line-height: 40px;
  }
}

.project-filter{
  flex-wrap: wrap;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 60px;

}
.project-image{
  padding-left: 38px;
  padding-right: 36px;
}
@media only screen and (max-width: 360px){
  .project-image{
    padding-left: 0px;
    padding-right: 0px;
  }
}
.padding-image{
  padding-right: 24px !important;
  padding-left: 24px !important;

}

.project-unstyled{
  padding-left: 0;
  list-style: none;
}
.active-all{
  font-weight: 500;
  color: #684EF4;
}
.web-development{
  margin-left: 30px;
  color: #989899;
  font-weight: 500;
}
.web-development:hover{
  color: #684EF4;
}

.icon-container {
  display: block; /* Ensures the link takes up the entire container */
  position: relative; /* Enables positioning of the icon */
  margin-bottom: 16px;
}

.icon-style {
  padding-left: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 8px;
  margin-left: 50px;
  align-items: center !important;
  font-size: 30px;
  transition: color 0.3s ease; /* Smooth transition for color change */

  /* Initial color */
  color: transparent; /* Adjust as per your icon color */
}

.icon-style.hovered {
  color: white; /* Color change on hover */
  background-color: #684EF4; /* Background color on hover */
   /* Makes the background circle */
 background-size: auto /* Adjust padding as needed */
}

.image-container1{
  background-size: cover; /* Cover the entire container */
  background-position: center; /* Center the background image */
  height: 82% !important; /* Ensure the container takes full height */
  background-image: url("/images/project-1-1.jpg");

}
.image-container22{
  background-size: cover; /* Cover the entire container */
  background-position: center; /* Center the background image */
  height: 82% !important; /* Ensure the container takes full height */
  background-image: url("/images/project-1-2.jpg");
}
.image-container3 {
  background-image: url("/images/social.jpg");
  background-size: cover; /* Cover the entire container */
  background-position: center; /* Center the background image */
  height: 82% !important; /* Ensure the container takes full height */
}
.image-container4{
  background-size: cover; /* Cover the entire container */
  background-position: center; /* Center the background image */
  height: 82% !important; /* Ensure the container takes full height */
  background-image: url("/images/socail2.jpg");
}
/* Link styles */
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
.image-title{
  font-size: 22px;
  color: #2D2C2C;
  font-weight: 600;
  margin-top: 50px;
}
.image-title:hover{
  color: #20DFE3;
}
.project-one__bottom{
  margin-top: 70px;
}
</style>
