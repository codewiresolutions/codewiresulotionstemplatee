<template>
 <section id="best-expert">
  <div class="container">
    <div class="row" style="padding-top: 128px;">
      <div class="col-lg-4 col-md-6 col-sm-12 hover-it">

          <div class="team-one__block">
            <div class="block-title">
              <h2 class="block-title__title">Meet with our <br>best experts</h2><!-- /.block-title__title -->

              <p class="block-title__text">Meet with our top experts who offer <br>
                personalized advice, cutting-edge <br>
                solutions, and unparalleled support   <br>
                to drive your success.</p><!-- /.block-title__text -->

              <a href="http://el.commonsupport.com/newwp/intech/team-page/" class="thm-btn team-one__block-btn">Join Us</a><!-- /.thm-btn -->
            </div><!-- /.block-title -->
          </div><!-- /.tea4-one__block -->

      </div>
    <div class="col-lg-4 col-md-6 col-sm-12 hover-it" style="text-align: center">
      <div class="team-one__single wow fadeInUp" :data-wow-duration="wowDuration" :data-wow-delay="wowDelay">
        <div class="team-one__image "
             style=" background-image: url('/images/javediqbal.jpeg');"
             @mouseover="changeImageBackground(true,'jose')" @mouseleave="changeImageBackground(false,'jose')">
          <div class="overlay"></div>
          <div class="team-one__social" v-if="isJosIcons">
            <a href="https://www.linkedin.com/in/javed-iqbal-5b7294243/" class="icon-style" target="_blank">
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </a>
            <a href="https://www.linkedin.com/in/javed-iqbal-5b7294243/" class="icon-style" target="_blank">
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>
            <a href="https://www.linkedin.com/in/javed-iqbal-5b7294243/" class="icon-style" target="_blank">
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </a>
            <a href="https://www.linkedin.com/in/javed-iqbal-5b7294243/" class="icon-style" target="_blank">
              <font-awesome-icon :icon="['fab', 'vimeo-v']" />
            </a>

          </div>
        </div>
        <div class="team-one__content ">
          <h3 class="team-one__title">Javed Iqbal</h3>
          <div class="team-one__designation">CO-FOUNDER</div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-12 hover-it">
      <div class="team-one__single wow fadeInUp" :data-wow-duration="wowDuration" :data-wow-delay="wowDelay">
        <div class="team-one__image "
             style="background-image: url('/images/qasimjaved.jpg');"
             @mouseover="changeImageBackground(true,'nadeem')" @mouseleave="changeImageBackground(false,'nadeem')">
          <div class="overlay"></div>
          <div class="team-one__social" v-if="isNadeemIcons">
            <a href="https://www.facebook.com/" class="icon-style"> <font-awesome-icon :icon="['fab', 'facebook']" /></a>
            <a href="https://www.linkedin.com/" class="icon-style"> <font-awesome-icon :icon="['fab', 'linkedin']" /></a>
            <a href="https://twitter.com/" class="icon-style">    <font-awesome-icon :icon="['fab', 'twitter']" /></a>
            <a href="https://vimeo.com/" class="icon-style"> <font-awesome-icon :icon="['fab', 'vimeo-v']" /></a>
          </div>
        </div>
        <div class="team-one__content ">
          <h3 class="team-one__title">{{ 'Qasim Javed' }}</h3>
          <div class="team-one__designation">{{ 'CO-FOUNDER' }}</div>
        </div>
      </div>
    </div>

    </div>
    <div class="row" style="padding-top: 110px;">
      <div class="col-lg-4 col-md-6 col-sm-12 hover-it">
        <div class="team-one__single wow fadeInUp" :data-wow-duration="wowDuration" :data-wow-delay="wowDelay">
          <div class="team-one__image "
               style="background-image: url('/images/mujahid.jpg');"
               @mouseover="changeImageBackground(true,'Martin')" @mouseleave="changeImageBackground(false,'Martin')">
            <div class="overlay"></div>
            <div class="team-one__social" v-if="isMartinIcons">
              <a href="https://www.facebook.com/" class="icon-style"> <font-awesome-icon :icon="['fab', 'facebook']" /></a>
              <a href="https://www.linkedin.com/" class="icon-style"> <font-awesome-icon :icon="['fab', 'linkedin']" /></a>
              <a href="https://twitter.com/" class="icon-style">    <font-awesome-icon :icon="['fab', 'twitter']" /></a>
              <a href="https://vimeo.com/" class="icon-style"> <font-awesome-icon :icon="['fab', 'vimeo-v']" /></a>
            </div>
          </div>
          <div class="team-one__content ">
            <h3 class="team-one__title">Muhammad Mujahid</h3>
            <div class="team-one__designation">Associate Engineer</div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 hover-it">
        <div class="team-one__single wow fadeInUp" :data-wow-duration="wowDuration" :data-wow-delay="wowDelay">
          <div style="background-image: url('/images/mbashar.jpg');"
               class="team-one__image "
               @mouseover="changeImageBackground(true,'Benson')" @mouseleave="changeImageBackground(false,'Benson')">
            <div class="overlay"></div>
            <div class="team-one__social" v-if="isBensonIcons">
              <a href="https://www.facebook.com/" class="icon-style"> <font-awesome-icon :icon="['fab', 'facebook']" /></a>
              <a href="https://www.linkedin.com/" class="icon-style"> <font-awesome-icon :icon="['fab', 'linkedin']" /></a>
              <a href="https://twitter.com/" class="icon-style">    <font-awesome-icon :icon="['fab', 'twitter']" /></a>
              <a href="https://vimeo.com/" class="icon-style"> <font-awesome-icon :icon="['fab', 'vimeo-v']" /></a>
            </div>
          </div>
          <div class="team-one__content ">
            <h3 class="team-one__title">Mubashar Shahzad</h3>
            <div class="team-one__designation">Front End Developer</div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 hover-it">
        <div class="team-one__single wow fadeInUp" :data-wow-duration="wowDuration" :data-wow-delay="wowDelay">
          <div class="team-one__image "
               style="background-image: url('/images/mnadeem.jpg');"
               @mouseover="changeImageBackground(true,'Mable')" @mouseleave="changeImageBackground(false,'Mable')">
            <div class="overlay"></div>
            <div class="team-one__social" v-if="isMableIcons">
              <a href="https://www.facebook.com/" class="icon-style"><font-awesome-icon :icon="['fab', 'facebook']"/> </a>
              <a href="https://www.linkedin.com/" class="icon-style"> <font-awesome-icon :icon="['fab', 'linkedin']" /></a>
              <a href="https://twitter.com/" class="icon-style">    <font-awesome-icon :icon="['fab', 'twitter']" /></a>
              <a href="https://vimeo.com/" class="icon-style"> <font-awesome-icon :icon="['fab', 'vimeo-v']" /></a>
            </div>
          </div>
          <div class="team-one__content ">
            <h3 class="team-one__title">{{ 'Hafiz M Nadeem' }}</h3>
            <div class="team-one__designation">{{ 'Front End Developer' }}</div>
          </div>
        </div>
      </div>

    </div>
  </div>
 </section>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    // Reactive data
    const wowDuration = ref('1500ms')
    const wowDelay = ref('500ms')
    const imageSrc = ref('http://el.commonsupport.com/newwp/intech/wp-content/uploads/2021/03/team-1-1.jpg')
    const altText = ref('Team Member Image')
    const imageWidth = ref('300')
    const imageHeight = ref('300')
    const imageSrcset = ref('(link unavailable) 300w, (link unavailable) 150w, (link unavailable) 270w')
    const imageSizes = ref('(max-width: 300px) 100vw, 300px')
    const linkedinLink = ref('(link unavailable)')
    const twitterLink = ref('(link unavailable)')
    const vimeoLink = ref('(link unavailable)')
    const name = ref('Jose Day')
    const role = ref('Co-Founder')
    const isJosIcons = ref(false);
    const isNadeemIcons = ref(false);
    const isMartinIcons = ref(false);
    const isBensonIcons = ref(false);
    const isMableIcons = ref(false);
    // Methods


    const changeImageBackground = (shouldHighlight,nameData) => {



      console.log(shouldHighlight,nameData);
      const teamImage = document.querySelector('.team-one__image')
      if (shouldHighlight) {
        if(nameData == 'jose')
        {
          isJosIcons.value = true;
        }
        if(nameData == 'nadeem')
        {
          isNadeemIcons.value = true;
        }
        if(nameData == 'Martin')

          {
            isMartinIcons.value = true;
          }
        if(nameData == 'Benson')

        {
          isBensonIcons.value = true;
        }
        if(nameData == 'Mable')

        {
          isMableIcons.value = true;
        }

        teamImage.style.backgroundColor = 'rgba(0, 123, 255, 0.5)' // Semi-transparent blue background
      } else {
        if(nameData == 'jose')
        {
          isJosIcons.value = false;
        }
        if(nameData == 'nadeem')
        {
          isNadeemIcons.value = false;
        }
        if(nameData == 'Martin')
        {
          isMartinIcons.value = false;
        }
        if(nameData == 'Benson')
        {
          isBensonIcons.value = false;
        }
        if(nameData == 'Mable')
        {
          isMableIcons.value = false;
        }

        teamImage.style.backgroundColor = 'transparent' // Reset to transparent on mouse leave
      }
    }

    return {
      wowDuration,
      wowDelay,
      imageSrc,
      altText,
      imageWidth,
      imageHeight,
      imageSrcset,
      imageSizes,
      linkedinLink,
      twitterLink,
      vimeoLink,
      name,
      role,
      changeImageBackground,
      isJosIcons,
      isNadeemIcons,
      isMartinIcons,
      isBensonIcons,
      isMableIcons,

    }

  }
}
</script>

<style scoped>



.team-one__social {
  display: flex;
  justify-content: center; /* Center icons horizontally */
  align-items: center; /* Center icons vertically */
  position: absolute;
  bottom: 120px; /* Adjust as needed */
  left: 50%; /* Center horizontally within parent */
  transform: translateX(-50%); /* Center horizontally within parent */
  color: #FFFFFF;
  padding: 10px; /* Adjust padding as needed */
  border-radius: 50%; /* Make the container round or adjust as per design */
}
.icon-style{
  color: white;
  font-size: 24px;
  margin-right: 20px;
  margin-left: 10px;
}
.team-one__social font-awesome-icon {
  margin: 0 5px; /* Adjust icon spacing */
  font-size: 20px; /* Adjust icon size as needed */
  color: #333; /* Icon color */
}


.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: blue;
}

.hover-it:hover .overlay {
  opacity: 0.5;
}

.rotate-vert-center:hover {
  -webkit-animation: rotate-vert-center 2s cubic-bezier(0.455, 0.030, 0.515, 0.955) 0.5 both;
  animation: rotate-vert-center 2s cubic-bezier(0.455, 0.030, 0.515, 0.955) 0.5 both;
}

@keyframes rotate-vert-center {
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(360deg);
  }
}

.hover-it {
 padding-top: 12px; /* Transition for smooth color change */
}

.team-one__social a i {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  transition: color 0.3s ease;
  display: inline-block; /* Ensure icons are block-level elements */
}

.team-one__social a i:hover {
  background-color: black !important;
  color: #ff9900 !important;
  animation-play-state: paused; /* Pause animation on hover */
}

.team-one__image {
  justify-content: center; /* Center icons horizontally */
  align-items: center !important;
  margin-left: 30px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden; /* Ensure the image does not overflow when rounded */
  position: relative; /* Needed for absolute positioning of social icons */
}

@media only screen and (max-width: 360px) {
  .team-one__image{
    justify-content: center; /* Center icons horizontally */
    align-items: center !important;

    margin-left: 30px;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    overflow: hidden; /* Ensure the image does not overflow when rounded */
    position: relative;
  }
}
.team-one__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.team-one__content {
  text-align: center;
  margin-top: 10px;
}

.team-one__title {
  margin: 0;
  font-size: 24px;
  color: #333;
}

.team-one__designation {
  color: #666;
  font-size: 16px;
}
.block-title__title{
  margin: 0;
  color: #2D2C2C;
  font-family: var(--heading-font);
  font-weight: 600;
  font-size: 40px;
  line-height: 50px;
}
.block-title__text{
  font-family: var(--thm-font);
  color: #959595;
  font-size: 15px;
  line-height: 26px;
}

.team-one__block-btn {
  border: none;
  outline: none;
  background-color: #20DFE3;
  display: inline-block;
  vertical-align: middle;
  font-size: 17px;
  text-decoration: none !important;
  font-weight: 600;
  color: #fff;
  padding: 14.5px 39.5px;
  transition: background-color .4s ease, color .3s ease;
}

@media only screen and (max-width: 440px) {
  .team-one__block-btn {
    display: block; /* Ensures full width on smaller screens */
    margin: 0 auto; /* Centers the button horizontally */
    text-align: center; /* Centers the button text within the button */
  }
}

.team-one__block-btn:hover{
  background-color: #212529;
  color: #FFFFFF;
}
</style>
