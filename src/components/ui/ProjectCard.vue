<template>
  <RouterLink :to="`/work/${project.slug}`" class="project-card">
    <div class="project-card__media">
      <img :src="project.image" :alt="project.name + ' — ' + project.industry" loading="lazy" />
      <span class="project-card__cat badge">{{ project.category }}</span>
      <SampleFlag v-if="project.sample" class="project-card__flag" />
      <div class="project-card__overlay">
        <span class="link-arrow">View case study <AppIcon name="arrow-up-right" /></span>
      </div>
    </div>
    <div class="project-card__body">
      <div class="project-card__meta">{{ project.industry }}</div>
      <h3 class="project-card__title">{{ project.name }}</h3>
      <p class="project-card__summary">{{ project.summary }}</p>
      
    </div>
  </RouterLink>
</template>

<script setup>
import AppIcon from './AppIcon.vue'
import SampleFlag from './SampleFlag.vue'
defineProps({ project: { type: Object, required: true } })
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  background: var(--bg-elev);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform var(--dur) var(--ease), border-color var(--dur) var(--ease), box-shadow var(--dur) var(--ease);
  height: 100%;
}
.project-card:hover {
  transform: translateY(-6px);
  border-color: var(--yellow);
  box-shadow: var(--shadow-md);
}
.project-card__media {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
}
.project-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--dur-slow) var(--ease);
}
.project-card:hover .project-card__media img {
  transform: scale(1.06);
}
.project-card__cat {
  position: absolute;
  top: 14px;
  left: 14px;
  background: rgba(11, 11, 11, 0.82);
  color: var(--yellow);
  border-color: transparent;
}
.project-card__flag {
  position: absolute;
  top: 14px;
  right: 14px;
}
.project-card__overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  padding: var(--space-5);
  background: linear-gradient(to top, rgba(11, 11, 11, 0.85), transparent 60%);
  opacity: 0;
  transition: opacity var(--dur) var(--ease);
}
.project-card:hover .project-card__overlay {
  opacity: 1;
}
.project-card__body {
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  flex: 1;
}
.project-card__meta {
  font-size: var(--fs-xs);
  letter-spacing: var(--ls-wide);
  text-transform: uppercase;
  color: var(--text-muted);
}
.project-card__title {
  font-size: 1.4rem;
}
.project-card__summary {
  font-size: var(--fs-sm);
  color: var(--text-muted);
  flex: 1;
}
</style>
