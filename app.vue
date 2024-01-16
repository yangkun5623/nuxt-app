<template>
  <div>
    <NuxtPage/>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: 'Nuxt 3 + TypeScript',
  meta: [
    {
      name: 'description',
      content: 'Best starter for Nuxt 3 and TypeScript'
    }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [{
    innerHTML: 'console.log("Hello from head script!")',
  }]
})
</script>
