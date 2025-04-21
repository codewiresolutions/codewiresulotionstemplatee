<template>
  <div class="all-projects">
<!--    <Navbar></Navbar>-->
    <div class="container">
      <h1 class="all-projects__title" style="margin-top: 42px;">All Our Projects</h1>
      <div class="project-grid">
        <div v-for="(project, index) in projects" :key="index" class="project-card">
          <div
            class="project-image"
            :style="{ backgroundImage: `url(${project.imageUrl})` }"
          ></div>
          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="social-links">
              <a
                v-for="(social, socialIndex) in project.socials"
                :key="socialIndex"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="social-icon"
              >
                <font-awesome-icon :icon="['fab', social.icon]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { reactive } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import HomeView from '@/views/HomeView.vue'
import Navbar from '@/views/Navbar.vue'
export default {
  components: {
    FontAwesomeIcon,
    HomeView,
    Navbar
  },
  setup() {
    const socials = [
      { name: 'facebook', url: 'https://www.facebook.com/people/Code-Wire/pfbid0d7YVZxZdRJZMLhPWQemk7bsHvEYvtXLVW9qPbiwLrDDaHvUQQNd9xRBqzxcKwgZcl/', icon: 'facebook' },
      { name: 'instagram', url: 'https://www.instagram.com/codewiresolutions/', icon: 'instagram' },
      { name: 'linkedin', url: 'https://www.linkedin.com/company/86640723/admin/dashboard/', icon: 'linkedin' }
    ];

    const projects = reactive([
      {
        title: 'Virtual Integration',
        imageUrl: '/images/project-1-1.jpg',
        socials: socials.map(social => ({ ...social })),
        description: 'A cutting-edge solution for seamless virtual infrastructure integration, enhancing operational efficiency across global networks.'
      },
      {
        title: 'Managed IT',
        imageUrl: '/images/project-1-2.jpg',
        socials: socials.map(social => ({ ...social })),
        description: 'Comprehensive IT management services that optimize performance and reduce downtime for businesses of all sizes.'
      },
      {
        title: 'Multi Function',
        imageUrl: '/images/social.jpg',
        socials: socials.map(social => ({ ...social })),
        description: 'Versatile systems designed to handle multiple operational functions, streamlining processes and boosting productivity.'
      },
      {
        title: 'Cyber Security',
        imageUrl: '/images/socail2.jpg',
        socials: socials.map(social => ({ ...social })),
        description: 'Robust security solutions protecting against cyber threats, ensuring data integrity and business continuity.'
      }
    ]);

    return {
      projects
    };
  }
};
</script>

<style scoped>
.all-projects {
  padding: 60px 0;
  background: #f5f5f5;
}

.all-projects__title {
  text-align: center;
  font-size: 36px;
  font-weight: 600;
  color: #2D2C2C;
  margin-bottom: 40px;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.project-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image {
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
}

.project-content {
  padding: 20px;
}

.project-title {
  font-size: 24px;
  font-weight: 600;
  color: #2D2C2C;
  margin-bottom: 10px;
}

.project-description {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-icon {
  font-size: 20px;
  color: #684EF4;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: #20DFE3;
}

@media (max-width: 768px) {
  .project-grid {
    grid-template-columns: 1fr;
  }

  .project-image {
    height: 250px;
  }
}
</style>