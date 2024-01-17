<script setup lang="ts">
import {MdEditor, MdPreview} from "md-editor-v3";
import 'md-editor-v3/lib/preview.css'
const content=defineProps(['content'])
const comp = ref('')
watch(() => content.content, (re) => {
  comp.value = re
})

</script>
<template>
  <div>
<!--    <MdEditor v-model="content"/>-->
    <MdPreview :model-value="comp"/>
  </div>
</template>

<style scoped>

</style>