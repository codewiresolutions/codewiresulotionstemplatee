<template>
  <section id="best-expert">
    <div class="container">
      <div class="row" style="padding-top: 128px;">
        <div class="col-lg-4 col-md-6 col-sm-12 hover-it">
          <div class="team-one__block">
            <div class="block-title">
              <h2 class="block-title__title">Meet with our <br>best experts</h2>
              <p class="block-title__text">
                Meet with our top experts who offer <br> personalized advice, cutting-edge <br> solutions, and unparalleled support <br> to drive your success.
              </p>
              <a href="" class="thm-btn team-one__block-btn">Join Us</a>
            </div>
          </div>
        </div>

        <!-- Expert Cards -->
        <div v-for="(expert, index) in experts" :key="index" class="col-xl-4 col-lg-4 col-md-6 col-sm-12"
             style="text-align: center; margin-bottom: 32px;">
          <div class="team-one__single wow fadeInUp" :data-wow-duration="wowDuration" :data-wow-delay="wowDelay">
            <div class="team-one__image hover-it"
                 :style="{ backgroundImage: 'url(' + expert.image + ')', backgroundColor: expert.isHovered ? 'rgba(0, 123, 255, 0.5)' : 'transparent' }"
                 @mouseover="handleHover(true, expert.name)"
                 @mouseleave="handleHover(false, expert.name)">
              <div class="overlay"></div>
              <div class="team-one__social" v-if="expert.isHovered">
                <a v-for="(icon, idx) in expert.socialLinks" :key="idx" :href="icon.url" class="icon-style" target="_blank">
                  <font-awesome-icon :icon="['fab', icon.name]" />
                </a>
              </div>
            </div>
            <div class="team-one__content">
              <h3 class="team-one__title">{{ expert.name }}</h3>
              <div class="team-one__designation">{{ expert.designation }}</div>
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

    // Expert information
    const experts = ref([
      {
        name: 'Javed Iqbal',
        designation: 'FOUNDER/Architect Software Engineer ',
        image: '/images/javediqbal.jpeg',
        isHovered: false,
        socialLinks: [
          { name: 'facebook', url: 'https://www.linkedin.com/in/javed-iqbal-5b7294243/' },
          { name: 'linkedin', url: 'https://www.linkedin.com/in/javed-iqbal-5b7294243/' },
          { name: 'twitter', url: 'https://www.linkedin.com/in/javed-iqbal-5b7294243/' },
          { name: 'vimeo-v', url: 'https://www.linkedin.com/in/javed-iqbal-5b7294243/' }
        ]
      },
      {
        name: 'Qasim Javed',
        designation: 'Senior backend developer',
        image: '/images/qasimjaved.jpg',
        isHovered: false,
        socialLinks: [
          { name: 'facebook', url: 'https://www.facebook.com/' },
          { name: 'linkedin', url: 'https://www.linkedin.com/' },
          { name: 'twitter', url: 'https://twitter.com/' },
          { name: 'vimeo-v', url: 'https://vimeo.com/' }
        ]
      },
      {
        name: 'Muhammad Mujahid',
        designation: 'Wordpress Expert',
        image: '/images/mujahid.jpg',
        isHovered: false,
        socialLinks: [
          { name: 'facebook', url: 'https://www.facebook.com/' },
          { name: 'linkedin', url: 'https://www.linkedin.com/' },
          { name: 'twitter', url: 'https://twitter.com/' },
          { name: 'vimeo-v', url: 'https://vimeo.com/' }
        ]
      },
      {
        name: 'Mubashar Shahzad',
        designation: 'Front End Developer',
        image: '/images/mbashar.jpg',
        isHovered: false,
        socialLinks: [
          { name: 'facebook', url: 'https://www.facebook.com/' },
          { name: 'linkedin', url: 'https://www.linkedin.com/' },
          { name: 'twitter', url: 'https://twitter.com/' },
          { name: 'vimeo-v', url: 'https://vimeo.com/' }
        ]
      },
      {
        name: 'Hafiz M Nadeem',
        designation: 'Mern Stack Developer',
        image: '/images/mnadeem.jpg',
        isHovered: false,
        socialLinks: [
          { name: 'facebook', url: 'https://www.facebook.com/' },
          { name: 'linkedin', url: 'https://www.linkedin.com/' },
          { name: 'twitter', url: 'https://twitter.com/' },
          { name: 'vimeo-v', url: 'https://vimeo.com/' }
        ]
      },
      {
        name: 'Asif Javed ',
        designation: 'Senior QA Engineer',
        image: '/images/mbashar.jpg',
        isHovered: false,
        socialLinks: [
          { name: 'facebook', url: 'https://www.facebook.com/' },
          { name: 'linkedin', url: 'https://www.linkedin.com/' },
          { name: 'twitter', url: 'https://twitter.com/' },
          { name: 'vimeo-v', url: 'https://vimeo.com/' }
        ]
      },
      {
        name: 'Hafiz M Tariq',
        designation: 'Junior Front End Developer',
        image: '/images/mbashar.jpg',
        isHovered: false,
        socialLinks: [
          { name: 'facebook', url: 'https://www.facebook.com/' },
          { name: 'linkedin', url: 'https://www.linkedin.com/' },
          { name: 'twitter', url: 'https://twitter.com/' },
          { name: 'vimeo-v', url: 'https://vimeo.com/' }
        ]
      },
      {
        name: 'Shahbaz Ahmed ',
        designation: 'Business Analyest',
        image: '/images/mbashar.jpg',
        isHovered: false,
        socialLinks: [
          { name: 'facebook', url: 'https://www.facebook.com/' },
          { name: 'linkedin', url: 'https://www.linkedin.com/' },
          { name: 'twitter', url: 'https://twitter.com/' },
          { name: 'vimeo-v', url: 'https://vimeo.com/' }
        ]
      }

    ]);

    // Methods
    const handleHover = (shouldHighlight, nameData) => {
      const expert = experts.value.find(expert => expert.name === nameData);
      if (expert) {
        expert.isHovered = shouldHighlight;
      }
    }

    return {
      wowDuration,
      wowDelay,
      experts,
      handleHover
    }
  }
}
</script>

<style scoped>
.block-title {
  margin-left: 32px;
}
.team-one__image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  transition: background-color 0.3s ease; /* Smooth transition for the background color */
}

.team-one__image:hover {
  background-color: rgba(0, 123, 255, 0.5); /* Blue background on hover */
}

.team-one__content {
  text-align: center;
  margin-top: 8px;
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

.team-one__social {
  display: flex;
  justify-content: center;
  gap: 15px; /* Space between social icons */
}

.icon-style {
  color: #fff;
  font-size: 20px;
  transition: color 0.3s ease;
}

.icon-style:hover {
  color: #007bff; /* Blue color for social icon hover */
}

/* Overlay effect for blue background */
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
  opacity: 0.5; /* Adjust opacity to create the blue overlay effect */
}
</style>
