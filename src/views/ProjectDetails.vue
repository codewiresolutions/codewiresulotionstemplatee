<template>
  <div class="project-details">
    <div class="container">
      <div v-if="project" class="details-content">
        <div class="project-header">
          <h1 class="project-title">{{ project.title }}</h1>
          <div class="back-button" @click="goBack">← Back to Projects</div>
        </div>
        <div
          class="project-image"
          :style="{ backgroundImage: `url(${project.imageUrl})` }"
        ></div>
        <p class="project-description">{{ project.description }}</p>
        <div class="social-links">
          <a
            v-for="(social, index) in project.socials"
            :key="index"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="social-icon"
            :style="{ color: getSocialColor(social.name) }"
          >
            <font-awesome-icon :icon="['fab', social.icon]" />
          </a>
        </div>
      </div>
      <div v-else class="not-found">
        <h2>Project not found</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  components: {
    FontAwesomeIcon
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const projects = [
      {
        id: 1,
        title: 'Virtual Integration',
        imageUrl: '/images/project-1-1.jpg',
        socials: [
          { name: 'facebook', url: 'https://www.facebook.com/people/Code-Wire/pfbid0d7YVZxZdRJZMLhPWQemk7bsHvEYvtXLVW9qPbiwLrDDaHvUQQNd9xRBqzxcKwgZcl/', icon: 'facebook' },
          { name: 'instagram', url: 'https://www.instagram.com/codewiresolutions/', icon: 'instagram' },
          { name: 'linkedin', url: 'https://www.linkedin.com/company/86640723/admin/dashboard/', icon: 'linkedin' }
        ],
        description: 'A cutting-edge solution for seamless virtual infrastructure integration, enhancing operational efficiency across global networks.'
      },
      {
        id: 2,
        title: 'Managed IT',
        imageUrl: '/images/project-1-2.jpg',
        socials: [
          { name: 'facebook', url: 'https://www.facebook.com/people/Code-Wire/pfbid0d7YVZxZdRJZMLhPWQemk7bsHvEYvtXLVW9qPbiwLrDDaHvUQQNd9xRBqzxcKwgZcl/', icon: 'facebook' },
          { name: 'instagram', url: 'https://www.instagram.com/codewiresolutions/', icon: 'instagram' },
          { name: 'linkedin', url: 'https://www.linkedin.com/company/86640723/admin/dashboard/', icon: 'linkedin' }
        ],
        description: 'Comprehensive IT management services that optimize performance and reduce downtime for businesses of all sizes.'
      },
      {
        id: 3,
        title: 'Multi Function',
        imageUrl: '/images/social.jpg',
        socials: [
          { name: 'facebook', url: 'https://www.facebook.com/people/Code-Wire/pfbid0d7YVZxZdRJZMLhPWQemk7bsHvEYvtXLVW9qPbiwLrDDaHvUQQNd9xRBqzxcKwgZcl/', icon: 'facebook' },
          { name: 'instagram', url: 'https://www.instagram.com/codewiresolutions/', icon: 'instagram' },
          { name: 'linkedin', url: 'https://www.linkedin.com/company/86640723/admin/dashboard/', icon: 'linkedin' }
        ],
        description: 'Versatile systems designed to handle multiple operational functions, streamlining processes and boosting productivity.'
      },
      {
        id: 4,
        title: 'Cyber Security',
        imageUrl: '/images/socail2.jpg',
        socials: [
          { name: 'facebook', url: 'https://www.facebook.com/people/Code-Wire/pfbid0d7YVZxZdRJZMLhPWQemk7bsHvEYvtXLVW9qPbiwLrDDaHvUQQNd9xRBqzxcKwgZcl/', icon: 'facebook' },
          { name: 'instagram', url: 'https://www.instagram.com/codewiresolutions/', icon: 'instagram' },
          { name: 'linkedin', url: 'https://www.linkedin.com/company/86640723/admin/dashboard/', icon: 'linkedin' }
        ],
        description: 'Robust security solutions protecting against cyber threats, ensuring data integrity and business continuity.'
      }
    ];

    const project = computed(() => {
      return projects.find(p => p.id === parseInt(route.params.id));
    });

    const goBack = () => {
      router.push({ name: 'AllProjects' });
    };

    const getSocialColor = (name) => {
      const colors = {
        facebook: '#20dfe3',
        instagram: '#20dfe3',
        linkedin: '#20dfe3'
      };
      return colors[name] || '#684EF4';
    };

    return {
      project,
      goBack,
      getSocialColor
    };
  }
};
</script>

<style scoped>
.project-details {
  margin-top: 48px;
  padding: 60px 0;
  background: #f5f5f5;
  min-height: 100vh;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.details-content {
  background: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.project-title {
  font-size: 36px;
  font-weight: 600;
  color: #2D2C2C;
  margin: 0;
}

.back-button {
  background: #20DFE3;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s ease;
  white-space: nowrap;
}

.project-image {
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  margin-bottom: 20px;
}

.project-description {
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-icon {
  font-size: 24px;
  transition: transform 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.2);
}

.not-found {
  text-align: center;
  padding: 50px;
  background: white;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .project-image {
    height: 300px;
  }

  .project-title {
    font-size: 28px;
  }

  .project-description {
    font-size: 16px;
  }

  .project-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .back-button {
    align-self: flex-end;
  }
}
</style>
