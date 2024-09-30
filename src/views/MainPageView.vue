<template>
  <div class="d-flex flex-wrap mx-auto" id="mduh" style="gap: 8px; max-width: 600px;">
    <v-card
      title="bit0r1n"
      subtitle="Sergey"
      :text="ageString"
      color="primary"
      class="flex-1-0"
      href="mailto:me@bitor.in"
      @click="che"
    >
      <template v-slot:append>
        <v-avatar>
          <v-img src="@/assets/avatar.webp" />
        </v-avatar>
      </template>
    </v-card>
    <v-card
      color="secondary"
      class="flex-fill"
    >
      <v-card-title>socials</v-card-title>
      <v-card-text class="d-flex flex-wrap justify-center align-start" style="gap: 8px;">
        <v-btn v-for="social in socials" :key="social.name"
          :icon="social.icon"
          :href="social.link"
          target="_blank"
        />
      </v-card-text>
    </v-card>

    <v-card
      color="teal-lighten-1"
      title="skills"
      class="flex-1-1-100"
    >
      <div class="d-flex flex-column">
        <v-sheet
          v-for="(group, i) of skillGroups"
          :key="group.key"
          :color="group.color"
          :class="i === 0 && 'rounded-t'"
        >
          <v-card-title class="ml-2">{{ group.display }}</v-card-title>
          <v-container class="d-flex flex-wrap justify-center align-start pt-0 pb-4 px-4" style="gap: 8px;">
            <div v-for="(icon, i) of group.items" :key="i">
              <component :is="icon" style="fill: white;" size="32"></component>
            </div>
          </v-container>
        </v-sheet>
      </div>
    </v-card>

    <v-card
      color="indigo-accent-1"
      class="flex-1-1-100"
      title="xd"
    >
      <v-card-text class="d-flex justify-center">
        <v-progress-circular indeterminate v-if="!joke.length" />
        <span v-else>{{ joke }}</span>
      </v-card-text>
    </v-card>

    <v-sheet
      class="mx-auto"
      rounded
    >
      <v-card-title>projects</v-card-title>
      <v-container class="d-flex flex-wrap justify-center align-start pt-0 pb-2 px-2" style="gap: 8px;">
        <v-card v-for="project in projects" :key="project.name" :href="project.link" target="_blank" class="flex-1-1">
          <v-img
            v-bind:src="project.thumbnail"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            class="align-end"
            height="200px"
            cover
          >
            <v-card-title>{{ project.name }}</v-card-title>
            <v-card-subtitle v-if="project.description" class="mb-1 mt-n3">{{ project.description }}</v-card-subtitle>
          </v-img>
          <v-card-actions>
            <div v-for="(icon, i) of project.technologies" :key="i">
              <component v-bind:is="icon" v-bind:style="{ fill: `${project.color ? project.color : 'rgba(var(--v-theme-accent), .5)'}` }" class="mx-1"></component>
            </div>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import { projects, socials, skillGroups, getPupaAndLupaJoke, getAge } from '@/helpers'
import { ref, onMounted } from 'vue'

const joke = ref('')
const currentDate = new Date()
const ageString = (currentDate.getDate() === 23 && currentDate.getMonth() === 6
  ? '🎉 ' : '' ) + `${getAge()} y.o., Belarus`

async function che() {
  const core = document.getElementById('mduh')
  if (core?.classList.contains('flex-wrap')) {
    core.classList.replace('flex-wrap', 'flex-wrap-reverse')
    joke.value = 'на связи'
  } else {
    core?.classList.replace('flex-wrap-reverse', 'flex-wrap')
    await loadJoke()
  }
}

async function loadJoke() {
  joke.value = ''
  joke.value = await getPupaAndLupaJoke()
}

onMounted(async () => {
  await loadJoke()
})
</script>
