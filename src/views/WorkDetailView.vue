<template>
  <NotFoundInline
    v-if="!project"
    title="That case study doesn’t exist"
    text="We couldn’t find the project you were looking for. Browse our full portfolio instead."
    back-to="/work"
    back-label="Our Work"
  />

  <div v-else class="work-detail">
    <!-- HERO -->
    <section class="page-hero page-hero--compact">
      <div class="bg-grid" aria-hidden="true" />
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb" v-reveal>
          <RouterLink to="/">Home</RouterLink>
          <span class="sep">/</span>
          <RouterLink to="/work">Our Work</RouterLink>
          <span class="sep">/</span>
          <span aria-current="page">{{ project.name }}</span>
        </nav>
        <div class="page-hero__inner">
          <div class="work-detail__badges" v-reveal>
            <span class="badge">{{ project.category }}</span>
            <span class="work-detail__industry"><AppIcon name="briefcase" :size="15" /> {{ project.industry }}</span>
            <SampleFlag v-if="project.sample" label="sample case study" />
          </div>
          <h1 class="display work-detail__title" v-reveal="60">{{ project.name }}</h1>
          <p class="lead" v-reveal="120">{{ project.summary }}</p>
        </div>
      </div>
    </section>

    <!-- FEATURED IMAGE -->
    <section class="section section--flush-top">
      <div class="container">
        <div class="work-detail__media" v-reveal>
          <img :src="project.image" :alt="`${project.name} — ${project.industry}`" />
        </div>

        <div class="work-detail__body">
          <div class="work-detail__main">
            <article class="wd-block" v-reveal>
              <h2 class="wd-block__title"><span class="dot" /> The challenge</h2>
              <p>{{ project.challenge }}</p>
            </article>
            <article class="wd-block" v-reveal>
              <h2 class="wd-block__title wd-block__title--accent"><span class="dot dot--accent" /> Our solution</h2>
              <p>{{ project.solution }}</p>
            </article>

            <article class="wd-block" v-reveal>
              <h2 class="wd-block__title">The results</h2>
              <div class="wd-results">
                <div v-for="r in project.results" :key="r" class="wd-result">
                  <AppIcon name="trending-up" :size="18" /> {{ r }}
                </div>
              </div>
              <p v-if="project.sample" class="wd-block__note">
                <AppIcon name="target" :size="14" /> Sample outcomes shown for layout — verified
                client metrics replace these before launch.
              </p>
            </article>
          </div>

          <aside class="work-detail__side" v-reveal="80">
            <div class="wd-facts card">
              <h3 class="wd-facts__title">Project details</h3>
              <ul class="wd-facts__list">
                <li><span>Client</span><strong>{{ project.industry }}</strong></li>
                <li><span>Category</span><strong>{{ project.category }}</strong></li>
              </ul>
              <h4 class="wd-facts__label">Tech stack</h4>
              <div class="cluster">
                <span v-for="t in project.tech" :key="t" class="tag">{{ t }}</span>
              </div>
              <RouterLink :to="{ path: '/consultation', hash: '#book' }" class="btn btn--primary btn--block wd-facts__cta">
                Start your project
              </RouterLink>
            </div>
          </aside>
        </div>

        <!-- Prev / Next -->
        <nav class="wd-nav" aria-label="Case study navigation">
          <RouterLink v-if="prev" :to="`/work/${prev.slug}`" class="wd-nav__link wd-nav__link--prev">
            <AppIcon name="arrow-left" :size="18" />
            <span>
              <small>Previous</small>
              {{ prev.name }}
            </span>
          </RouterLink>
          <span v-else />
          <RouterLink v-if="next" :to="`/work/${next.slug}`" class="wd-nav__link wd-nav__link--next">
            <span>
              <small>Next</small>
              {{ next.name }}
            </span>
            <AppIcon name="arrow-right" :size="18" />
          </RouterLink>
        </nav>
      </div>
    </section>

    <CtaBand
      eyebrow="Your project could be next"
      title="Let’s build something worth showing off"
      text="Tell us what you’re trying to achieve. We’ll bring the engineering, design and honesty to get it shipped."
      primary-label="Book a Consultation"
      primary-to="/consultation"
      secondary-label="See More Work"
      secondary-to="/work"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppIcon from '@/components/ui/AppIcon.vue'
import SampleFlag from '@/components/ui/SampleFlag.vue'
import CtaBand from '@/components/ui/CtaBand.vue'
import NotFoundInline from '@/components/ui/NotFoundInline.vue'
import { projects, getProject } from '@/data/projects'

const route = useRoute()
const project = computed(() => getProject(route.params.slug))
const index = computed(() => projects.findIndex((p) => p.slug === route.params.slug))
const prev = computed(() => (index.value > 0 ? projects[index.value - 1] : null))
const next = computed(() =>
  index.value >= 0 && index.value < projects.length - 1 ? projects[index.value + 1] : null
)
</script>

<style scoped>
.page-hero--compact { padding-bottom: clamp(1.5rem, 3vw, 2.5rem); }
.work-detail__badges {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-4);
}
.work-detail__industry {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: var(--fs-xs);
  text-transform: uppercase;
  letter-spacing: var(--ls-wide);
  color: var(--yellow);
}
.work-detail__title { max-width: 16ch; }

.work-detail__media {
  aspect-ratio: 16 / 8;
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid var(--border);
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
}
.work-detail__media img { width: 100%; height: 100%; object-fit: cover; }

.work-detail__body {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: start;
}
.wd-block { margin-bottom: clamp(2rem, 4vw, 3rem); }
.wd-block__title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: var(--fs-sm);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-hi);
  margin-bottom: var(--space-4);
}
.wd-block__title--accent { color: var(--yellow); }
.wd-block p { color: var(--text-body); line-height: 1.75; max-width: 62ch; }
.dot { width: 8px; height: 8px; border-radius: 50%; background: var(--text-faint); }
.dot--accent { background: var(--yellow); }
.wd-results { display: flex; flex-wrap: wrap; gap: var(--space-3); }
.wd-result {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  font-size: var(--fs-sm);
  font-weight: 600;
  color: var(--text-hi);
  background: var(--yellow-tint);
  border: 1px solid var(--yellow-tint-2);
  border-radius: var(--radius-pill);
}
.wd-result :deep(.icon) { color: var(--yellow); }
.wd-block__note {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: var(--space-4);
  font-size: var(--fs-xs);
  color: var(--text-faint);
}
.wd-block__note :deep(.icon) { color: var(--yellow); }

.wd-facts {
  padding: clamp(1.5rem, 3vw, 2rem);
  position: sticky;
  top: calc(var(--header-h) + 20px);
}
.wd-facts__title { font-size: 1.2rem; margin-bottom: var(--space-5); }
.wd-facts__list { margin-bottom: var(--space-6); }
.wd-facts__list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding: 12px 0;
  border-bottom: 1px solid var(--border);
  font-size: var(--fs-sm);
}
.wd-facts__list span { color: var(--text-muted); }
.wd-facts__list strong { color: var(--text-hi); font-weight: 600; text-align: right; }
.wd-facts__label {
  font-size: var(--fs-xs);
  text-transform: uppercase;
  letter-spacing: var(--ls-wide);
  color: var(--text-faint);
  margin-bottom: var(--space-4);
}
.wd-facts__cta { margin-top: var(--space-6); }

/* Prev / next */
.wd-nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
  margin-top: clamp(3rem, 6vw, 5rem);
  padding-top: var(--space-6);
  border-top: 1px solid var(--border);
}
.wd-nav__link {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-5);
  background: var(--bg-elev);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: border-color var(--dur) var(--ease), transform var(--dur) var(--ease);
}
.wd-nav__link:hover { border-color: var(--yellow); transform: translateY(-3px); }
.wd-nav__link small {
  display: block;
  font-size: var(--fs-xs);
  text-transform: uppercase;
  letter-spacing: var(--ls-wide);
  color: var(--text-faint);
  margin-bottom: 4px;
}
.wd-nav__link span { font-weight: 600; color: var(--text-hi); }
.wd-nav__link--next { justify-content: flex-end; text-align: right; grid-column: 2; }
.wd-nav__link :deep(.icon) { color: var(--yellow); flex-shrink: 0; }

@media (max-width: 900px) {
  .work-detail__body { grid-template-columns: 1fr; }
  .wd-facts { position: static; }
}
@media (max-width: 560px) {
  .wd-nav { grid-template-columns: 1fr; }
  .wd-nav__link--next { grid-column: 1; }
}
</style>
