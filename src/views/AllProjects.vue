<template>
  <div class="all-projects">
    <div class="container">
      <h1 class="all-projects__title" style="margin-top: 42px;">All Our Projects</h1>
      <div class="project-grid">
        <div v-for="(project, index) in projects" :key="index" class="project-card" @click="goToProjectDetails(project)">
          <div
            class="project-image"
            :style="{ backgroundImage: `url(${project.imageUrl})` }"
            @mouseover="setHover(index, true)"
            @mouseleave="setHover(index, false)"
          >
            <div class="social-links-overlay" :class="{ 'visible': project.isHovered }">
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
          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useRouter } from 'vue-router';

export default {
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const router = useRouter();
    const socials = [
      {
        name: 'facebook',
        url: 'https://www.facebook.com/people/Code-Wire/pfbid0d7YVZxZdRJZMLhPWQemk7bsHvEYvtXLVW9qPbiwLrDDaHvUQQNd9xRBqzxcKwgZcl/',
        icon: 'facebook'
      },
      {
        name: 'instagram',
        url: 'https://www.instagram.com/codewiresolutions/',
        icon: 'instagram'
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/company/86640723/admin/dashboard/',
        icon: 'linkedin'
      }
    ];

    const projects = reactive([
      {
        id: 1,
        title: 'Virtual Integration',
        imageUrl: '/images/project-1-1.jpg',
        socials: socials.map(social => ({ ...social })),
        description: 'A cutting-edge solution for seamless virtual infrastructure integration, enhancing operational efficiency across global networks.',
        isHovered: false
      },
      {
        id: 2,
        title: 'Managed IT',
        imageUrl: '/images/project-1-2.jpg',
        socials: socials.map(social => ({ ...social })),
        description: 'Comprehensive IT management services that optimize performance and reduce downtime for businesses of all sizes.',
        isHovered: false
      },
      {
        id: 3,
        title: 'Multi Function',
        imageUrl: '/images/social.jpg',
        socials: socials.map(social => ({ ...social })),
        description: 'Versatile systems designed to handle multiple operational functions, streamlining processes and boosting productivity.',
        isHovered: false
      },
      {
        id: 4,
        title: 'Cyber Security',
        imageUrl: '/images/socail2.jpg',
        socials: socials.map(social => ({ ...social })),
        description: 'Robust security solutions protecting against cyber threats, ensuring data integrity and business continuity.',
        isHovered: false
      }
    ]);

    const goToProjectDetails = (project) => {
      router.push({ name: 'ProjectDetails', params: { id: project.id } });
    };

    const setHover = (index, state) => {
      projects[index].isHovered = state;
    };

    return {
      projects,
      goToProjectDetails,
      setHover
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
  cursor: pointer;
}

.project-card:hover {
  //transform: translateY(-5px);
}

.project-image {
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  position: relative;
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.project-card:hover .project-image {
  //transform: translateY(-10px);
  //animation: smoothBounce 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

@keyframes smoothBounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
  100% {
    transform: translateY(-10px);
  }
}

.project-image:before {
  content: "";
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  bottom: 0;
  left: 0;
  right: 0;
  top: 100%;
  transition: top 0.3s ease;
}

.project-card:hover .project-image:before {
  top: 0;
}

.social-links-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.social-links-overlay.visible {
  opacity: 1;
}

.social-icon {
  font-size: 24px;
  color: white;
  padding: 10px;
  transition: background 0.3s ease;
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

@media (max-width: 768px) {
  .project-grid {
    grid-template-columns: 1fr;
  }

  .project-image {
    height: 250px;
  }
}
</style>