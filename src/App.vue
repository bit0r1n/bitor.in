<template>
  <v-app>
    <v-main>
      <MainLayout>
        <RouterView />
      </MainLayout>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
</script>
