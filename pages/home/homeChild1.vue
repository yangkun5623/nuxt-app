<script setup lang="ts">
const content = ref<string>('')
useFetch(window?.location?.origin + '/md/Git安装配置.md').then((e) => {
  content.value = e.data.value as string
}).catch((s) => {
})
</script>

<template>
  <div class="content">
    <v3-md-editor  :content="content"/>
  </div>
</template>

<style scoped>
.content{
  margin: 0 auto;
  width: 800px;
}
</style>