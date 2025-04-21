<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/views/Navbar.vue'
import FooterIntech from '@/views/Footer-Intech.vue'
</script>

<template>
  <Navbar />
  <RouterView />
  <FooterIntech />
</template>
